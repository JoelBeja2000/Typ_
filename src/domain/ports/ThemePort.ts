import { ThemeColor } from '../models/Theme';

export interface ThemePort {
    getCurrentTheme(): ThemeColor;
    setTheme(id: string): void;
    applyThemeToDocument(theme: ThemeColor): void;
    getAllThemes(): ThemeColor[];
}
