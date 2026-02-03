/// <reference lib="webworker" />

const worker: DedicatedWorkerGlobalScope = self as any;

worker.onmessage = (e: MessageEvent) => {
    const {
        positions,
        originalPositions,
        time,
        bands,
        config,
        combo
    } = e.data;

    const bass = (bands?.bass || 0) / 255;
    const mid = (bands?.mid || 0) / 255;
    const high = (bands?.high || 0) / 255;
    const energy = (bass + mid + high) / 3;

    // Progression logic (copied from modeling.ts for self-containment)
    // Progression logic (copied from modeling.ts for self-containment)
    // TUNED FOR IMMEDIATE REACTIVITY: Gates now open much earlier or have baselines
    const breathingGate = 0.8 + (Math.min(1.0, combo / 25) * 0.2); // Always breathing nicely

    // Bass: Starts immediately (20% baseline), full by combo 15
    const bassGate = 0.2 + (Math.min(1.0, Math.max(0, combo / 15)) * 0.8);

    // Mids: Starts at combo 5 (was 25), full by 30
    const midGate = Math.min(1.0, Math.max(0, (combo - 5) / 25));

    // Highs: Starts at combo 15 (was 60), full by 50
    const highGate = Math.min(1.0, Math.max(0, (combo - 15) / 35));

    const audioActivity = (energy > 0.01) ? 1.0 : energy * 100;

    for (let i = 0; i < positions.length / 3; i++) {
        const ox = originalPositions[i * 3];
        const oy = originalPositions[i * 3 + 1];
        const oz = originalPositions[i * 3 + 2];

        const len = Math.sqrt(ox * ox + oy * oy + oz * oz) || 1;
        const nx = ox / len;
        const ny = oy / len;
        const nz = oz / len;

        const bassAtt = Math.max(0, bass - 0.02) * 1.02;
        const midAtt = Math.max(0, mid - 0.02) * 1.02;
        const highAtt = Math.max(0, high - 0.02) * 1.02;

        const breath = Math.sin(nx * 1.5 + time * 0.8) * Math.cos(ny * 1.5 + time * 0.6) * 0.25 * breathingGate;
        const pulse = Math.pow(bassAtt, 1.5) * 14.0 * bassGate;
        const swell = Math.sin(nx * 2.0 + time * 2.5 + bassAtt * 10) * Math.cos(ny * 2.0 + time * 2.0) * bassGate;
        const ripple = Math.sin(nz * 15.0 - time * 6.5 + midAtt * 25) * Math.sin(nx * 8.0 + time * 4.5) * midGate;
        const agitationRaw = Math.sin(nx * 45 + ny * 45 + time * 22);
        const agitation = Math.pow(Math.abs(agitationRaw), 1.8) * Math.sign(agitationRaw) * highAtt * 28.0 * config.spikeFactor * highGate;

        const peekVal = (midAtt + bassAtt) / 2;
        const peakBoost = 1.0 + (peekVal * peekVal) * 12.0 * midGate;

        const totalMod = (
            breath + swell * (1.1 + bassAtt * 6.0) + ripple * (0.8 + midAtt * 5.0) + agitation + pulse
        ) * config.deformationFactor * peakBoost * audioActivity;

        const distortion = 1 + totalMod * 0.55;
        positions[i * 3] = ox * distortion;
        positions[i * 3 + 1] = oy * distortion;
        positions[i * 3 + 2] = oz * distortion;
    }

    // Send back the updated positions with the identifier
    worker.postMessage({ positions, name: e.data.name }, [positions.buffer]);
};
