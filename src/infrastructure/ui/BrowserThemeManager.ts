import { ThemeColor, THEMES } from '../../domain/models/Theme';
import { ThemePort } from '../../domain/ports/ThemePort';

export class BrowserThemeManager implements ThemePort {
    private currentTheme: ThemeColor = THEMES[0];

    getCurrentTheme(): ThemeColor {
        return this.currentTheme;
    }

    setTheme(id: string): void {
        const theme = THEMES.find(t => t.id === id);
        if (theme) {
            this.currentTheme = theme;
            this.applyThemeToDocument(theme);
        }
    }

    applyThemeToDocument(theme: ThemeColor): void {
        const root = document.documentElement;
        root.style.setProperty('--theme-r', theme.r.toString());
        root.style.setProperty('--theme-g', theme.g.toString());
        root.style.setProperty('--theme-b', theme.b.toString());
        root.style.setProperty('--accent-primary', `rgb(${theme.r}, ${theme.g}, ${theme.b})`);
        root.style.setProperty('--accent-glow', `rgba(${theme.r}, ${theme.g}, ${theme.b}, 0.4)`);
    }

    getAllThemes(): ThemeColor[] {
        return THEMES;
    }
}
