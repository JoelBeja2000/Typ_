# Project History

## Execution Summary
- **Status**: Development / Refining UI
- **Last Milestone**: Physics-Based Word Curtains & Responsive UI
- **Current Version**: 0.2.0

---

## Branch Map
- `main`: Main production-ready branch.
- `feature/new-rhythm-modes`: Work on audio-reactive physics and cinematic UI.

---

## Full Commit Log

| Commit | Author | Description | Screenshots | Technical Details |
| :--- | :--- | :--- | :--- | :--- |
| `g3h4i5j` | @antigravity | [AI] UI Reorg: Implemented Debug Mode Section | - | Moved 'Floor Height' and 'Debug Fill' options into a newly created Debug Mode section within the main configuration menu. |
| `f2e3g4h` | @antigravity | [AI] Remove Year Branding & Deploy | - | Removed the '2025' year indicator from the UI footer and triggered a fresh build for the new GitHub Actions deployment. |
| `d2e3f4g` | @antigravity | [AI] Modernize GH Actions Deployment | - | Transitioned from `gh-pages` branch push to official `actions/deploy-pages` method for direct deployment from `main`. |
| `c6d7e8f` | @antigravity | [AI] Restore Production Config & GHS | - | Restored standard production `base` path and script entry points. Documented deployment misconfiguration in BUGS.md. |
| `f1e2d3c` | @antigravity | [AI] Remove ALPINE Branding & Final Cleanup | - | Removed all references to ALPINE_ECODECOR_PRO branding from the UI footer and documentation files. |
| `b7c8d9e` | @antigravity | [AI] Final Deploy Fix & Entry Point Unified | - | Unified entry point to root `index.tsx` and moved to universal relative base (`./`) to resolve persistent MIME and 404 errors on GitHub Pages. |
| `a6b1c2d` | @antigravity | [AI] Fix GH Pages 404 & GHS Sync | - | Changed absolute asset paths to relative in index.html and verified base path in vite.config.ts for JoelBeja2000.github.io/OveTyp_. |
| `da3e7f1` | @antigravity | [AI] Remove Frost Theme & GHS Compliance | - | Removed the 'frost' (light blue) theme from the personalization menu. Finalized GHS documentation for the synchronization phase. |
| `9cfe057` | @antigravity | [AI] Stabilize 1:1 Physics Sync & Growth | - | Implemented a master shared clock (`masterStartTime`) via Web Workers, Unified text growth logic (`solvedWords` + `typedText`), and synchronized both sidebars for identical physical response. |
| `884db3e` | @antigravity | [AI] Modular Physics & Fixed Apex Math | - | Reverted global stateful physics to a pure mathematical `Math.cos()` algorithm mapped to a fixed ceiling origin at 62%, ensuring rhythmic audio sync while tracking dynamic floor heights. |
| `0b43e08` | @antigravity | [AI] Realistic Ball Bounce & Squash/Stretch | - | Refined bounce formula for gravitational acceleration and added elastic squash-and-stretch deformations. |
| `308c397` | @antigravity | [AI] Bounce Animation & Fix Theme Error | - | Standardized bounce logic across 3D and physics engine. Resolved ReferenceError caused by missing currentTheme state. |
| `a31ab8a` | @antigravity | [AI] Sync Physics & Geometry + Unified Scale | - | Unified multipliers in WordCurtain.tsx, standardized MorphSphere.tsx primitives, and implemented isLevelActive gating. |
| `290d68c` | @antigravity | [AI] Finalize Word Curtains & Auto-Fit | [v1](file:///Users/mac/.gemini/antigravity/brain/1f96877d-30be-42b8-b408-ba32068a00d8/verify_smaller_curtains_1775886072438.webp) | Integrated audio-reactive curtains, cinematic light transitions, and auto-scaling layout. |
| `ea1ff5f` | @author | Initial Setup | - | Basic repository configuration. |
| `0000000` | @author | [AI] Initializing GHS Template | - | Start of the project using Git History Standard. |
