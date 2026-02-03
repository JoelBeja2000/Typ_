# Sistema Modular de Esferas 3D - Guía Completa

## 📋 Índice
1. [Descripción General](#descripción-general)
2. [Arquitectura del Sistema](#arquitectura-del-sistema)
3. [Instalación y Setup](#instalación-y-setup)
4. [Archivos a Crear](#archivos-a-crear)
5. [Cómo Usar](#cómo-usar)
6. [Ejemplos de Uso](#ejemplos-de-uso)
7. [API de Referencia](#api-de-referencia)
8. [Buenas Prácticas](#buenas-prácticas)

---

## 🎯 Descripción General

Este sistema proporciona una forma modular, reutilizable y escalable de crear y gestionar múltiples esferas 3D independientes en tu aplicación React/TypeScript.

**Características principales:**
- ✅ Crear ilimitadas esferas 3D
- ✅ Configuración independiente para cada esfera
- ✅ Duplicar esferas fácilmente
- ✅ Modificar propiedades en tiempo real
- ✅ TypeScript con tipos seguros
- ✅ Hook personalizado para gestión de estado
- ✅ Componentes separados por responsabilidad

---

## 🏗️ Arquitectura del Sistema

```
useSpheresManager (Hook)
        ↓
  SpheresContainer (Componente contenedor)
        ↓
    Sphere3D (Componente individual)
```

### **Componentes:**

1. **Sphere3D.tsx** - Esfera 3D individual
   - Dibuja una esfera en canvas
   - Aplica rotaciones
   - Posicionamiento independiente
   - Colores y opacidad personalizables

2. **SpheresContainer.tsx** - Contenedor de esferas
   - Renderiza múltiples esferas
   - Gestiona el array de esferas
   - Interfaz para comunicación

3. **useSpheresManager.ts** - Hook de lógica
   - Gestiona estado de esferas
   - Operaciones CRUD
   - Métodos de utilidad

---

## 🚀 Instalación y Setup

### Paso 1: Crear la estructura de directorios

```bash
src/
├── components/
│   ├── Sphere3D.tsx
│   └── SpheresContainer.tsx
└── hooks/
    └── useSpheresManager.ts
```

### Paso 2: Crear los archivos

Sigue la sección "Archivos a Crear" más abajo.

---

## 📝 Archivos a Crear

### **1. src/components/Sphere3D.tsx**

```typescript
import React, { useEffect, useRef } from 'react';

interface Sphere3DProps {
  id: string;
  size: number;
  rotation: { x: number; y: number; z: number };
  position: { x: number; y: number; z: number };
  color?: string;
  opacity?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const Sphere3D: React.FC<Sphere3DProps> = ({
  id,
  size,
  rotation,
  position,
  color = '#A2AD91',
  opacity = 1,
  className = '',
  style = {},
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    // Limpiar canvas
    ctx.clearRect(0, 0, size, size);

    // Configurar estilo de línea
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.globalAlpha = opacity;

    // Calcular puntos de la esfera
    const drawSphere = () => {
      const rings = 12;
      const segments = 24;
      const radius = size / 2.5;
      const centerX = size / 2;
      const centerY = size / 2;

      // Convertir rotación de grados a radianes
      const rotX = (rotation.x * Math.PI) / 180;
      const rotY = (rotation.y * Math.PI) / 180;
      const rotZ = (rotation.z * Math.PI) / 180;

      // Matrices de rotación
      const rotateX = (point: { x: number; y: number; z: number }) => {
        const cos = Math.cos(rotX);
        const sin = Math.sin(rotX);
        return {
          x: point.x,
          y: point.y * cos - point.z * sin,
          z: point.y * sin + point.z * cos,
        };
      };

      const rotateY = (point: { x: number; y: number; z: number }) => {
        const cos = Math.cos(rotY);
        const sin = Math.sin(rotY);
        return {
          x: point.x * cos + point.z * sin,
          y: point.y,
          z: -point.x * sin + point.z * cos,
        };
      };

      const rotateZ = (point: { x: number; y: number; z: number }) => {
        const cos = Math.cos(rotZ);
        const sin = Math.sin(rotZ);
        return {
          x: point.x * cos - point.y * sin,
          y: point.x * sin + point.y * cos,
          z: point.z,
        };
      };

      const project = (point: { x: number; y: number; z: number }) => {
        let p = rotateX(point);
        p = rotateY(p);
        p = rotateZ(p);

        const scale = 500 / (500 + p.z);
        return {
          x: centerX + p.x * scale,
          y: centerY + p.y * scale,
          z: p.z,
        };
      };

      // Dibujar líneas de latitud
      for (let i = 0; i <= rings; i++) {
        const lat = (Math.PI * i) / rings - Math.PI / 2;
        const points: Array<{ x: number; y: number; z: number }> = [];

        for (let j = 0; j <= segments; j++) {
          const lon = (2 * Math.PI * j) / segments;
          const x = radius * Math.cos(lat) * Math.cos(lon);
          const y = radius * Math.sin(lat);
          const z = radius * Math.cos(lat) * Math.sin(lon);

          points.push(project({ x, y, z }));
        }

        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (let j = 1; j < points.length; j++) {
          ctx.lineTo(points[j].x, points[j].y);
        }
        ctx.stroke();
      }

      // Dibujar líneas de longitud
      for (let j = 0; j <= segments; j++) {
        const lon = (2 * Math.PI * j) / segments;
        const points: Array<{ x: number; y: number; z: number }> = [];

        for (let i = 0; i <= rings; i++) {
          const lat = (Math.PI * i) / rings - Math.PI / 2;
          const x = radius * Math.cos(lat) * Math.cos(lon);
          const y = radius * Math.sin(lat);
          const z = radius * Math.cos(lat) * Math.sin(lon);

          points.push(project({ x, y, z }));
        }

        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (let k = 1; k < points.length; k++) {
          ctx.lineTo(points[k].x, points[k].y);
        }
        ctx.stroke();
      }
    };

    drawSphere();

    // Limpiar canvas anterior
    containerRef.current.innerHTML = '';
    containerRef.current.appendChild(canvas);
  }, [size, rotation, color, opacity]);

  return (
    <div
      ref={containerRef}
      className={`flex items-center justify-center ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translateZ(${position.z}px)`,
        ...style,
      }}
    />
  );
};

export default Sphere3D;
```

### **2. src/components/SpheresContainer.tsx**

```typescript
import React from 'react';
import Sphere3D from './Sphere3D';

export interface SphereConfig {
  id: string;
  size: number;
  rotation: { x: number; y: number; z: number };
  position: { x: number; y: number; z: number };
  color?: string;
  opacity?: number;
  className?: string;
  style?: React.CSSProperties;
}

interface SpheresContainerProps {
  spheres: SphereConfig[];
  onSphereUpdate?: (id: string, config: Partial<SphereConfig>) => void;
}

export const SpheresContainer: React.FC<SpheresContainerProps> = ({
  spheres,
  onSphereUpdate,
}) => {
  return (
    <>
      {spheres.map((sphere) => (
        <Sphere3D
          key={sphere.id}
          id={sphere.id}
          size={sphere.size}
          rotation={sphere.rotation}
          position={sphere.position}
          color={sphere.color}
          opacity={sphere.opacity}
          className={sphere.className}
          style={sphere.style}
        />
      ))}
    </>
  );
};

export default SpheresContainer;
```

### **3. src/hooks/useSpheresManager.ts**

```typescript
import { useState, useCallback } from 'react';
import { SphereConfig } from '../components/SpheresContainer';

const DEFAULT_SPHERE_CONFIG: SphereConfig = {
  id: 'sphere-1',
  size: 180,
  rotation: { x: 0, y: 0, z: 20 },
  position: { x: 0, y: 0, z: 0 },
  color: '#A2AD91',
  opacity: 1,
};

export const useSpheresManager = (initialSpheres?: SphereConfig[]) => {
  const [spheres, setSpheres] = useState<SphereConfig[]>(
    initialSpheres || [DEFAULT_SPHERE_CONFIG]
  );

  const addSphere = useCallback((config?: Partial<SphereConfig>) => {
    setSpheres((prev) => {
      const newId = `sphere-${prev.length + 1}`;
      const newSphere: SphereConfig = {
        ...DEFAULT_SPHERE_CONFIG,
        ...config,
        id: newId,
      };
      return [...prev, newSphere];
    });
  }, []);

  const removeSphere = useCallback((id: string) => {
    setSpheres((prev) => prev.filter((sphere) => sphere.id !== id));
  }, []);

  const updateSphere = useCallback((id: string, config: Partial<SphereConfig>) => {
    setSpheres((prev) =>
      prev.map((sphere) =>
        sphere.id === id ? { ...sphere, ...config } : sphere
      )
    );
  }, []);

  const duplicateSphere = useCallback((id: string) => {
    setSpheres((prev) => {
      const sphereToDuplicate = prev.find((s) => s.id === id);
      if (!sphereToDuplicate) return prev;

      const newId = `sphere-${prev.length + 1}`;
      const newSphere: SphereConfig = {
        ...sphereToDuplicate,
        id: newId,
        position: {
          x: sphereToDuplicate.position.x + 50,
          y: sphereToDuplicate.position.y + 50,
          z: sphereToDuplicate.position.z,
        },
      };
      return [...prev, newSphere];
    });
  }, []);

  const resetSpheres = useCallback(() => {
    setSpheres([DEFAULT_SPHERE_CONFIG]);
  }, []);

  return {
    spheres,
    addSphere,
    removeSphere,
    updateSphere,
    duplicateSphere,
    resetSpheres,
    setSpheres,
  };
};

export default useSpheresManager;
```

---

## 💡 Cómo Usar

### **En tu componente principal (App.tsx o similar):**

```typescript
import React from 'react';
import SpheresContainer from './src/components/SpheresContainer';
import useSpheresManager from './src/hooks/useSpheresManager';

const App = () => {
  // Inicializar el gestor de esferas
  const {
    spheres,
    addSphere,
    removeSphere,
    updateSphere,
    duplicateSphere,
    resetSpheres,
  } = useSpheresManager();

  return (
    <div>
      {/* Renderizar las esferas */}
      <SpheresContainer spheres={spheres} />

      {/* Controles de ejemplo */}
      <div style={{ position: 'fixed', bottom: 20, right: 20 }}>
        <button onClick={() => addSphere({ color: '#22d3ee' })}>
          Agregar Esfera Azul
        </button>

        <button onClick={() => duplicateSphere('sphere-1')}>
          Duplicar Esfera 1
        </button>

        <button
          onClick={() =>
            updateSphere('sphere-1', { rotation: { x: 45, y: 90, z: 20 } })
          }
        >
          Rotar Esfera 1
        </button>

        <button onClick={resetSpheres}>
          Resetear
        </button>
      </div>
    </div>
  );
};

export default App;
```

---

## 📚 Ejemplos de Uso

### **Ejemplo 1: Crear una esfera simple**

```typescript
const { spheres } = useSpheresManager();

// Resultado: Una esfera por defecto
// Size: 180px
// Color: #A2AD91
// Rotation: { x: 0, y: 0, z: 20 }
```

### **Ejemplo 2: Agregar una esfera con color personalizado**

```typescript
const { addSphere } = useSpheresManager();

addSphere({
  color: '#22d3ee',      // Azul
  size: 150,
  opacity: 0.8,
});
```

### **Ejemplo 3: Duplicar y modificar independientemente**

```typescript
const { duplicateSphere, updateSphere } = useSpheresManager();

// Duplicar la esfera 1
duplicateSphere('sphere-1');

// Modificar la copia (sphere-2) con color diferente
updateSphere('sphere-2', {
  color: '#fb923c',  // Naranja
  size: 200,
});

// Ahora tienes dos esferas idénticas pero con colores y tamaños diferentes
```

### **Ejemplo 4: Actualizar rotación en tiempo real**

```typescript
const { updateSphere } = useSpheresManager();

// Rotar la esfera
updateSphere('sphere-1', {
  rotation: {
    x: 45,
    y: 90,
    z: 20,
  },
});
```

### **Ejemplo 5: Múltiples esferas en diferentes posiciones**

```typescript
const { addSphere } = useSpheresManager();

// Agregar esfera izquierda
addSphere({
  position: { x: -200, y: 0, z: 0 },
  color: '#A2AD91',
  size: 180,
});

// Agregar esfera derecha
addSphere({
  position: { x: 200, y: 0, z: 0 },
  color: '#22d3ee',
  size: 180,
});

// Agregar esfera central
addSphere({
  position: { x: 0, y: 0, z: 0 },
  color: '#fb923c',
  size: 150,
});
```

### **Ejemplo 6: Animación de rotación**

```typescript
const { updateSphere } = useSpheresManager();
const [rotation, setRotation] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setRotation((prev) => (prev + 1) % 360);
    updateSphere('sphere-1', {
      rotation: { x: rotation, y: rotation * 2, z: 20 },
    });
  }, 50);

  return () => clearInterval(interval);
}, [rotation, updateSphere]);
```

---

## 🔧 API de Referencia

### **SphereConfig Interface**

```typescript
interface SphereConfig {
  id: string;                              // ID único de la esfera
  size: number;                            // Tamaño en píxeles
  rotation: { x: number; y: number; z: number };  // Rotación en grados
  position: { x: number; y: number; z: number };  // Posición en píxeles
  color?: string;                          // Color hex (#RRGGBB)
  opacity?: number;                        // Opacidad 0-1
  className?: string;                      // Clases CSS personalizadas
  style?: React.CSSProperties;             // Estilos inline
}
```

### **useSpheresManager Hook**

```typescript
const {
  spheres,              // SphereConfig[] - Array actual de esferas
  addSphere,            // (config?: Partial<SphereConfig>) => void
  removeSphere,         // (id: string) => void
  updateSphere,         // (id: string, config: Partial<SphereConfig>) => void
  duplicateSphere,      // (id: string) => void
  resetSpheres,         // () => void
  setSpheres,           // (spheres: SphereConfig[]) => void
} = useSpheresManager();
```

### **SpheresContainer Props**

```typescript
interface SpheresContainerProps {
  spheres: SphereConfig[];
  onSphereUpdate?: (id: string, config: Partial<SphereConfig>) => void;
}
```

### **Sphere3D Props**

```typescript
interface Sphere3DProps {
  id: string;
  size: number;
  rotation: { x: number; y: number; z: number };
  position: { x: number; y: number; z: number };
  color?: string;
  opacity?: number;
  className?: string;
  style?: React.CSSProperties;
}
```

---

## ✅ Buenas Prácticas

### **1. Separación de Responsabilidades**
- `Sphere3D`: Solo renderiza una esfera
- `SpheresContainer`: Solo gestiona el array de esferas
- `useSpheresManager`: Solo gestiona la lógica de estado

### **2. Componentes Puros**
```typescript
// ✅ Bueno - componente puro
const Sphere3D = ({ id, size, rotation, ... }) => {
  // Lógica pura, sin efectos secundarios
};

// ❌ Evitar - lógica mezclada
const Sphere3D = ({ id, ...props }) => {
  const { updateSphere } = useSpheresManager();
  // Acoplamiento innecesario
};
```

### **3. Tipado Fuerte**
```typescript
// ✅ Bueno - tipos explícitos
interface SphereConfig {
  id: string;
  size: number;
  // ...
}

// ❌ Evitar - tipos débiles
const sphere = {
  id: "1",
  size: "180",  // Error: debería ser number
};
```

### **4. Hooks Personalizados**
```typescript
// ✅ Bueno - lógica en hook
const { addSphere, updateSphere } = useSpheresManager();

// ❌ Evitar - lógica en componente
const MyComponent = () => {
  const [spheres, setSpheres] = useState([]);
  // 100 líneas de lógica...
};
```

### **5. Optimización con useCallback**
```typescript
// ✅ Bueno - evita renders innecesarios
const addSphere = useCallback((config) => {
  setSpheres((prev) => [...prev, newSphere]);
}, []);

// ❌ Evitar - función nueva cada render
const addSphere = (config) => {
  setSpheres((prev) => [...prev, newSphere]);
};
```

### **6. Composición sobre Herencia**
```typescript
// ✅ Bueno - componibles
<SpheresContainer spheres={spheres} />

// ❌ Evitar - jerarquía rígida
<SphereList>
  <SphereItem />
  <SphereItem />
</SphereList>
```

---

## 📊 Estructura Final de Carpetas

```
src/
├── components/
│   ├── Sphere3D.tsx           // Componente esfera individual
│   ├── SpheresContainer.tsx   // Contenedor de esferas
│   └── App.tsx                // Componente principal
├── hooks/
│   └── useSpheresManager.ts   // Hook de lógica
└── types/                     // (Opcional)
    └── sphere.types.ts        // Tipos compartidos
```

---

## 🎓 Resumen de Beneficios

| Aspecto | Beneficio |
|--------|----------|
| **Modularidad** | Cada componente tiene una responsabilidad clara |
| **Reutilización** | Usa en cualquier proyecto React |
| **Escalabilidad** | Agregar más esferas es trivial |
| **Independencia** | Cada esfera se modifica independientemente |
| **Type Safety** | TypeScript previene errores |
| **Testabilidad** | Fácil de testear componentes aislados |
| **Mantenibilidad** | Código limpio y organizado |
| **Performance** | useCallback optimiza renders |

---

## 🚀 Próximos Pasos

1. ✅ Crear los 3 archivos en tu proyecto
2. ✅ Importar en tu componente principal
3. ✅ Usar `useSpheresManager` para gestionar esferas
4. ✅ Personalizar según tus necesidades
5. ✅ Considerar agregar persistencia (localStorage/DB)
6. ✅ Implementar controles visuales para las esferas

---

## 📞 Soporte

Si tienes dudas sobre cómo usar este sistema:

1. Consulta los **Ejemplos de Uso** arriba
2. Revisa la **API de Referencia**
3. Verifica que los archivos estén en las rutas correctas
4. Comprueba que los tipos estén bien importados

¡Happy coding! 🎉