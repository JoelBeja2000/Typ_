/**
 * ----------------------------------------------------
 * CENTRAL PHYSICS & AUDIO REACTIVITY SCALES
 * ----------------------------------------------------
 * This file governs the physical behavior, sizing, and 
 * audio-reactivity of both the 3D geometries and the 
 * 2D word repulsion engine.
 * 
 * Future tuning or adjustments should be made here.
 */

export const PHYSICS = {
    // ------------------------------------
    // GEOMETRIC SHAPE CONSTANTS
    // ------------------------------------
    sphere: {
        /** The base physical radius of the geometric shapes */
        baseSize: 0.45,

        /** The speed of the internal gravitational pull loop */
        bounceSpeed: 0.0025,

        /** Amplitude of the drop (increase this to fall further down) */
        bounceAmplitude: 3.1,

        /** When (in amplitude units) the sphere starts squashing against the floor */
        squashThreshold: 2.7,

        /** How flat the sphere gets when it hits the floor */
        squashIntensity: 1.5,
        
        /** How wide the sphere gets when squashed (elastic retention) */
        stretchIntensity: 0.8,
    },

    // ------------------------------------
    // AUDIO REACTIVITY MULTIPLIERS
    // ------------------------------------
    audio: {
        /** Weight of bass frequencies on global deformation */
        bassWeight: 0.5,

        /** Weight of mid frequencies on global deformation */
        midWeight: 0.3,
        
        /** Weight of high frequencies on global deformation */
        highWeight: 0.15,
        
        /** Determines how much the audio inflates/deflates the SIZE of the geometry */
        sizeMultiplier: 1.0,          // 1.0 = highly reactive, 0.0 = static size
        
        /** Factor for structural mesh deformation relative to audio */
        innerMeshScale: 0.55
    },

    // ------------------------------------
    // WORD CURTAIN REPULSION FIELD
    // ------------------------------------
    curtain: {
        /** Added padding to the repulsion barrier so text doesn't clip the render */
        repulsionPadding: 1.1,
        
        /** Reference vertical aspect calculation unit */
        frustumHeightReference: 8.39,
    }
};
