// --- HARDENED PHYSICS INLINE ---
const PHYSICS = {
    sphere: {
        baseSize: 0.45,
        bounceSpeed: 0.0025,
        bounceAmplitude: 3.1,
        squashThreshold: 2.7,
        squashIntensity: 1.5,
        stretchIntensity: 0.8,
    },
    audio: {
        bassWeight: 0.5,
        midWeight: 0.3,
        highWeight: 0.15,
        sizeMultiplier: 1.0,
        innerMeshScale: 0.55
    },
    curtain: {
        repulsionPadding: 1.1,
        frustumHeightReference: 8.39,
    }
};

console.log('WordCurtain Worker: Ready');

self.onerror = (err) => {
  console.error('WordCurtain Worker Error:', err);
};

self.onmessage = (e: MessageEvent) => {
  const { type, payload } = e.data;
  switch (type) {
    case 'init': init(payload.canvas, payload.dims); break;
    case 'resize': resize(payload.dims); break;
    case 'updateColor': color = payload.color; rebuildTextCache(); break;
    case 'updateText': text = payload.text; updateTextParticles(); break;
    case 'updateAudio': freqBands = payload.frequencyBands; break;
    case 'updateRepulsion': 
      repCenter = payload.center; repEnergy = payload.energy; 
      repShape = payload.shape; repRot = payload.rotate; break;
    case 'updateFloor': floorHeight = payload.floorHeight; break;
    case 'pointerEvent': handlePointer(payload.type, payload.x, payload.y); break;
  }
};

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
  constructor(x = 0, y = 0) { this.x = x; this.y = y; }
  zero() { this.reset(0, 0); }
  reset(x = 0, y = 0) { this.x = x; this.y = y; }
  clone() { return new Vec2(this.x, this.y); }
  add(v: Vec2) { this.x += v.x; this.y += v.y; return this; }
  addNew(v: Vec2) { return this.clone().add(v); }
  subtract(v: Vec2) { this.x -= v.x; this.y -= v.y; return this; }
  subtractNew(v: Vec2) { return this.clone().subtract(v); }
  multiply(v: Vec2) { this.x *= v.x; this.y *= v.y; return this; }
  scale(scalar: number) { this.x *= scalar; this.y *= scalar; return this; }
  get lengthSquared() { return this.x ** 2 + this.y ** 2; }
  get length() { return Math.hypot(this.x, this.y); }
  get angle() { return Math.atan2(this.y, this.x); }
}

class Particle {
  pos: Vec2; oldPos: Vec2; velocity: Vec2; acceleration: Vec2;
  pinned: boolean; originalPinnedState: boolean;
  id: number; char: string; wordId: number; gravityVec: Vec2;
  downConstraint?: Constraint;

  constructor({ x = 0, y = 0, pinned = false, id = 0, char = ' ', wordId = -1 } = {}) {
    this.pos = new Vec2(x, y); this.oldPos = new Vec2(x, y);
    this.velocity = new Vec2(); this.acceleration = new Vec2();
    this.pinned = pinned; this.originalPinnedState = pinned;
    this.id = id; this.char = char; this.wordId = wordId;
    this.gravityVec = new Vec2();
  }

  contain(CONFIG: any) {
    if (this.pinned) return;
    const radius = 5;
    if (this.pos.x < radius) {
      this.pos.x = radius; this.oldPos.x = this.pos.x + Math.abs(this.oldPos.x - this.pos.x) * 0.8;
    } else if (this.pos.x > CONFIG.awidth - radius) {
      this.pos.x = CONFIG.awidth - radius; this.oldPos.x = this.pos.x - Math.abs(this.oldPos.x - this.pos.x) * 0.8;
    }
  }

