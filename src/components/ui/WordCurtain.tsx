/*
 * Physics-based Word Curtain Component
 * Adapted from user-provided source code.
 */

import React, { useState, useEffect, useRef } from 'react';

// --- Physics Engine Utilities ---

function getPointID(r: number, c: number, cols: number) {
  return r * cols + c;
}

function smoothstep(min: number, max: number, value: number) {
  const x = Math.max(0, Math.min(1, (value - min) / (max - min)));
  return x * x * (3 - 2 * x);
}

class Vec2 {
  x: number;
  y: number;
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
  zero() {
    this.reset(0, 0);
  }
  reset(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
  clone() {
    return new Vec2(this.x, this.y);
  }
  add(v: Vec2) {
    this.x += v.x;
    this.y += v.y;
    return this;
  }
  addNew(v: Vec2) {
    return this.clone().add(v);
  }
  subtract(v: Vec2) {
    this.x -= v.x;
    this.y -= v.y;
    return this;
  }
  subtractNew(v: Vec2) {
    return this.clone().subtract(v);
  }
  multiply(v: Vec2) {
    this.x *= v.x;
    this.y *= v.y;
    return this;
  }
  multiplyNew(v: Vec2) {
    return this.clone().multiply(v);
  }
  scale(scalar: number) {
    this.x *= scalar;
    this.y *= scalar;
    return this;
  }
  scaleNew(scalar: number) {
    return this.clone().scale(scalar);
  }
  get lengthSquared() {
    return this.x ** 2 + this.y ** 2;
  }
  get length() {
    return Math.hypot(this.x, this.y);
  }
  get angle() {
    return Math.atan2(this.y, this.x);
  }
}

class Particle {
  pos: Vec2;
  oldPos: Vec2;
  velocity: Vec2;
  acceleration: Vec2;
  pinned: boolean;
  originalPinnedState: boolean;
  id: number;
  char: string;
  wordId: number;
  gravityVec: Vec2;
  downConstraint?: Constraint;

  constructor({ x = 0, y = 0, pinned = false, id = 0, char = ' ', wordId = -1 } = {}) {
    this.pos = new Vec2(x, y);
    this.oldPos = new Vec2(x, y);
    this.velocity = new Vec2();
    this.acceleration = new Vec2();
    this.pinned = pinned;
    this.originalPinnedState = pinned;
    this.id = id;
    this.char = char;
    this.wordId = wordId;
    this.gravityVec = new Vec2();
  }

  contain(CONFIG: any) {
    if (this.pinned) return;
    const radius = 5;

    if (this.pos.x < radius) {
      this.pos.x = radius;
      this.oldPos.x = this.pos.x + Math.abs(this.oldPos.x - this.pos.x) * 0.8;
    } else if (this.pos.x > CONFIG.awidth - radius) {
      this.pos.x = CONFIG.awidth - radius;
      this.oldPos.x = this.pos.x - Math.abs(this.oldPos.x - this.pos.x) * 0.8;
    }
  }

  update(delta: number, CONFIG: any) {
    if (this.pinned) {
      this.acceleration.zero();
      return;
    }

    this.velocity.reset(
      (this.pos.x - this.oldPos.x) * CONFIG.damping,
      (this.pos.y - this.oldPos.y) * CONFIG.damping
    );

    this.oldPos.reset(this.pos.x, this.pos.y);

    const dd = delta ** 2;
    this.gravityVec.reset(0, CONFIG.gravity / dd);

    this.applyForce(this.gravityVec);

    this.pos.x += this.velocity.x + this.acceleration.x * dd;
    this.pos.y += this.velocity.y + this.acceleration.y * dd;

    // Hard clamp to prevent letters from going above the top boundary
    if (this.pos.y < 5) {
      this.pos.y = 5;
      if (this.oldPos.y < this.pos.y) this.oldPos.y = this.pos.y;
    }

    this.acceleration.reset();
  }

  applyForce(v: Vec2) {
    this.acceleration.add(v);
  }
}

class Constraint {
  p1: Particle;
  p2: Particle;
  length: number;
  id: number;
  minLength: number;
  maxLength: number;
  isSpacer: boolean;

