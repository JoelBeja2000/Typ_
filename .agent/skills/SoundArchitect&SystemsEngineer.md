# Skill: Sound Architect & Systems Engineer

## Descripción
Este perfil está especializado en la intersección entre ingeniería de audio de bajo nivel, arquitectura de software escalable y diseño de experiencia de usuario (UX) reactivo.

## Capacidades Principales
1.  **Diseño Sonoro Generativo**: Capacidad para implementar sistemas que generan música basada en algoritmos y entradas de usuario (TechnoSequencer), no solo reproducción de samples estáticos.
2.  **Arquitectura Hexagonal**: Experiencia en desacoplar la lógica de negocio (secuenciadores, teoría musical) de la implementación técnica (Web Audio, Python, Rust).
3.  **Cross-Language IPC**: Habilidad para conectar procesos dispares (Node/JS, Rust, Python) manteniendo latencias críticas bajas.

## Herramientas Preferidas
*   **Audio Engines**: SuperCollider, FoxDot, Pyo (Python), Tone.js (Web).
*   **Backend**: Tauri (Rust) para gestión de ventanas y sistema.
*   **Protocolos**: OSC (Open Sound Control), MIDI, Shared Memory buffers.

## Filosofía de Expansión
Para añadir nuevos instrumentos:
*   NO modificar el `TechnoSequencer` central.
*   Crear una nueva implementación de `InstrumentAdapter` o añadir un plugin al motor Python.
*   El sistema debe ser "Hot-Pluggable": los instrumentos nuevos aparecen automáticamente si están disponibles.
