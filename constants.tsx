
import React from 'react';
import { KeyData, Finger } from './types';

// Restauramos colores HEX directos para garantizar que la guía de dedos funcione sin CSS externo
export const FINGER_COLORS: Record<Finger, string> = {
  'left-pinky': '#f472b6',   // Pink 400
  'left-ring': '#c084fc',    // Purple 400
  'left-middle': '#60a5fa',  // Blue 400
  'left-index': '#22d3ee',   // Cyan 400
  'thumb': '#9ca3af',        // Gray 400
  'right-index': '#4ade80',  // Green 400
  'right-middle': '#facc15', // Yellow 400
  'right-ring': '#fb923c',   // Orange 400
  'right-pinky': '#f87171',  // Red 400
};

export const FINGER_NAMES: Record<Finger, string> = {
  'left-pinky': 'Meñique Izquierdo',
  'left-ring': 'Anular Izquierdo',
  'left-middle': 'Corazón Izquierdo',
  'left-index': 'Índice Izquierdo',
  'thumb': 'Pulgares (Espacio)',
  'right-index': 'Índice Derecho',
  'right-middle': 'Corazón Derecho',
  'right-ring': 'Anular Derecho',
  'right-pinky': 'Meñique Derecho',
};

export const KEYBOARD_LAYOUT: KeyData[][] = [
  [
    { key: '1', label: '1', finger: 'left-pinky', row: 0, why: 'Alcance natural exterior.' },
    { key: '2', label: '2', finger: 'left-ring', row: 0, why: 'Extensión diagonal superior.' },
    { key: '3', label: '3', finger: 'left-middle', row: 0, why: 'Extensión diagonal superior.' },
    { key: '4', label: '4', finger: 'left-index', row: 0, why: 'Alcance interior izquierdo.' },
    { key: '5', label: '5', finger: 'left-index', row: 0, why: 'Extensión interior izquierda.' },
    { key: '6', label: '6', finger: 'right-index', row: 0, why: 'Extensión interior derecha.' },
    { key: '7', label: '7', finger: 'right-index', row: 0, why: 'Alcance interior derecho.' },
    { key: '8', label: '8', finger: 'right-middle', row: 0, why: 'Extensión diagonal superior.' },
    { key: '9', label: '9', finger: 'right-ring', row: 0, why: 'Extensión diagonal superior.' },
    { key: '0', label: '0', finger: 'right-pinky', row: 0, why: 'Alcance natural exterior.' },
  ],
  [
    { key: 'q', label: 'Q', finger: 'left-pinky', row: 1, why: 'Posición superior externa.' },
    { key: 'w', label: 'W', finger: 'left-ring', row: 1, why: 'Movimiento vertical desde S.' },
    { key: 'e', label: 'E', finger: 'left-middle', row: 1, why: 'Movimiento vertical desde D.' },
    { key: 'r', label: 'R', finger: 'left-index', row: 1, why: 'Movimiento vertical desde F.' },
    { key: 't', label: 'T', finger: 'left-index', row: 1, why: 'Extensión lateral desde F.' },
    { key: 'y', label: 'Y', finger: 'right-index', row: 1, why: 'Extensión lateral desde J.' },
    { key: 'u', label: 'U', finger: 'right-index', row: 1, why: 'Movimiento vertical desde J.' },
    { key: 'i', label: 'I', finger: 'right-middle', row: 1, why: 'Movimiento vertical desde K.' },
    { key: 'o', label: 'O', finger: 'right-ring', row: 1, why: 'Movimiento vertical desde L.' },
    { key: 'p', label: 'P', finger: 'right-pinky', row: 1, why: 'Posición superior externa.' },
  ],
  [
    { key: 'a', label: 'A', finger: 'left-pinky', row: 2, why: 'Posición de reposo base.' },
    { key: 's', label: 'S', finger: 'left-ring', row: 2, why: 'Posición de reposo base.' },
    { key: 'd', label: 'D', finger: 'left-middle', row: 2, why: 'Posición de reposo base.' },
    { key: 'f', label: 'F', finger: 'left-index', row: 2, why: 'Posición de reposo con muesca táctil.' },
    { key: 'g', label: 'G', finger: 'left-index', row: 2, why: 'Extensión lateral cómoda.' },
    { key: 'h', label: 'H', finger: 'right-index', row: 2, why: 'Extensión lateral cómoda.' },
    { key: 'j', label: 'J', finger: 'right-index', row: 2, why: 'Posición de reposo con muesca táctil.' },
    { key: 'k', label: 'K', finger: 'right-middle', row: 2, why: 'Posición de reposo base.' },
    { key: 'l', label: 'L', finger: 'right-ring', row: 2, why: 'Posición de reposo base.' },
    { key: 'ñ', label: 'Ñ', finger: 'right-pinky', row: 2, why: 'Posición de reposo base (Español).' },
  ],
  [
    { key: '<', label: '<', finger: 'left-pinky', row: 3, why: 'Tecla ISO para programación.' },
    { key: 'z', label: 'Z', finger: 'left-pinky', row: 3, why: 'Extensión inferior externa.' },
    { key: 'x', label: 'X', finger: 'left-ring', row: 3, why: 'Extensión diagonal inferior.' },
    { key: 'c', label: 'C', finger: 'left-middle', row: 3, why: 'Extensión diagonal inferior.' },
    { key: 'v', label: 'V', finger: 'left-index', row: 3, why: 'Extensión diagonal inferior.' },
    { key: 'b', label: 'B', finger: 'left-index', row: 3, why: 'Extensión lateral inferior.' },
    { key: 'n', label: 'N', finger: 'right-index', row: 3, why: 'Extensión lateral inferior.' },
    { key: 'm', label: 'M', finger: 'right-index', row: 3, why: 'Extensión diagonal inferior.' },
    { key: ',', label: ',', finger: 'right-middle', row: 3, why: 'Puntuación esencial.' },
    { key: '.', label: '.', finger: 'right-ring', row: 3, why: 'Fin de frase y decimales.' },
    { key: '-', label: '-', finger: 'right-pinky', row: 3, why: 'Barra alta y guiones.' },
    { key: '-', label: '_', finger: 'right-pinky', row: 3, why: 'Barra baja muy usada en código.' },
  ],
];

