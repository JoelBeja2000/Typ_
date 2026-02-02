import * as THREE from 'three';
import { BirdConfig, SphereConfig, VisualsConfig } from '../../types/visuals';

export function getBirdPoints(
    time: number,
    bands: { bass: number, mid: number, high: number } | undefined,
    config: BirdConfig,
    speed: number = 1.0
) {
    const bass = (bands?.bass || 0) / 255;
    const mid = (bands?.mid || 0) / 255;
    const high = (bands?.high || 0) / 255;
    const energy = (bass + mid + high) / 3;

    const intensity = config.flapIntensity;
    const t = time * (5.5 + energy * 4) * speed;

    const bodyY = Math.sin(t * 0.5) * (0.2 + bass * 0.4);
    const wingY = Math.sin(t) * (1.1 + mid * 0.8) * intensity;
    const tipY = Math.sin(t - 0.5) * (2.8 * (1.0 + mid) + high * 1.5) * intensity;

    // Deformation factor
    const d = config.deformIntensity;

    return [
        new THREE.Vector3(0, 0.5 + bodyY + high * 0.5 * d, 2.5 + high * 2 * d), // Head
        new THREE.Vector3(0.5, 0.2 + bodyY, 1.5),
        new THREE.Vector3(2.5 + mid * 2 * d, wingY + bodyY, 0.5), // Right Wing
        new THREE.Vector3(5.0 + high * 4 * d, tipY + bodyY, -1.0 - bass * 2 * d), // Right Tip
        new THREE.Vector3(2.0, wingY * 0.5 + bodyY, -1.5),
        new THREE.Vector3(0, -0.2 + bodyY + Math.sin(t - 1) * (0.5 + bass), -3.5 - bass * 4 * d), // Tail
        new THREE.Vector3(-2.0, wingY * 0.5 + bodyY, -1.5),
        new THREE.Vector3(-5.0 - high * 4 * d, tipY + bodyY, -1.0 - bass * 2 * d), // Left Tip
        new THREE.Vector3(-2.5 - mid * 2 * d, wingY + bodyY, 0.5), // Left Wing
        new THREE.Vector3(-0.5, 0.2 + bodyY, 1.5)
    ];
}

export function deformSphere(
    geometry: THREE.BufferGeometry,
    originalPositions: Float32Array,
    time: number,
    bands: { bass: number, mid: number, high: number } | undefined,
    config: SphereConfig,
    combo: number = 0
) {
    const pos = geometry.attributes.position;
    const bass = (bands?.bass || 0) / 255;
    const mid = (bands?.mid || 0) / 255;
    const high = (bands?.high || 0) / 255;
    const energy = (bass + mid + high) / 3;

    // 1. Baseline Breathing (Combo 0+) - THE SPHERE IS ALIVE FROM START
    const breathingGate = 0.5 + (Math.min(1.0, combo / 25) * 0.5);

    // 2. Bass Pulse & Swells (Combo 5+)
    const bassGate = Math.min(1.0, Math.max(0, (combo - 5) / 25));
    // 3. Mid Ripples (Combo 25+)
    const midGate = Math.min(1.0, Math.max(0, (combo - 25) / 35));
    // 4. High Spikes (Combo 60+)
    const highGate = Math.min(1.0, Math.max(0, (combo - 60) / 50));

    const audioActivity = (energy > 0.01) ? 1.0 : energy * 100;

    for (let i = 0; i < pos.count; i++) {
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
        const swell = Math.sin(nx * 2.0 + time * 2.5 + bassAtt * 12) * Math.cos(ny * 2.0 + time * 2.0) * bassGate;
        const ripple = Math.sin(nz * 15.0 - time * 6.5 + midAtt * 25) * Math.sin(nx * 8.0 + time * 4.5) * midGate;
        const agitationRaw = Math.sin(nx * 45 + ny * 45 + time * 22);
        const agitation = Math.pow(Math.abs(agitationRaw), 1.8) * Math.sign(agitationRaw) * highAtt * 28.0 * config.spikeFactor * highGate;

        const peekVal = (midAtt + bassAtt) / 2;
        const peakBoost = 1.0 + (peekVal * peekVal) * 12.0 * midGate;

        const totalMod = (
            breath +
            swell * (1.1 + bassAtt * 6.0) +
            ripple * (0.9 + midAtt * 5.0) +
            agitation +
            pulse
        ) * config.deformationFactor * peakBoost * audioActivity;

        const distortion = 1 + totalMod * 0.55;
        pos.setXYZ(i, ox * distortion, oy * distortion, oz * distortion);
    }
    pos.needsUpdate = true;
}

export function getMusicTransform(
    bands: { bass: number, mid: number, high: number } | undefined,
    config: VisualsConfig
) {
    const bass = (bands?.bass || 0) / 255;
    const mid = (bands?.mid || 0) / 255;
    const high = (bands?.high || 0) / 255;
    const energy = (bass + mid + high) / 3;

    const t = Date.now() * 0.01;
    const jitter = Math.sin(t * 1.5) * energy * 4;

    return {
        rotation: {
            x: (bass * 40) + jitter,
            y: (mid * 50) + (Math.cos(t) * energy * 12),
            z: (high * 30) + jitter
        },
        offset: {
            x: (Math.sin(t * 0.2) * mid * 6) + (Math.sin(t * 2) * energy * 3),
            y: (bass * 10) + (Math.cos(t * 1.5) * energy * 4),
            z: (-high * 15) + (Math.sin(t * 3) * energy * 5)
        }
    };
}