  constructor({ p1, p2, length, id, compressFactor, stretchFactor, isSpacer = false }: any) {
    this.p1 = p1;
    this.p2 = p2;
    this.length = length;
    this.id = id;
    this.minLength = length * compressFactor;
    this.maxLength = length * stretchFactor;
    this.isSpacer = isSpacer;
  }

  solve() {
    const dx = this.p2.pos.x - this.p1.pos.x;
    const dy = this.p2.pos.y - this.p1.pos.y;
    const distance = Math.hypot(dx, dy);

    if (distance === 0) return;

    let targetLength = this.length;
    if (distance < this.minLength) targetLength = this.minLength;
    else if (distance > this.maxLength) targetLength = this.maxLength;
    else return;

    const difference = targetLength - distance;
    const percent = difference / distance / 2;

    const offsetX = dx * percent;
    const offsetY = dy * percent;

    if (!this.p1.pinned) {
      this.p1.pos.x -= offsetX;
      this.p1.pos.y -= offsetY;
    }
    if (!this.p2.pinned) {
      this.p2.pos.x += offsetX;
      this.p2.pos.y += offsetY;
    }
  }
}

class Input {
  c: HTMLCanvasElement;
  particles: Particle[];
  CONFIG: any;
  mousePos: Vec2;
  grabRadius: number;
  grabbedParticle: Particle | null = null;
  pointerIsDown: boolean = false;
  pointerUpTimer: any;

  constructor({ c, particles, CONFIG }: { c: HTMLCanvasElement; particles: Particle[]; CONFIG: any }) {
    this.c = c;
    this.particles = particles;
    this.CONFIG = CONFIG;
    this.mousePos = new Vec2(-1000, -1000); // Start outside to prevent initial repulsion artifacts
    this.grabRadius = 20;
    this.bind();
  }

  pointerdown(e: PointerEvent) {
    const rect = this.c.getBoundingClientRect();
    this.mousePos.x = e.clientX - rect.left - (this.c.width / 2 - this.CONFIG.awidth / 2);
    this.mousePos.y = e.clientY - rect.top - (this.c.height / 2 - this.CONFIG.aheight / 2);

    for (const p of this.particles) {
      if (this.mousePos.subtractNew(p.pos).length < this.grabRadius) {
        this.grabbedParticle = p;
        this.grabbedParticle.originalPinnedState = this.grabbedParticle.pinned;
        this.grabbedParticle.pinned = true;
        break;
      }
    }
    if (!this.grabbedParticle) {
      this.pointerIsDown = true;
    }
  }

  pointerup(e: PointerEvent) {
    if (this.grabbedParticle) {
      this.grabbedParticle.pinned = this.grabbedParticle.originalPinnedState;
      this.grabbedParticle = null;
    }
    clearTimeout(this.pointerUpTimer);
    this.pointerUpTimer = setTimeout(() => {
      this.pointerIsDown = false;
    }, 1000);
  }

  pointermove(e: PointerEvent) {
    const rect = this.c.getBoundingClientRect();
    this.mousePos.x = e.clientX - rect.left - (this.c.width / 2 - this.CONFIG.awidth / 2);
    this.mousePos.y = e.clientY - rect.top - (this.c.height / 2 - this.CONFIG.aheight / 2);

    if (this.grabbedParticle) {
      this.grabbedParticle.pos.reset(this.mousePos.x, this.mousePos.y);
      this.grabbedParticle.oldPos.reset(this.mousePos.x, this.mousePos.y);
    }

    for (const p of this.particles) {
      const diff = this.mousePos.subtractNew(p.pos);
      const ls = diff.lengthSquared;
      if (ls < this.CONFIG.mouseSize) {
        const a = diff.angle - Math.PI;
        const strength = smoothstep(this.CONFIG.mouseSize, -2000, ls) * this.CONFIG.mouseStrength / 300;
        const force = new Vec2(Math.cos(a) * strength, Math.sin(a) * strength);
        p.applyForce(force);
      }
    }
  }

  bind() {
    this.pointerdown = this.pointerdown.bind(this);
    this.pointerup = this.pointerup.bind(this);
    this.pointermove = this.pointermove.bind(this);
    this.c.addEventListener('pointerdown', this.pointerdown);
    window.addEventListener('pointerup', this.pointerup);
    window.addEventListener('pointermove', this.pointermove);
  }

