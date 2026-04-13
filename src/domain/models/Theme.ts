export interface ThemeColor {
    id: string;
    name: string;
    r: number;
    g: number;
    b: number;
    scheme?: 'dark' | 'light';
    bgAlpha?: number;
}

export interface ThemeOverrides {
    isPureBlack?: boolean;
    forceScheme?: 'dark' | 'light';
}

export const THEMES: ThemeColor[] = [
    { id: 'alpine', name: 'Alpino', r: 162, g: 173, b: 145, scheme: 'dark' },
    { id: 'ocean', name: 'Océano', r: 90, g: 150, b: 220, scheme: 'dark' },
    { id: 'crimson', name: 'Carmesí', r: 220, g: 80, b: 80, scheme: 'dark' },
    { id: 'amethyst', name: 'Amatista', r: 160, g: 100, b: 200, scheme: 'dark' },
    { id: 'amber', name: 'Ámbar', r: 240, g: 180, b: 60, scheme: 'dark' },
    { id: 'emerald', name: 'Esmeralda', r: 16, g: 185, b: 129, scheme: 'dark' }
];
