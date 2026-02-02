---
description: Empaquetado de Python Sidecar con Tauri
---

# Workflow: Empaquetado de Sidecar Python

Este workflow describe los pasos para empaquetar el motor de audio Python como un binario standalone e incluirlo en el bundle de Tauri.

## 1. Preparación del Entorno Python
Asegúrate de tener un entorno virtual limpio y `pyinstaller` instalado.

```bash
cd python-engine
pip install -r requirements.txt
pip install pyinstaller
```

## 2. Compilación del Binario (Frozen Binary)
Compila el script principal (`engine.py`) en un ejecutable único.

```bash
# Para Mac
pyinstaller --onefile --name audio-engine --windowed engine.py
```
Esto generará `dist/audio-engine`.

## 3. Configuración de Tauri (`tauri.conf.json`)
Registra el binario como un recurso externo (sidecar).

```json
"tauri": {
  "bundle": {
    "externalBin": [
      "bin/audio-engine"
    ]
  },
  "allowlist": {
    "shell": {
      "sidecar": true,
      "scope": [
        { "name": "bin/audio-engine", "sidecar": true }
      ]
    }
  }
}
```

## 4. Estructura de Directorios
Mueve el binario compilado a la ubicación esperada por Tauri (donde se añaden sufijos de arquitectura).

```bash
mkdir -p src-tauri/bin
# Renombra incluyendo el target triple (ejemplo para mac ARM)
cp python-engine/dist/audio-engine src-tauri/bin/audio-engine-aarch64-apple-darwin
```

## 5. Invocación desde Rust/JS
Usa la API de shell de Tauri para invocar el sidecar al inicio.

```typescript
import { Command } from '@tauri-apps/api/shell';

const command = Command.sidecar('bin/audio-engine');
const child = await command.spawn();
```
