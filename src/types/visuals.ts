export type GeometryType = 'icosahedron' | 'box' | 'octahedron' | 'tetrahedron' | 'dodecahedron' | 'knot' | 'torus' | 'sphere' | 'cone' | 'cylinder';

export interface SphereConfig {
    size: number;
    segments: number;
    opacity: number;
    deformationFactor: number;
    spikeFactor: number;
    isWireframe: boolean;
    shape: GeometryType;
    morphSpeed: number;
    noiseScale: number;
}

export interface BirdConfig {
    tubeRadius: number;
    segments: number;
    radialSegments: number;
    flapIntensity: number;
    deformIntensity: number;
}

export interface VisualsConfig {
    type: 'bird' | 'circle';
    bird: BirdConfig;
    outerSphere: SphereConfig;
    innerSphere: SphereConfig;
    globalRotationSpeed: number;
}

export const DEFAULT_VISUALS_CONFIG: VisualsConfig = {
    type: 'circle',
    bird: {
        tubeRadius: 0.08,
        segments: 120,
        radialSegments: 8,
        flapIntensity: 1.0,
        deformIntensity: 1.0
    },
    outerSphere: {
        size: 7,
        segments: 4,
        opacity: 0.6,
        deformationFactor: 1.2,
        spikeFactor: 1.0,
        isWireframe: true,
        shape: 'icosahedron',
        morphSpeed: 1.5,
        noiseScale: 1.0
    },
    innerSphere: {
        size: 3.5,
        segments: 2,
        opacity: 0.3,
        deformationFactor: 1.2,
        spikeFactor: 0.8,
        isWireframe: true,
        shape: 'icosahedron',
        morphSpeed: 1.5,
        noiseScale: 1.0
    },
    globalRotationSpeed: 1.0
};