  update(delta: number, CONFIG: any) {
    if (this.pinned) { this.acceleration.zero(); return; }
    this.velocity.reset((this.pos.x - this.oldPos.x) * CONFIG.damping, (this.pos.y - this.oldPos.y) * CONFIG.damping);
    this.oldPos.reset(this.pos.x, this.pos.y);
    const dd = delta ** 2;
    this.gravityVec.reset(0, CONFIG.gravity / dd);
    this.applyForce(this.gravityVec);
    this.pos.x += this.velocity.x + this.acceleration.x * dd;
    this.pos.y += this.velocity.y + this.acceleration.y * dd;
    if (this.pos.y < 5) { this.pos.y = 5; if (this.oldPos.y < this.pos.y) this.oldPos.y = this.pos.y; }
    this.acceleration.reset();
  }

  applyForce(v: Vec2) { this.acceleration.add(v); }
}

class Constraint {
  p1: Particle; p2: Particle; length: number; id?: number;
  minLength: number; maxLength: number; isSpacer: boolean;
  constructor({ p1, p2, length, id, compressFactor, stretchFactor, isSpacer = false }: any) {
    this.p1 = p1; this.p2 = p2; this.length = length; this.id = id;
    this.minLength = length * compressFactor; this.maxLength = length * stretchFactor;
    this.isSpacer = isSpacer;
  }

  solve() {
    const dx = this.p2.pos.x - this.p1.pos.x; const dy = this.p2.pos.y - this.p1.pos.y;
    const distance = Math.hypot(dx, dy);
    if (distance === 0) return;
    let targetLength = this.length;
    if (distance < this.minLength) targetLength = this.minLength;
    else if (distance > this.maxLength) targetLength = this.maxLength;
    else return;
    const difference = targetLength - distance;
    const percent = difference / distance / 2;
    const offsetX = dx * percent; const offsetY = dy * percent;
    if (!this.p1.pinned) { this.p1.pos.x -= offsetX; this.p1.pos.y -= offsetY; }
    if (!this.p2.pinned) { this.p2.pos.x += offsetX; this.p2.pos.y += offsetY; }
  }
}

// --- Worker State ---
let canvas: OffscreenCanvas | null = null;
let ctx: OffscreenCanvasRenderingContext2D | null = null;
let particles: Particle[] = [];
let constraints: Constraint[] = [];
let config: any = {};
let charCanvases: Record<string, OffscreenCanvas> = {};
let rafID: number = 0;
let lastDelta = performance.now();

let mousePos = new Vec2(-1000, -1000);
let grabbedParticle: Particle | null = null;
let pointerIsDown = false;
let color = '#00ffcc';
let text = '';
let freqBands = { bass: 0, mid: 0, high: 0 };
let floorHeight = 0.62;
let repCenter = { x: -1, y: -1 };
let repEnergy = 0;
let repShape = 'icosahedron';
let repRot = 0;
let startTime = 0;

function init(c: OffscreenCanvas, params: any) {
  console.log('WordCurtain Worker: init', params);
  canvas = c;
  ctx = canvas.getContext('2d') as OffscreenCanvasRenderingContext2D;
  
  startTime = params.startTime || 0;
  // Initial state sync
  color = params.color || color;
  text = params.text || text;
  freqBands = params.frequencyBands || freqBands;
  floorHeight = params.floorHeight || floorHeight;
  if (params.repulsion) {
    repCenter = params.repulsion.center;
    repEnergy = params.repulsion.energy;
    repShape = params.repulsion.shape;
    repRot = params.repulsion.rotate;
  }

  resize(params.dims);
  rebuildTextCache();
  updateTextParticles();
  
  loop(performance.now());
}

