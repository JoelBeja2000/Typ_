export interface IAudioSystem {
    playKick(): void;
    playHiHat(): void;
    playSnare(): void;
    playGhostHiHat(): void;
    playLead(freq: number, combo: number): void;
    playBass(freq: number, combo: number): void;
    playSuccess(combo: number, isZen: boolean): void;
    playError(): void;
    resume(): void;
    getAnalysers(): {
        master: AnalyserNode;
        kick: AnalyserNode;
        bass: AnalyserNode;
        hihat: AnalyserNode;
        snare: AnalyserNode;
        lead: AnalyserNode;
        ghost: AnalyserNode;
    };
    getEnergy(): number;
    getFrequencyBands(): { bass: number; mid: number; high: number };
}
