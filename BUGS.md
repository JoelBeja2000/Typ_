# Bug Registry

## Resolved Bugs

| Bug ID | Author | Description | Fix Details |
| :--- | :--- | :--- | :--- |
| `BUG-001` | @user | Keyboard clipping at 100% zoom | Implemented top-center ScaleWrapper and auto-fit resize logic. |
| `BUG-002` | @antigravity | Physics shield disproportionate to meshes | Synchronized multipliers and unified geometric scaling across all primitives. |
| `BUG-003` | @antigravity | 3D vs 2D Synchronization Delay | Implemented Shared Master Clock (`masterStartTime`) across all Web Workers. |
| `BUG-004` | @antigravity | Component ReferenceErrors | Corrected destructuring and variable names in App.tsx, WordCurtain and MorphSphere. |
| `BUG-005` | @antigravity | JSX Syntax Error in App.tsx | Removed stray tags and fixed corrupted container structure in the right sidebar. |
| `BUG-006` | @antigravity | 404 & MIME Error on GH Pages | Identified root cause: Deployment from 'main' instead of 'gh-pages'. Restored standard Vite config and provided setup instructions. |
| `BUG-007` | @antigravity | [AI-BUG] Invisible UI in "Mood Día" (Light Mode) | Replaced hardcoded white colors with `var(--text-primary)` across Keyboard and WordPanel. Added contrast tokens to `BrowserThemeManager`. |

## Active Bugs

| Bug ID | Author | Description | Fix Details |
| :--- | :--- | :--- | :--- |
