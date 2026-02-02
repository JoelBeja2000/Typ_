export interface SphereConfig {
    size: number;
    segments: number;
    opacity: number;
    deformationFactor: number;
    spikeFactor: number;
    isWireframe: boolean;
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
    type: 'bird',
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
        deformationFactor: 1.0,
        spikeFactor: 1.0,
        isWireframe: true
    },
    innerSphere: {
        size: 3.5,
        segments: 2,
        opacity: 0.3,
        deformationFactor: 1.0,
        spikeFactor: 0.5,
        isWireframe: true
    },
    globalRotationSpeed: 1.0
};