  destroy() {
    this.c.removeEventListener('pointerdown', this.pointerdown);
    window.removeEventListener('pointerup', this.pointerup);
    window.removeEventListener('pointermove', this.pointermove);
  }
}

// --- React Component ---

interface WordCurtainProps {
  text: string;
  color?: string;
  frequencyBands?: { bass: number; mid: number; high: number };
  combo?: number;
  repulsionEnergy?: number;
  repulsionCenter?: { x: number; y: number };
  repulsionShape?: string;
  repulsionRotation?: number;
}

export const WordCurtain: React.FC<WordCurtainProps> = ({ 
  text, 
  color = '#FFFFFF',
  frequencyBands = { bass: 0, mid: 0, high: 0 },
  combo = 0,
  repulsionEnergy = 0,
  repulsionCenter,
  repulsionShape = 'sphere',
  repulsionRotation = 0
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const configRef = useRef<any>({});
  const smoothedEnergyRef = useRef(0);
  const charCanvasesRef = useRef<Record<string, HTMLCanvasElement>>({});
  const [dims, setDims] = useState({ w: 0, h: 0 });

  const energyRef = useRef(repulsionEnergy);
  const centerRef = useRef(repulsionCenter);
  const shapeRef = useRef(repulsionShape);
  const rotateRef = useRef(repulsionRotation);
  const dimsRef = useRef(dims);
  const audioRef = useRef(frequencyBands);

  useEffect(() => { audioRef.current = frequencyBands; }, [frequencyBands]);
  useEffect(() => { energyRef.current = repulsionEnergy; }, [repulsionEnergy]);
  useEffect(() => { centerRef.current = repulsionCenter; }, [repulsionCenter]);
  useEffect(() => { shapeRef.current = repulsionShape; }, [repulsionShape]);
  useEffect(() => { rotateRef.current = repulsionRotation; }, [repulsionRotation]);
  useEffect(() => { dimsRef.current = dims; }, [dims]);

  // Monitor container size
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver(entries => {
      for (let entry of entries) {
        setDims({
          w: Math.floor(entry.contentRect.width),
          h: Math.floor(entry.contentRect.height)
        });
      }
    });
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || dims.w <= 0 || dims.h <= 0) return;
    const c = canvasRef.current;
    const container = containerRef.current;
    if (!c || !container || dims.w <= 0 || dims.h <= 0) return;

    const ctx = c.getContext('2d');
    if (!ctx) return;

    const { w, h } = dims;
    
    const CONFIG = {
      awidth: w,
      aheight: h,
      gridW: Math.max(5, Math.floor(w / 18)),
      gridH: Math.max(10, Math.floor(h / 18)),
      gravity: 0.45, // Increased gravity for heavier feel
      damping: 0.96, // Slightly more damping to reduce wild rebounds
      iterationsPerFrame: 5,
      compressFactor: 0.1,
      stretchFactor: 1.1,
      mouseSize: 4000,
      mouseStrength: 5,
      contain: true,
      randomSolve: false,
    };
    
    const cellWidth = CONFIG.awidth / CONFIG.gridW;
    const cellHeight = CONFIG.aheight / CONFIG.gridH;
    configRef.current = { ...CONFIG, cellWidth, cellHeight };

    c.width = w;
    c.height = h;

    const particles: Particle[] = [];
    const constraints: Constraint[] = [];
    
    for (let j = 0; j < CONFIG.gridH; j++) {
      for (let i = 0; i < CONFIG.gridW; i++) {
        const x = (i + 0.5) * cellWidth;
        const y = (j + 0.5) * cellHeight;
        const pinned = j === 0;
        const p = new Particle({ x, y, pinned, id: getPointID(j, i, CONFIG.gridW) });
        particles.push(p);
      }
    }
    
    for (let j = 0; j < CONFIG.gridH; j++) {
      for (let i = 0; i < CONFIG.gridW; i++) {
        const id = getPointID(j, i, CONFIG.gridW);
        const p = particles[id];
        if (!p) continue;

        if (j < CONFIG.gridH - 1) {
          const bottomP = particles[getPointID(j + 1, i, CONFIG.gridW)];
          if (bottomP) {
            const c = new Constraint({
              p1: p, p2: bottomP, length: cellHeight, 
              compressFactor: CONFIG.compressFactor, stretchFactor: CONFIG.stretchFactor
            });
            constraints.push(c);
            p.downConstraint = c;
          }
        }
        if (i < CONFIG.gridW - 1) {
          const rightP = particles[getPointID(j, i + 1, CONFIG.gridW)];
          if (rightP) {
            const hc = new Constraint({
              p1: p, p2: rightP, length: cellWidth,
              compressFactor: 0.6, stretchFactor: 4, isSpacer: true
            });
            constraints.push(hc);
          }
        }
      }
    }
    
    particlesRef.current = particles;
    const input = new Input({ c, particles, CONFIG: configRef.current });

    let rafID: number;
    let lastDelta = performance.now();
    
    function draw(time: number) {
      if (!c || !ctx) return;
      ctx.clearRect(0, 0, c.width, c.height);
      
      const offset = [c.width / 2 - configRef.current.awidth / 2, 0];
      const audio = audioRef.current;
      
      // Even smoother energy transitions for a more organic feel
      // Disable music-driven energy for the curtain
      const energy = 0;
      const pulseScale = 1.0;
      
      // Calculate tremble per word
      const wordTrembles: Record<number, { x: number, y: number }> = {};
      
      particles.forEach(p => {
        if (p.char && p.char !== " ") {
          const img = charCanvasesRef.current[p.char];
          if (!img) return;
          
          if (p.wordId !== -1 && !wordTrembles[p.wordId]) {
             // Multi-frequency oscillation for organic "shiver" look
             const t = time * 0.002; // Slower time base
             const amplitude = energy * 2.5; // Reduced from 6 to 2.5 for subtlety
             
             wordTrembles[p.wordId] = {
                x: (Math.sin(t * 15 + p.wordId) + Math.sin(t * 31 + p.wordId * 2)) * amplitude * 0.5,
                y: (Math.cos(t * 12 + p.wordId) + Math.cos(t * 22 + p.wordId * 3)) * amplitude * 0.3
             };
          }
          
          const tremble = wordTrembles[p.wordId] || { x: 0, y: 0 };
          
          const drawW = img.width * pulseScale;
          const drawH = img.height * pulseScale;
          const halfW = drawW / 2;
          const halfH = drawH / 2;
          
          ctx.globalAlpha = 0.7 + Math.min(0.3, energy);
          ctx.drawImage(
            img, 
            p.pos.x + offset[0] - halfW + tremble.x, 
            p.pos.y + offset[1] - halfH + tremble.y, 
            drawW, 
            drawH
          );
        }
      });
      ctx.globalAlpha = 1.0;
    }

    function loop(time: number) {
      rafID = requestAnimationFrame(loop);
      
      const currentDims = dimsRef.current;
      if (currentDims.w <= 0 || currentDims.h <= 0) return; // Guard against zero dimensions

      let delta = time - lastDelta;
      if (delta > 50) delta = 16;
      lastDelta = time;
      
      const currentCenter = centerRef.current;
      const currentEnergy = energyRef.current;
      const currentShape = shapeRef.current;
      const currentRotate = rotateRef.current;

      const rot = currentRotate || 0;
      const cosR = Math.cos(rot);
      const sinR = Math.sin(rot);

      // 1. Calculate reactive baseRadius ONCE for the whole loop to ensure consistency
      const b = audioRef.current || { bass: 0, mid: 0, high: 0 };
      const deform = 1 + b.bass * 0.5 + b.mid * 0.3 + b.high * 0.15;
      // Precision Calibration: Reduced from 115 to 95 for a maximum snug fit
      const reactiveBaseRadius = (95 + (currentEnergy || 0) * 45) * deform;

      particles.forEach(p => {
        // Only apply physical interactions to active characters
        if (!p.char || p.char === ' ') return;

        // External Repulsion Logic (Advanced Shape-Aware)
        if (currentCenter) {
          const centerX = currentCenter.x === -1 ? currentDims.w / 2 : currentCenter.x;
          const centerY = currentCenter.y === -1 ? currentDims.h * 0.45 : currentCenter.y;
          
          // 1. Get relative coordinates
          let dx = p.pos.x - centerX;
          let dy = p.pos.y - centerY;
          
          // 2. Apply rotation to coordinate system
          const rx = dx * cosR - dy * sinR;
          const ry = dx * sinR + dy * cosR;
          
          let dist = 0;
          let forceFactor = 0;

          // 3. Shape-specific SDF (Signed Distance Field) simulation in 2D
          // UNIFIED Multipliers to match standardized visual dimensions
          switch (currentShape) {
            case 'box': {
              const bSide = reactiveBaseRadius * 0.85; 
              const qx = Math.abs(rx) - bSide;
              const qy = Math.abs(ry) - bSide;
              const d = Math.sqrt(Math.max(qx, 0) ** 2 + Math.max(qy, 0) ** 2) + Math.min(Math.max(qx, qy), 0);
              if (d < 0) {
                dist = Math.abs(d);
                forceFactor = 1.0;
              }
              break;
            }
            case 'cylinder': {
              const bW = reactiveBaseRadius * 0.55;
              const bH = reactiveBaseRadius * 1.0;
              const qx = Math.abs(rx) - bW;
              const qy = Math.abs(ry) - bH;
              const d = Math.sqrt(Math.max(qx, 0) ** 2 + Math.max(qy, 0) ** 2) + Math.min(Math.max(qx, qy), 0);
              if (d < 0) {
                dist = Math.abs(d);
                forceFactor = 1.0;
              }
              break;
            }
            case 'torus': {
              const rInner = reactiveBaseRadius * 0.45;
              const rOuter = reactiveBaseRadius * 0.8;
              const dToCenter = Math.sqrt(rx * rx + ry * ry);
              const d = Math.abs(dToCenter - (rInner + rOuter) / 2) - (rOuter - rInner) / 2;
              if (d < 0) {
                dist = Math.abs(d);
                forceFactor = 1.0;
              }
              break;
            }
            case 'cone':
            case 'tetrahedron': {
                const s = reactiveBaseRadius * 1.1;
                const px = Math.abs(rx);
                const py = ry;
                const d = Math.max(px * 0.866 + py * 0.5, -py) - s * 0.5;
                if (d < 0) {
                  dist = Math.abs(d);
                  forceFactor = 1.0;
                }
                break;
            }
            default: { // sphere, icosahedron, etc.
                const r = reactiveBaseRadius * 0.75;
                const d2 = rx * rx + ry * ry;
                const r2 = r * r;
                if (d2 < r2) {
                  const d = Math.sqrt(d2);
                  dist = r - d;
                  forceFactor = 1.0;
                }
                break;
            }
          }

          if (dist > 0) {
            const angle = Math.atan2(dy, dx);
            
            // 4. Hard Projection
            p.pos.x += Math.cos(angle) * dist;
            p.pos.y += Math.sin(angle) * dist;
            
            p.velocity.x *= 0.8;
            p.velocity.y *= 0.8;

            // 5. Tangential drag
            const dragStrength = (dist / reactiveBaseRadius) * (2.0 + (currentEnergy || 0) * 4) * 0.15;
            p.applyForce(new Vec2(-Math.sin(angle) * dragStrength, Math.cos(angle) * dragStrength));
          }
        }
        
        p.update(delta, configRef.current);
      });

      for (let i = 0; i < CONFIG.iterationsPerFrame; i++) {
        constraints.forEach(c => c.solve());
      }
      
      // FINAL HARD BARRIER PASS
      if (currentCenter) {
        const centerX = currentCenter.x === -1 ? currentDims.w / 2 : currentCenter.x;
        const centerY = currentCenter.y === -1 ? currentDims.h * 0.45 : currentCenter.y;

        particles.forEach(p => {
          if (!p.char || p.char === ' ') return;

          let dx = p.pos.x - centerX;
          let dy = p.pos.y - centerY;
          const rx = dx * cosR - dy * sinR;
          const ry = dx * sinR + dy * cosR;
          
          let dist = 0;

          switch (currentShape) {
            case 'box': {
              const bSide = reactiveBaseRadius * 0.85;
              const qx = Math.abs(rx) - bSide;
              const qy = Math.abs(ry) - bSide;
              const d = Math.sqrt(Math.max(qx, 0) ** 2 + Math.max(qy, 0) ** 2) + Math.min(Math.max(qx, qy), 0);
              if (d < 0) dist = Math.abs(d);
              break;
            }
            case 'cylinder': {
              const bW = reactiveBaseRadius * 0.55;
              const bH = reactiveBaseRadius * 1.0;
              const qx = Math.abs(rx) - bW;
              const qy = Math.abs(ry) - bH;
              const d = Math.sqrt(Math.max(qx, 0) ** 2 + Math.max(qy, 0) ** 2) + Math.min(Math.max(qx, qy), 0);
              if (d < 0) dist = Math.abs(d);
              break;
            }
            case 'torus': {
              const rInner = reactiveBaseRadius * 0.45;
              const rOuter = reactiveBaseRadius * 0.8;
              const dToCenter = Math.sqrt(rx * rx + ry * ry);
              const d = Math.abs(dToCenter - (rInner + rOuter) / 2) - (rOuter - rInner) / 2;
              if (d < 0) dist = Math.abs(d);
              break;
            }
            case 'cone':
            case 'tetrahedron': {
                const s = reactiveBaseRadius * 1.1;
                const px = Math.abs(rx);
                const py = ry;
                const d = Math.max(px * 0.866 + py * 0.5, -py) - s * 0.5;
                if (d < 0) dist = Math.abs(d);
                break;
            }
            default: {
                const r = reactiveBaseRadius * 0.75;
                const d2 = rx * rx + ry * ry;
                const r2 = r * r;
                if (d2 < r2) dist = r - Math.sqrt(d2);
                break;
            }
          }

          if (dist > 0) {
            const angle = Math.atan2(dy, dx);
            p.pos.x += Math.cos(angle) * dist;
            p.pos.y += Math.sin(angle) * dist;
            p.velocity.x *= 0.5;
            p.velocity.y *= 0.5;
          }
        });
      }

      if (CONFIG.contain) particles.forEach(p => p.contain(configRef.current));
      draw(time);
    }
    
    rafID = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(rafID);
      input.destroy();
    };
  }, [dims.w, dims.h]);

  useEffect(() => {
    const CONFIG = configRef.current;
    if (!CONFIG.gridW) return;
    
    const chars = Array.from(text || '');
    const fontSize = Math.max(7, CONFIG.cellHeight * 0.9);
    
    // Clear cache if color changes to ensure re-rendering
    if (configRef.current.lastColor !== color) {
      charCanvasesRef.current = {};
      configRef.current.lastColor = color;
    }
    
    const newCanvases = { ...charCanvasesRef.current };
    for (const ch of new Set(chars)) {
      if (ch === ' ' || newCanvases[ch]) continue;
      const off = document.createElement('canvas');
      off.width = off.height = Math.ceil(fontSize * 1.5);
      const octx = off.getContext('2d');
      if (octx) {
        octx.font = `bold ${fontSize}px monospace`;
        octx.textAlign = 'center';
        octx.textBaseline = 'middle';
        octx.fillStyle = color;
        octx.fillText(ch, off.width / 2, off.height / 2);
      }
      newCanvases[ch] = off;
    }
    charCanvasesRef.current = newCanvases;

    // Distribute characters row by row (left-to-right)
    // Map characters to word indices
    const rawText = text || '';
    const wordList = rawText.split(/(\s+)/); // Keep spaces as separate entries
    let charIdx = 0;
    let currentWordId = 0;
    
    wordList.forEach(word => {
       const wordChars = Array.from(word);
       const isSpace = word.trim() === '';
       
       wordChars.forEach(ch => {
          if (charIdx < particlesRef.current.length) {
             const p = particlesRef.current[charIdx];
             p.char = ch;
             p.wordId = isSpace ? -1 : currentWordId;
             charIdx++;
          }
       });
       if (!isSpace) currentWordId++;
    });
    
    for (; charIdx < particlesRef.current.length; charIdx++) {
       const p = particlesRef.current[charIdx];
       p.char = ' ';
       p.wordId = -1;
    }
  }, [text, color, dims.w, dims.h]);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-auto">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};
