export interface ThemeColor {
    id: string;
    name: string;
    r: number;
    g: number;
    b: number;
}

export const THEMES: ThemeColor[] = [
    { id: 'alpine', name: 'Alpino', r: 162, g: 173, b: 145 },
    { id: 'ocean', name: 'Océano', r: 90, g: 150, b: 220 },
    { id: 'crimson', name: 'Carmesí', r: 220, g: 80, b: 80 },
    { id: 'amethyst', name: 'Amatista', r: 160, g: 100, b: 200 },
    { id: 'amber', name: 'Ámbar', r: 240, g: 180, b: 60 }
];
