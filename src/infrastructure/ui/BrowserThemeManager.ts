import { ThemeColor, THEMES, ThemeOverrides } from '../../domain/models/Theme';
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

    applyThemeToDocument(theme: ThemeColor, overrides: ThemeOverrides = {}): void {
        const root = document.documentElement;
        root.style.setProperty('--theme-r', theme.r.toString());
        root.style.setProperty('--theme-g', theme.g.toString());
        root.style.setProperty('--theme-b', theme.b.toString());
        root.style.setProperty('--accent-primary', `rgb(${theme.r}, ${theme.g}, ${theme.b})`);
        root.style.setProperty('--accent-glow', `rgba(${theme.r}, ${theme.g}, ${theme.b}, 0.4)`);
        
        // App-wide background and scheme
        const scheme = overrides.forceScheme || theme.scheme || 'dark';
        root.setAttribute('data-color-scheme', scheme);
        
        if (scheme === 'light') {
            root.style.setProperty('--bg-app', '#fdfdfd');
            root.style.setProperty('--text-primary', '#0f172a'); // Slate 900
            root.style.setProperty('--text-secondary', '#475569'); // Slate 600
            root.style.setProperty('--bg-glass', 'rgba(255, 255, 255, 0.4)');
            root.style.setProperty('--bg-glass-strong', 'rgba(255, 255, 255, 0.9)');
            root.style.setProperty('--bg-floating', 'rgba(255, 255, 255, 0.95)');
            root.style.setProperty('--border-glass', 'rgba(0, 0, 0, 0.08)');
            root.style.setProperty('--border-strong', 'rgba(0, 0, 0, 0.15)');
            root.style.setProperty('--bg-tint', 'rgba(0, 0, 0, 0.02)');
        } else {
            // Dark mode with theme tint
            if (overrides.isPureBlack) {
                root.style.setProperty('--bg-app', '#020202');
                root.style.setProperty('--bg-tint', 'transparent');
            } else {
                // More pronounced dark base (12% instead of 5%)
                const darkR = Math.floor(theme.r * 0.12);
                const darkG = Math.floor(theme.g * 0.12);
                const darkB = Math.floor(theme.b * 0.12);
                root.style.setProperty('--bg-app', `rgb(${darkR}, ${darkG}, ${darkB})`);
                
                // Apply stronger theme tint to background gradient (35% alpha default)
                const alpha = overrides.forceScheme ? 0.15 : (theme.bgAlpha ?? 0.35);
                root.style.setProperty('--bg-tint', `rgba(${theme.r}, ${theme.g}, ${theme.b}, ${alpha})`);
            }
            
            root.style.setProperty('--text-primary', '#ffffff');
            root.style.setProperty('--text-secondary', '#9ca3af');
            root.style.setProperty('--bg-glass', 'rgba(0, 0, 0, 0.4)');
            root.style.setProperty('--bg-glass-strong', 'rgba(0, 0, 0, 0.7)');
            root.style.setProperty('--border-glass', 'rgba(255, 255, 255, 0.1)');
        }
    }

    getAllThemes(): ThemeColor[] {
        return THEMES;
    }
}
