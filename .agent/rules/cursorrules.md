---
trigger: always_on
---

# Project Typ_ Rules

## 1. Latency & Performance (The 20ms Rule)
*   **Audio Priority**: Cualquier operación relacionada con la generación de sonido tiene prioridad 0.
*   **Async IPC**: La comunicación entre Tauri y el Sidecar (Python) debe ser **siempre asíncrona** y no bloqueante.
*   **Direct Path**: Si es posible, los eventos de teclado críticos deben ser enrutados desde Rust directamente al Sidecar, evitando el Event Loop de JS si la latencia supera los 15ms.

## 2. Hexagonal Architecture Strictness
*   **Domain purity**: El código en `src/domain` **NUNCA** debe importar de `react`, `tauri-apps`, o `web-audio-api`.
*   **Dependency Rule**: `infrastructure` depende de `domain`. `domain` no depende de nada.
*   **Ports**: Todas las interacciones externas deben definirse como interfaces en `src/domain/ports` antes de implementarse.

## 3. Python Sidecar Integration
*   **Keep-Alive**: El proceso de Python debe ser persistente (spawned on start), no invocado por comando.
*   **Protocol**: Usar un protocolo ligero (ej. OSC sobre UDP localhost o Stdin/Stdout raw bytes) en lugar de JSON pesado para triggers de notas.
*   **Fallback**: Siempre debe haber un fallback a `WebAudioSystem` si el sidecar falla o no está presente (modo Web).

## 4. UI/UX Principles
*   **Visual-Audio Sync**: La onda visual (`AudioWave`) es una *representación* del sonido, no la fuente. Debe reaccionar a los datos de análisis, pero no bloquear la UI.
*   **Aesthetics**: Glassmorphism, Neon, y transiciones fluidas. "Wow effect" obligatorio.
