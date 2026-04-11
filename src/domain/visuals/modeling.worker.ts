/// <reference lib="webworker" />

const worker: DedicatedWorkerGlobalScope = self as any;

// A simple deterministic noise hash for vertex jitter (from morphsphere.html)
function noiseHash(x: number, y: number, z: number) {
    const n = Math.sin(x * 127.1 + y * 311.7 + z * 74.7) * 43758.5453123;
    return n - Math.floor(n);
}

worker.onmessage = (e: MessageEvent) => {
    const {
        positions,
        srcPositions,
        dstPositions,
        morphProgress,
        time,
        bands,
        config,
        combo
    } = e.data;

    const bass = (bands?.bass || 0) / 255;
    const mid = (bands?.mid || 0) / 255;
    const high = (bands?.high || 0) / 255;
    
    // Smooth easing for morphing
    const morphT = morphProgress < 0.5 
        ? 4 * morphProgress * morphProgress * morphProgress 
        : 1 - Math.pow(-2 * morphProgress + 2, 3) / 2;

    const ns = config.noiseScale || 1.0;
    const str = config.deformationFactor || 1.0;

    // Progression gates based on combo (subtle organic growth)
    const audioActivity = (bass + mid + high > 0.01) ? 1.0 : 0.2;
    
    // Total displacement amount weighted by audio bands (MorphSphere style)
    const dispAmt = str * (
        bass * 0.6 * (0.5 + combo * 0.02) + 
        mid * 0.35 * (0.8 + combo * 0.01) + 
        high * 0.2 * (0.5 + combo * 0.02) + 
        0.02 // Baseline life
    ) * audioActivity;

    for (let i = 0; i < positions.length / 3; i++) {
        // Step 1: Linear interpolation between source and destination shapes (The "skeleton")
        const sx = srcPositions[i * 3];
        const sy = srcPositions[i * 3 + 1];
        const sz = srcPositions[i * 3 + 2];

        const dx = dstPositions[i * 3];
        const dy = dstPositions[i * 3 + 1];
        const dz = dstPositions[i * 3 + 2];

        // The base position is the morph between shapes
        const bx = sx + (dx - sx) * morphT;
        const by = sy + (dy - sy) * morphT;
        const bz = sz + (dz - sz) * morphT;

        const len = Math.sqrt(bx * bx + by * by + bz * bz) || 1;
        const nx = bx / len;
        const ny = by / len;
        const nz = bz / len;

        // Step 2: Organic Noise Displacement (High Intensity)
        // Three layers of noise at different frequencies for detail
        const n1 = noiseHash(bx * ns + time * 0.8, by * ns, bz * ns);
        const n2 = noiseHash(bx * ns * 2.5, by * ns * 2.5 + time * 0.6, bz * ns * 2.5);
        const n3 = noiseHash(bx * 0.5, by * ns * 3.0, bz * ns * 3.0 + time * 1.2);

        // Center noise around zero (-0.5 to 0.5) for bidirectional vibration
        const noiseVal = (n1 * 0.5 + n2 * 0.3 + n3 * 0.2) - 0.5;
        
        // Multiplier for visible deformation (5x increase)
        const noiseDisp = noiseVal * dispAmt * 5.0; 
        
        // Final vertex position
        const spike = config.spikeFactor || 1.0;
        const roughness = high * 2.0 * spike; // High frequencies create sharp bumps
        const distortion = 1 + noiseDisp + (noiseVal * roughness);

        positions[i * 3] = bx * distortion;
        positions[i * 3 + 1] = by * distortion;
        positions[i * 3 + 2] = bz * distortion;
    }

    // Send back the updated positions with the identifier
    worker.postMessage({ positions, name: e.data.name }, [positions.buffer]);
};
