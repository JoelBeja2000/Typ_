export interface InstrumentLayer {
    id: string;
    type: 'percussion' | 'bass' | 'lead' | 'fx';
    minCombo: number;
    maxCombo?: number;
    color: string;
    opacity: number;
    yOffset?: number;
    pattern: (step: number) => boolean;
    play: (audioSystem: any, step: number, combo: number) => void;
}

export interface MusicStyle {
    name: string;
    bpm: number;
    layers: InstrumentLayer[];
}

export const TECHNO_STYLE: MusicStyle = {
    name: 'Berlín Techno',
    bpm: 128,
    layers: [
        {
            id: 'kick_basic',
            type: 'percussion',
            minCombo: 1,
            maxCombo: 100,
            color: 'var(--text-primary)',
            opacity: 0.6,
            pattern: (s) => s % 4 === 0,
            play: (as) => as.playKick()
        },
        {
            id: 'hihat_basic',
            type: 'percussion',
            minCombo: 5,
            maxCombo: 80,
            color: '#00FFFF',
            opacity: 0.8,
            yOffset: -5,
            pattern: (s) => s % 4 === 2,
            play: (as) => as.playHiHat()
        },
        {
            id: 'bass_acid_low',
            type: 'bass',
            minCombo: 12,
            maxCombo: 120,
            color: 'var(--accent-primary)',
            opacity: 0.4,
            yOffset: 5,
            pattern: (s) => s % 2 === 0,
            play: (as, s, c) => {
                const notes = [55, 65, 73, 82];
                as.playBass(notes[s % notes.length], c);
            }
        },
        {
            id: 'snare_break',
            type: 'percussion',
            minCombo: 25,
            maxCombo: 150,
            color: '#FF00FF',
            opacity: 0.7,
            pattern: (s) => s === 4 || s === 12,
            play: (as) => as.playSnare()
        },
        // --- PHASE 2: EVOLUTION ---
        {
            id: 'ghost_hats',
            type: 'percussion',
            minCombo: 50,
            maxCombo: 180,
            color: '#AAAAAA',
            opacity: 0.4,
            pattern: (s) => s % 2 !== 0,
            play: (as) => as.playGhostHiHat()
        },
        {
            id: 'acid_arp',
            type: 'lead',
            minCombo: 80,
            color: '#CCFF00',
            opacity: 0.5,
            yOffset: -10,
            pattern: (s) => true,
            play: (as, s, c) => {
                const notes = [110, 130, 165, 196];
                as.playLead(notes[s % notes.length], c);
            }
        },
        {
            id: 'fm_pulsar',
            type: 'fx',
            minCombo: 120,
            color: '#FF5500',
            opacity: 0.6,
            yOffset: 0,
            pattern: (s) => s % 16 === 8,
            play: (as, s, c) => as.playLead(440, c * 2)
        },
        {
            id: 'ultra_lead',
            type: 'lead',
            minCombo: 160,
            color: '#FFFFFF',
            opacity: 0.9,
            yOffset: -15,
            pattern: (s) => s % 3 === 0,
            play: (as, s, c) => {
                const notes = [220, 330, 440, 660];
                as.playLead(notes[Math.floor(Math.random() * notes.length)], c * 3);
            }
        },
        {
            id: 'heavenly_lead',
            type: 'lead',
            minCombo: 200,
            color: '#00FFFF',
            opacity: 0.8,
            yOffset: -20,
            pattern: (s) => s % 8 === 4,
            play: (as, s, c) => as.playLead(880, c)
        }
    ]
};

export const AMBIENT_STYLE: MusicStyle = {
    name: 'Cyber Ambient',
    bpm: 90,
    layers: [
        {
            id: 'pad',
            type: 'lead',
            minCombo: 1,
            color: 'var(--accent-primary)',
            opacity: 0.3,
            yOffset: 10,
            pattern: (s) => s % 16 === 0,
            play: (as, s, c) => as.playBass(110, c) // Reusing bass synth as deep pad
        },
        {
            id: 'glitch',
            type: 'fx',
            minCombo: 10,
            color: '#00FFFF',
            opacity: 0.6,
            pattern: (s) => Math.random() > 0.8,
            play: (as) => as.playHiHat()
        },
        {
            id: 'shimmer',
            type: 'lead',
            minCombo: 40,
            color: '#FFFFFF',
            opacity: 0.4,
            yOffset: -15,
            pattern: (s) => s % 16 === 8, // Deterministic
            play: (as, s, c) => as.playLead(880, c)
        },
        {
            id: 'deep_pulse',
            type: 'bass',
            minCombo: 80,
            color: '#5500FF',
            opacity: 0.5,
            yOffset: 15,
            pattern: (s) => s % 32 === 0,
            play: (as, s, c) => as.playBass(40, c * 2)
        },
        {
            id: 'celestial',
            type: 'lead',
            minCombo: 150,
            color: '#00FF88',
            opacity: 0.7,
            pattern: (s) => s % 16 === 12, // Deterministic
            play: (as, s, c) => as.playLead(1320, c)
        }
    ]
};

export const ACID_HOUSE_STYLE: MusicStyle = {
    name: 'Acid House 303',
    bpm: 124,
    layers: [
        {
            id: 'kick',
            type: 'percussion',
            minCombo: 1,
            color: 'var(--text-primary)',
            opacity: 0.5,
            pattern: (s) => s % 4 === 0,
            play: (as) => as.playKick()
        },
        {
            id: 'snare',
            type: 'percussion',
            minCombo: 5,
            color: '#FF00FF',
            opacity: 0.6,
            pattern: (s) => s === 4 || s === 12,
            play: (as) => as.playSnare()
        },
        {
            id: 'acid',
            type: 'bass',
            minCombo: 15,
            maxCombo: 120, // Disappears to let High Acid take over
            color: '#CCFF00',
            opacity: 0.8,
            yOffset: -10,
            pattern: (s) => true, // Constant acid squelch
            play: (as, s, c) => {
                const notes = [33, 44, 55, 66];
                as.playBass(notes[s % notes.length], c * 2);
            }
        },
        {
            id: 'ghost',
            type: 'percussion',
            minCombo: 40,
            color: '#CCFF00',
            opacity: 0.4,
            pattern: (s) => s % 2 !== 0,
            play: (as) => as.playGhostHiHat()
        },
        {
            id: 'high_acid',
            type: 'lead',
            minCombo: 80,
            color: '#00FF00',
            opacity: 0.6,
            yOffset: -20,
            pattern: (s) => s % 8 === 0,
            play: (as, s, c) => as.playLead(440, c)
        },
        {
            id: 'squelch_peak',
            type: 'fx',
            minCombo: 140,
            color: '#FF00FF',
            opacity: 0.8,
            pattern: (s) => s % 4 === 3, // Deterministic syncopation
            play: (as) => as.playSnare()
        },
        {
            id: 'cosmic_resonance',
            type: 'lead',
            minCombo: 200,
            color: '#FFFFFF',
            opacity: 0.9,
            pattern: (s) => s % 16 === 0,
            play: (as, s, c) => as.playLead(1320, c)
        }
    ]
};