function resize(dims: {w: number, h: number}) {
  if (!canvas) return;
  canvas.width = dims.w;
  canvas.height = dims.h;
  
  config = {
    awidth: dims.w, aheight: dims.h,
    gridW: Math.max(5, Math.floor(dims.w / 18)),
    gridH: Math.max(10, Math.floor(dims.h / 18)),
    gravity: 0.45, damping: 0.96, iterationsPerFrame: 5,
    compressFactor: 0.1, stretchFactor: 1.1,
    mouseSize: 4000, mouseStrength: 5, contain: true, randomSolve: false,
  };
  config.cellWidth = config.awidth / config.gridW;
  config.cellHeight = config.aheight / config.gridH;

  particles = [];
  constraints = [];
  for (let j = 0; j < config.gridH; j++) {
    for (let i = 0; i < config.gridW; i++) {
      const x = (i + 0.5) * config.cellWidth;
      const y = (j + 0.5) * config.cellHeight;
      const pinned = j === 0;
      particles.push(new Particle({ x, y, pinned, id: getPointID(j, i, config.gridW) }));
    }
  }
  for (let j = 0; j < config.gridH; j++) {
    for (let i = 0; i < config.gridW; i++) {
      const id = getPointID(j, i, config.gridW);
      const p = particles[id];
      if (j < config.gridH - 1) {
        const bottomP = particles[getPointID(j + 1, i, config.gridW)];
        if (bottomP) constraints.push(new Constraint({ p1: p, p2: bottomP, length: config.cellHeight, compressFactor: config.compressFactor, stretchFactor: config.stretchFactor }));
      }
      if (i < config.gridW - 1) {
        const rightP = particles[getPointID(j, i + 1, config.gridW)];
        if (rightP) constraints.push(new Constraint({ p1: p, p2: rightP, length: config.cellWidth, compressFactor: 0.6, stretchFactor: 4, isSpacer: true }));
      }
    }
  }
  rebuildTextCache();
  updateTextParticles();
}

function handlePointer(type: string, x: number, y: number) {
  mousePos.x = x; mousePos.y = y;
  if (type === 'down') {
    for (const p of particles) {
      if (mousePos.subtractNew(p.pos).length < 20) {
        grabbedParticle = p;
        grabbedParticle.originalPinnedState = grabbedParticle.pinned;
        grabbedParticle.pinned = true;
        break;
      }
    }
    if (!grabbedParticle) pointerIsDown = true;
  } else if (type === 'up') {
    if (grabbedParticle) { grabbedParticle.pinned = grabbedParticle.originalPinnedState; grabbedParticle = null; }
    pointerIsDown = false;
  } else if (type === 'move') {
    if (grabbedParticle) { grabbedParticle.pos.reset(x, y); grabbedParticle.oldPos.reset(x, y); }
    for (const p of particles) {
      const diff = mousePos.subtractNew(p.pos);
      const ls = diff.lengthSquared;
      if (ls < config.mouseSize) {
        const a = diff.angle - Math.PI;
        const strength = smoothstep(config.mouseSize, -2000, ls) * config.mouseStrength / 300;
        p.applyForce(new Vec2(Math.cos(a) * strength, Math.sin(a) * strength));
      }
    }
  }
}

let lastColorCached = '';

function rebuildTextCache() {
  if (!config.gridW) return;
  
  // Clear cache if color changed
  if (lastColorCached !== color) {
    charCanvases = {};
    lastColorCached = color;
  }

  const chars = Array.from(text || '');
  const fontSize = Math.max(7, config.cellHeight * 0.9);
  
  for (const ch of new Set(chars)) {
    if (ch === ' ' || charCanvases[ch]) continue;
    const off = new OffscreenCanvas(Math.ceil(fontSize * 1.5), Math.ceil(fontSize * 1.5));
    const octx = off.getContext('2d');
    if (octx) {
      octx.font = `bold ${fontSize}px monospace`;
      octx.textAlign = 'center'; octx.textBaseline = 'middle';
      octx.fillStyle = color;
      octx.fillText(ch, off.width / 2, off.height / 2);
    }
    charCanvases[ch] = off;
  }
}

function updateTextParticles() {
  if (!particles.length) return;
  const wordList = text.split(/(\s+)/);
  let charIdx = 0; let currentWordId = 0;
  wordList.forEach(word => {
     const wordChars = Array.from(word);
     const isSpace = word.trim() === '';
     wordChars.forEach(ch => {
        if (charIdx < particles.length) {
           particles[charIdx].char = ch;
           particles[charIdx].wordId = isSpace ? -1 : currentWordId;
           charIdx++;
        }
     });
     if (!isSpace) currentWordId++;
  });
  for (; charIdx < particles.length; charIdx++) {
     particles[charIdx].char = ' ';
     particles[charIdx].wordId = -1;
  }
}

