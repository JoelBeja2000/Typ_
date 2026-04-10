> [!NOTE]
> Este es un proyecto **pequeño y rápido** realizado como experimento utilizando **Google Antigravity**. No pretende ser un producto profesional, sino una exploración de capacidades de desarrollo asistido por IA.
>
> [Leer en Español](README.es.md)

# OveTyp_ (Type Master)


**OveTyp_** is a professional-grade typing trainer designed for efficiency, speed, and precision. Built with a focus on biomechanics and auditory feedback, it provides a cinematic training experience for developers and typing enthusiasts.

![OveTyp_ Landing](docs/media/landing.png)

## Core Features

- **Hexagonal Architecture**: Strict separation of concerns (Domain, Ports, Infrastructure) for maximum maintainability.
- **Ultra-Low Latency**: Synchronous typing engine providing sub-16ms response times.
- **Technical Training**: Specialized phases for strict finger coordination and muscle memory.
- **Biomechanical Guides**: Visual representation of finger-to-key mapping.
- **Cinematic Feedback**: Real-time auditory and visual feedback (WPM, Accuracy, Combo systems).
- **Customizable Experience**: Multiple focus modes (Basic, Programming, Accents), UI scaling, and curated color palettes.
- **Multilingual Support**: Training sets in English and Spanish.

## Visual Demo

![Demo Recording](docs/media/demo.webp)

## Project Structure

### Architecture & Performance
![Architecture](docs/media/architecture.png)
The app follows a **Hexagonal Architecture** pattern:
- **Domain**: Pure business logic (Typing, Scoring, Stats).
- **Ports**: Interface definitions for external dependencies.
- **Infrastructure**: Adapters for Browser APIs (Web Audio, LocalStorage).

Optimized for **20ms Priority**: All audio and typing events bypass asynchronous React state cycles for immediate feedback.

### Technical Training
![Training](docs/media/training.png)
Follow structured phases from basic finger pairs to advanced combinations and pangrams.

### Configuration & Customization
![Configuration](docs/media/config.png)
Easily switch between languages, focus modes, and visual styles to suit your training environment.

## Getting Started

### Prerequisites

- **Node.js**: Required to run the Vite development server.
- **Git**: For version control.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/JoelBeja2000/OveTyp_.git
   cd OveTyp_
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the application**:
   ```bash
   npm run dev
   ```


## Development

Built with:
- **Tauri**: For cross-platform desktop integration.
- **React**: For the user interface.
- **Web Audio API**: For low-latency auditory feedback.
- **Gemini AI**: For dynamic practice phrase generation.

---

*ALPINE_ECODECOR_PRO // 2025*
