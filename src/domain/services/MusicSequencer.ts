import { IAudioSystem } from '../ports/IAudioSystem';
import { MusicStyle } from '../models/MusicStyles';

export class MusicSequencer {
    private audioSystem: IAudioSystem;
    private intervalId: number | null = null;
    private step = 0;
    private currentStyle: MusicStyle;
    private comboMultiplier: number = 1.0;

    constructor(audioSystem: IAudioSystem, initialStyle: MusicStyle) {
        this.audioSystem = audioSystem;
        this.currentStyle = initialStyle;
    }

    setStyle(style: MusicStyle) {
        const wasRunning = !!this.intervalId;
        if (wasRunning) this.stop();
        this.currentStyle = style;
        this.step = 0;
        // Don't auto-start, wait for App cycle to trigger if needed
    }

    setMultiplier(multiplier: number) {
        this.comboMultiplier = multiplier;
    }

    start(getCombo: () => number) {
        if (this.intervalId) return;

        const bpm = this.currentStyle.bpm;
        const stepTime = (60 / bpm) / 4;

        this.intervalId = window.setInterval(() => {
            const combo = getCombo();
            const currentStep = this.step % 16;

            // Execute all layers whose requirements are met
            // If combo is 0, nothing plays, but the clock (step) keeps ticking for a smooth re-entry
            if (combo > 0) {
                const scaledCombo = combo * this.comboMultiplier;
                this.currentStyle.layers.forEach(layer => {
                    const comboMatches = scaledCombo >= layer.minCombo && (layer.maxCombo === undefined || scaledCombo <= layer.maxCombo);
                    if (comboMatches && layer.pattern(currentStep)) {
                        layer.play(this.audioSystem, currentStep, combo);
                    }
                });
            }

            this.step++;
        }, stepTime * 1000);
    }

    stop() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }
}
