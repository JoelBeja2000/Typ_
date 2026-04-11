> [!NOTE]
> Este es un proyecto **pequeño y rápido** construido con **GitHub Copilot CLI**. No pretende ser un producto profesional, sino una exploración de capacidades de desarrollo asistido por IA.

# Typ_ (Type Master)

**Typ_** es un entrenador de mecanografía de nivel profesional diseñado para la eficiencia, velocidad y precisión. Construido con un enfoque en la biomecánica y la retroalimentación auditiva, proporciona una experiencia de entrenamiento cinematográfica para desarrolladores y entusiastas de la mecanografía.

![Typ_ Landing](docs/media/landing.png)

## Características Principales

- **Arquitectura Hexagonal**: Separación estricta de preocupaciones (Dominio, Puertos, Infraestructura).
- **Latencia Ultra-Baja**: Motor de escritura síncrono con tiempos de respuesta sub-16ms.
- **Niveles por Estrellas**: Dificultad progresiva de Novato (1★) → Experto (2★) → Maestro (3★).
- **Práctica de Dedos**: Entrenamiento dedicado para cada dedo (Índice, Corazón, Anular, Meñique).
- **Estilos de Música**: Retroalimentación dinámica (Berlín Techno, Cyber Ambient, Acid House 303).
- **Guías Biomecánicas**: Representación visual del mapeo dedos-teclas.
- **Retroalimentación Cinematográfica**: WPM, Precisión, sistemas de Combo en tiempo real.
- **Modo Día/Noche**: Cambia entre temas claros y oscuros.
- **Seguimiento de Progreso**: Muestra porcentaje y estadísticas al completar nivel.
- **GHS Integrado**: Git History Standard para contexto de agentes IA.

## Nuevo Sistema de Niveles

### Niveles por Estrellas (Desafíos)
- **Novato** (1★): Pares básicos de dedos
- **Experto** (2★): Combinaciones avanzadas
- **Maestro** (3★): Dominio completo del teclado

### Práctica de Dedos
- **Índice**: F, G, V, B, R, T, J, H, N, M...
- **Corazón**: D, E, C, K, I
- **Anular**: S, W, X, L, O
- **Meñique**: A, Q, Z, Ñ, P

## Primeros Pasos

### Prerrequisitos

- **Node.js**: Requerido para ejecutar el servidor de desarrollo Vite.
- **Git**: Para control de versiones.

### Instalación

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/JoelBeja2000/OveTyp_.git
   cd OveTyp_
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Ejecutar la aplicación**:
   ```bash
   npm run dev
   ```

### Configuración GHS (Opcional)

Para contexto de agentes IA, configura Git History Standard:

```bash
source .venv/bin/activate
python3 tools/search.py "tu consulta"   # Buscar en código
python3 tools/indexer.py            # Re-indexar cambios
```

## Desarrollo

Construido con:
- **Tauri**: Integración de escritorio multiplataforma.
- **React**: Interfaz de usuario.
- **Web Audio API**: Retroalimentación auditiva de baja latencia.
- **GitHub Copilot CLI**: Desarrollo asistido por IA.

---

*ALPINE_ECODECOR_PRO // 2026*