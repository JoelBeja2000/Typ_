import { IAudioSystem } from '../../domain/ports/IAudioSystem';

export class WebAudioSystem implements IAudioSystem {
    private ctx: AudioContext;
    private masterGain: GainNode;
    private masterAnalyser: AnalyserNode;

    private kickGain: GainNode;
    private kickAnalyser: AnalyserNode;

    private bassGain: GainNode;
    private bassAnalyser: AnalyserNode;

    private hihatGain: GainNode;
    private hihatAnalyser: AnalyserNode;

    private snareGain: GainNode;
    private snareAnalyser: AnalyserNode;

    private leadGain: GainNode;
    private leadAnalyser: AnalyserNode;

    private ghostGain: GainNode;
    private ghostAnalyser: AnalyserNode;

    constructor() {
        this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();

        // Master Chain
        this.masterGain = this.ctx.createGain();
        this.masterAnalyser = this.ctx.createAnalyser();
        this.masterAnalyser.fftSize = 512;
        this.masterAnalyser.smoothingTimeConstant = 0.5;
        this.masterGain.connect(this.masterAnalyser);
        this.masterAnalyser.connect(this.ctx.destination);

        // Kick Channel
        this.kickGain = this.ctx.createGain();
        this.kickAnalyser = this.ctx.createAnalyser();
        this.kickAnalyser.fftSize = 256;
        this.kickGain.connect(this.kickAnalyser);
        this.kickAnalyser.connect(this.masterGain);

        // Bass Channel
        this.bassGain = this.ctx.createGain();
        this.bassAnalyser = this.ctx.createAnalyser();
        this.bassAnalyser.fftSize = 512;
        this.bassGain.connect(this.bassAnalyser);
        this.bassAnalyser.connect(this.masterGain);

        // HiHat Channel
        this.hihatGain = this.ctx.createGain();
        this.hihatAnalyser = this.ctx.createAnalyser();
        this.hihatAnalyser.fftSize = 256;
        this.hihatGain.connect(this.hihatAnalyser);
        this.hihatAnalyser.connect(this.masterGain);

        // Snare Channel
        this.snareGain = this.ctx.createGain();
        this.snareAnalyser = this.ctx.createAnalyser();
        this.snareAnalyser.fftSize = 256;
        this.snareGain.connect(this.snareAnalyser);
        this.snareAnalyser.connect(this.masterGain);

        // Lead Channel
        this.leadGain = this.ctx.createGain();
        this.leadAnalyser = this.ctx.createAnalyser();
        this.leadAnalyser.fftSize = 256;
        this.leadGain.connect(this.leadAnalyser);
        this.leadAnalyser.connect(this.masterGain);

        // Ghost Channel
        this.ghostGain = this.ctx.createGain();
        this.ghostAnalyser = this.ctx.createAnalyser();
        this.ghostAnalyser.fftSize = 256;
        this.ghostGain.connect(this.ghostAnalyser);
        this.ghostAnalyser.connect(this.masterGain);
    }

    resume() {
        if (this.ctx.state === 'suspended') this.ctx.resume();
    }