function loop(time: number) {
  rafID = requestAnimationFrame(loop);
  if (!canvas || !ctx || config.awidth <= 0 || config.aheight <= 0) return;
  
  let delta = time - lastDelta;
  if (delta > 50) delta = 16;
  lastDelta = time;

  const rot = repRot || 0;
  const cosR = Math.cos(rot); const sinR = Math.sin(rot);
  const fixedApexY = 2.5432;
  const floorYUnit = - (floorHeight - 0.5) * PHYSICS.curtain.frustumHeightReference;
  const targetFloorUnit = floorYUnit + PHYSICS.sphere.baseSize;
  const dynamicBounceAmplitude = fixedApexY - targetFloorUnit;
  const bounceTime = (performance.now() - startTime) * PHYSICS.sphere.bounceSpeed;
  const currentOffset = (1 - Math.abs(Math.cos(bounceTime))) * dynamicBounceAmplitude;
  const currentY = fixedApexY - currentOffset;

  const b = freqBands;
  const audioEnergy = b.bass * PHYSICS.audio.bassWeight + b.mid * PHYSICS.audio.midWeight + b.high * PHYSICS.audio.highWeight;
  const sizeMultiplier = 1 + (audioEnergy * PHYSICS.audio.sizeMultiplier);
  const structuralDeform = 1 + audioEnergy;
  
  // SYNC DEFORMATION LOGIC
  const dynamicSquashThreshold = Math.max(0, dynamicBounceAmplitude - 0.4);
  const squashFactor = currentOffset > dynamicSquashThreshold ? 
      1 - ((currentOffset - dynamicSquashThreshold) * PHYSICS.sphere.squashIntensity) : 1;
  const stretchFactor = 1 + (1 - squashFactor) * PHYSICS.sphere.stretchIntensity;

  const pixelsPerUnit = config.aheight / PHYSICS.curtain.frustumHeightReference;
  const reactiveBaseRadius = (PHYSICS.sphere.baseSize * pixelsPerUnit) * structuralDeform * sizeMultiplier * 0.92;

  particles.forEach(p => {
    if (!p.char || p.char === ' ') return;
    
    // 1. Resolve geometric repulsion (from MorphSphere)
    const centerX = repCenter.x === -1 ? config.awidth / 2 : repCenter.x;
    const centerY = (config.aheight / 2) - ((fixedApexY - currentOffset) * pixelsPerUnit);
    
    let dx = p.pos.x - centerX; 
    let dy = p.pos.y - centerY;
    
    // Apply visual squash/stretch to the collision coordinates
    // When sphere stretches (horizontal), we must contract the distance check to match
    const rx = (dx * cosR - dy * sinR) / stretchFactor; 
    const ry = (dx * sinR + dy * cosR) / squashFactor;
    
    let dist = 0; 
    switch (repShape) {
      case 'box': { const bSide = reactiveBaseRadius * 0.85; const qx = Math.abs(rx) - bSide; const qy = Math.abs(ry) - bSide; const d = Math.sqrt(Math.max(qx, 0) ** 2 + Math.max(qy, 0) ** 2) + Math.min(Math.max(qx, qy), 0); if (d < 0) dist = Math.abs(d); break; }
      case 'cylinder': { const bW = reactiveBaseRadius * 0.55; const bH = reactiveBaseRadius * 1.0; const qx = Math.abs(rx) - bW; const qy = Math.abs(ry) - bH; const d = Math.sqrt(Math.max(qx, 0) ** 2 + Math.max(qy, 0) ** 2) + Math.min(Math.max(qx, qy), 0); if (d < 0) dist = Math.abs(d); break; }
      case 'torus': { const rInner = reactiveBaseRadius * 0.45; const rOuter = reactiveBaseRadius * 0.8; const dToCenter = Math.sqrt(rx * rx + ry * ry); const d = Math.abs(dToCenter - (rInner + rOuter) / 2) - (rOuter - rInner) / 2; if (d < 0) dist = Math.abs(d); break; }
      case 'cone':
      case 'tetrahedron': { const s = reactiveBaseRadius * 1.1; const px = Math.abs(rx); const py = ry; const d = Math.max(px * 0.866 + py * 0.5, -py) - s * 0.5; if (d < 0) dist = Math.abs(d); break; }
      default: { const r = reactiveBaseRadius * 0.75; const d2 = rx * rx + ry * ry; if (d2 < r * r) dist = r - Math.sqrt(d2); break; }
    }

    if (dist > 0) {
      const angle = Math.atan2(dy, dx);
      // Hard projection outside the shape
      p.pos.x += Math.cos(angle) * dist; 
      p.pos.y += Math.sin(angle) * dist;
      p.velocity.x *= 0.5; 
      p.velocity.y *= 0.5;
      
      // Tangential drag for a more dynamic feel
      const dragStrength = (dist / reactiveBaseRadius) * (2.0 + (repEnergy || 0) * 4) * 0.15;
      p.applyForce(new Vec2(-Math.sin(angle) * dragStrength, Math.cos(angle) * dragStrength));
    }
    
    p.update(delta, config);
  });

  for (let i = 0; i < config.iterationsPerFrame; i++) { 
    constraints.forEach(c => c.solve()); 
  }
  if (config.contain) particles.forEach(p => p.contain(config));

  // Render loop
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  const floorYPixels = canvas.height * floorHeight;
  const floorGradient = ctx.createLinearGradient(canvas.width * 0.1, floorYPixels, canvas.width * 0.9, floorYPixels);
  floorGradient.addColorStop(0, 'transparent');
  floorGradient.addColorStop(0.5, color);
  floorGradient.addColorStop(1, 'transparent');
  ctx.strokeStyle = floorGradient;
  ctx.lineWidth = 2; ctx.globalAlpha = 0.3;
  ctx.moveTo(canvas.width * 0.1, floorYPixels);
  ctx.lineTo(canvas.width * 0.9, floorYPixels);
  ctx.stroke(); ctx.globalAlpha = 1.0;

  const offset = [canvas.width / 2 - config.awidth / 2, 0];
  const wordTrembles: Record<number, { x: number, y: number }> = {};
  particles.forEach(p => {
    if (p.char && p.char !== " ") {
      const img = charCanvases[p.char];
      if (!img) return;
      if (p.wordId !== -1 && !wordTrembles[p.wordId]) {
         const t = time * 0.002;
         wordTrembles[p.wordId] = {
            x: (Math.sin(t * 15 + p.wordId) + Math.sin(t * 31 + p.wordId * 2)) * 0 * 0.5,
            y: (Math.cos(t * 12 + p.wordId) + Math.cos(t * 22 + p.wordId * 3)) * 0 * 0.3
         };
      }
      const tremble = wordTrembles[p.wordId] || { x: 0, y: 0 };
      const drawW = img.width; const drawH = img.height;
      ctx!.globalAlpha = 0.7;
      ctx!.drawImage(img, p.pos.x + offset[0] - drawW / 2 + tremble.x, p.pos.y + offset[1] - drawH / 2 + tremble.y, drawW, drawH);
    }
  });
  ctx.globalAlpha = 1.0;
}

self.onerror = (err) => {
  console.error('WordCurtain Worker Error:', err);
};

self.onmessage = (e: MessageEvent) => {
  const { type, payload } = e.data;
  switch (type) {
    case 'init': 
      init(payload.canvas, payload); 
      break;
    case 'resize': 
      resize(payload.dims); 
      break;
    case 'updateColor': 
      color = payload.color; 
      rebuildTextCache(); 
      break;
    case 'updateText': 
      text = payload.text; 
      rebuildTextCache();
      updateTextParticles(); 
      break;
    case 'updateAudio': 
      freqBands = payload.frequencyBands; 
      break;
    case 'updateRepulsion': 
      repCenter = payload.center; 
      repEnergy = payload.energy; 
      repShape = payload.shape; 
      repRot = payload.rotate; 
      break;
    case 'updateFloor': 
      floorHeight = payload.floorHeight; 
      break;
    case 'pointerEvent': 
      handlePointer(payload.type, payload.x, payload.y); 
      break;
  }
};