export const KEY_TO_FINGER_MAP: Record<string, KeyData> = {};

// Población inicial
KEYBOARD_LAYOUT.flat().forEach(k => {
  KEY_TO_FINGER_MAP[k.key.toLowerCase()] = k;
  KEY_TO_FINGER_MAP[k.label.toLowerCase()] = k;
  if (k.key === '1') KEY_TO_FINGER_MAP['!'] = k;
  if (k.key === '2') KEY_TO_FINGER_MAP['"'] = k;
  if (k.key === '3') KEY_TO_FINGER_MAP['·'] = k;
  if (k.key === '4') KEY_TO_FINGER_MAP['$'] = k;
  if (k.key === '5') KEY_TO_FINGER_MAP['%'] = k;
  if (k.key === '6') KEY_TO_FINGER_MAP['&'] = k;
  if (k.key === '7') KEY_TO_FINGER_MAP['/'] = k;
  if (k.key === '8') KEY_TO_FINGER_MAP['('] = k;
  if (k.key === '9') KEY_TO_FINGER_MAP[')'] = k;
  if (k.key === '0') KEY_TO_FINGER_MAP['='] = k;
  if (k.key === '<') KEY_TO_FINGER_MAP['>'] = k;
  if (k.key === ',') KEY_TO_FINGER_MAP[';'] = k;
  if (k.key === '.') KEY_TO_FINGER_MAP[':'] = k;
  if (k.key === '-') KEY_TO_FINGER_MAP['_'] = k;
});

const accentMap: Record<string, string> = {
  'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u',
  'ü': 'u', 'ï': 'i',
  'Á': 'a', 'É': 'e', 'Í': 'i', 'Ó': 'o', 'Ú': 'u',
  'Ñ': 'ñ'
};

Object.entries(accentMap).forEach(([special, base]) => {
  if (KEY_TO_FINGER_MAP[base]) {
    KEY_TO_FINGER_MAP[special] = { ...KEY_TO_FINGER_MAP[base], key: special, label: special.toUpperCase() };
  }
});

export const SPACE_DATA: KeyData = { key: ' ', label: 'Espacio', finger: 'thumb', row: 5, why: 'Dedo más fuerte para la tecla más frecuente.' };
KEY_TO_FINGER_MAP[' '] = SPACE_DATA;