    playKick() {
        this.resume();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(120, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.3);
        gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.3);
        osc.connect(gain);
        gain.connect(this.kickGain); // Connect to Kick Channel
        osc.start();
        osc.stop(this.ctx.currentTime + 0.3);
    }

    playHiHat() {
        this.resume();
        const noise = this.ctx.createBufferSource();
        const bufferSize = this.ctx.sampleRate * 0.05;
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const output = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) output[i] = Math.random() * 2 - 1;
        noise.buffer = buffer;

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'highpass';
        filter.frequency.value = 8000;

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(this.hihatGain); // Connect to HiHat Channel
        noise.start();
    }

    playSnare() {
        this.resume();
        const noise = this.ctx.createBufferSource();
        const bufferSize = this.ctx.sampleRate * 0.1;
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const output = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) output[i] = Math.random() * 2 - 1;
        noise.buffer = buffer;

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.value = 1500;
        filter.Q.value = 1;

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.1);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(this.snareGain);
        noise.start();
    }

    playGhostHiHat() {
        this.resume();
        const noise = this.ctx.createBufferSource();
        const bufferSize = this.ctx.sampleRate * 0.05;
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const output = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) output[i] = Math.random() * 2 - 1;
        noise.buffer = buffer;

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'highpass';
        filter.frequency.value = 12000;

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.02, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(this.ghostGain);
        noise.start();
    }

    playLead(freq: number, combo: number) {
        this.resume();
        const osc = this.ctx.createOscillator();
        const mod = this.ctx.createOscillator();
        const modGain = this.ctx.createGain();
        const gain = this.ctx.createGain();

        osc.type = 'sawtooth';
        mod.type = 'sine';

        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        mod.frequency.setValueAtTime(freq * 0.5, this.ctx.currentTime);
        modGain.gain.setValueAtTime(freq * 0.2, this.ctx.currentTime);

        mod.connect(modGain);
        modGain.connect(osc.frequency);

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(freq * 2 + (combo * 10), this.ctx.currentTime);
        filter.Q.value = 10;

        gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.4);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.leadGain);

        osc.start();
        mod.start();
        osc.stop(this.ctx.currentTime + 0.4);
        mod.stop(this.ctx.currentTime + 0.4);
    }

    playBass(noteFreq: number, comboVal: number) {
        this.resume();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(noteFreq, this.ctx.currentTime);

        filter.type = 'lowpass';
        const baseCutoff = 400 + (Math.min(comboVal, 20) * 100);
        filter.frequency.setValueAtTime(baseCutoff, this.ctx.currentTime);
        filter.Q.value = 15;

        gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.15);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.bassGain); // Connect to Bass Channel
        osc.start();
        osc.stop(this.ctx.currentTime + 0.2);
    }

    playSuccess(combo: number, isZen: boolean) {
        this.resume();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        const baseFreq = isZen ? 150 : 200;
        const mod = isZen ? (combo % 16) * 10 : combo * 15;

        osc.type = 'square';
        osc.frequency.setValueAtTime(baseFreq + mod, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(baseFreq * 2 + mod, this.ctx.currentTime + 0.05);

        gain.gain.setValueAtTime(isZen ? 0.04 : 0.08, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);

        osc.connect(gain);
        gain.connect(this.masterGain); // Success sounds go to Master (or could have their own FX channel, but User logic didn't specify)
        osc.start();
        osc.stop(this.ctx.currentTime + 0.08);
    }

    playError() {
        this.resume();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(100, this.ctx.currentTime);
        osc.frequency.linearRampToValueAtTime(30, this.ctx.currentTime + 0.2);
        gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 0.2);
        osc.connect(gain);
        gain.connect(this.masterGain); // Error sounds go to Master
        osc.start();
        osc.stop(this.ctx.currentTime + 0.2);
    }

    getAnalysers() {
        return {
            master: this.masterAnalyser,
            kick: this.kickAnalyser,
            bass: this.bassAnalyser,
            hihat: this.hihatAnalyser,
            snare: this.snareAnalyser,
            lead: this.leadAnalyser,
            ghost: this.ghostAnalyser
        };
    }

    getEnergy(): number {
        if (!this.masterAnalyser) return 0;
        const dataArray = new Uint8Array(this.masterAnalyser.frequencyBinCount);
        this.masterAnalyser.getByteFrequencyData(dataArray);
        let sum = 0;
        for (let i = 0; i < dataArray.length; i++) {
            sum += dataArray[i];
        }
        return sum / dataArray.length / 255;
    }

    getFrequencyBands(): { bass: number; mid: number; high: number } {
        if (!this.masterAnalyser) return { bass: 0, mid: 0, high: 0 };
        const dataArray = new Uint8Array(this.masterAnalyser.frequencyBinCount);
        this.masterAnalyser.getByteFrequencyData(dataArray);

        const binCount = dataArray.length;
        const bassEnd = Math.floor(binCount * 0.1);
        const midEnd = Math.floor(binCount * 0.5);

        let bass = 0, mid = 0, high = 0;
        for (let i = 0; i < bassEnd; i++) bass += dataArray[i];
        for (let i = bassEnd; i < midEnd; i++) mid += dataArray[i];
        for (let i = midEnd; i < binCount; i++) high += dataArray[i];

        return {
            bass: bass / (bassEnd || 1) / 255,
            mid: mid / (midEnd - bassEnd || 1) / 255,
            high: high / (binCount - midEnd || 1) / 255
        };
    }
}
