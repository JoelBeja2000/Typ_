import { PHRASE_CATEGORIES } from './ZenPhrases';

export interface GuideLevel {
    id: string;
    title: string;
    description?: string;
    fingers: string[];
    keys: string[];
    phrases: string[];
    difficulty: number; // 1-3 stars
}

export interface GuidePhase {
    id: string;
    title: string;
    description: string;
    levels: GuideLevel[];
}

export interface GuideSection {
    id: string;
    title: string;
    content: string;
}

export const GUIDE_PHASES: GuidePhase[] = [
    {
        id: 'fase_estrellas',
        title: '🏆 Desafíos por Estrellas',
        description: 'Niveles de dificultad real con frases de 60+ palabras.',
        levels: [
            ...PHRASE_CATEGORIES.oneStar.levels.map(l => ({
                id: `star_1_lvl_${l.id}`,
                title: `Nivel ${l.id}`,
                description: 'Vocabulario esencial y fluidez básica.',
                fingers: [],
                keys: [],
                difficulty: 1,
                phrases: l.phrases
            })),
            ...PHRASE_CATEGORIES.twoStars.levels.map(l => ({
                id: `star_2_lvl_${l.id}`,
                title: `Nivel ${l.id}`,
                description: 'Puntuación, tildes y gramática compleja.',
                fingers: [],
                keys: [],
                difficulty: 2,
                phrases: l.phrases
            })),
            ...PHRASE_CATEGORIES.threeStars.levels.map(l => ({
                id: `star_3_lvl_${l.id}`,
                title: `Nivel ${l.id}`,
                description: 'Símbolos, código y términos técnicos densos.',
                fingers: [],
                keys: [],
                difficulty: 3,
                phrases: l.phrases
            }))
        ]
    },
    {
        id: 'fase_1',
        title: 'Fase 1: Pares de Dedos (Homólogos)',
        description: 'Coordinación estricta de dedos equivalentes.',
        levels: [
            {
                id: 'nivel_1_pares_indices',
                title: 'Pares: Índices (L2 + R2)',
                description: 'Teclas: F, G, V, B, R, T + J, H, N, M, Y, U (Solo U)',
                fingers: ['L2', 'R2'],
                keys: ['F', 'G', 'V', 'B', 'R', 'T', 'J', 'H', 'N', 'M', 'Y', 'U', '4', '5', '6', '7'],
                difficulty: 1,
                phrases: [
                    "un muy tu hutu run fun gun bun my ugh",
                    "tu hutu muy un tu hutu muy un tu hutu",
                    "muy tu run un fun gun bun y hutu",
                    "unum hum tum bum rum gum yum",
                    "frt vbg jyh nm u frt vbg jyh nm u"
                ]
            },
            {
                id: 'nivel_1_pares_medios',
                title: 'Pares: Corazón (L3 + R3)',
                description: 'Teclas: D, E, C + K, I (Solo E, I)',
                fingers: ['L3', 'R3'],
                keys: ['D', 'E', 'C', 'K', 'I', '3', '8', ','],
                difficulty: 1,
                phrases: [
                    "dice kiki decide ceder ese cedi de kiev",
                    "kiki dice cede ese dique y decide",
                    "decide ceder dice kiki ece de cedec",
                    "cedi mi dique y decidi ceder ese cedi",
                    "ded cdc kik iii ded cdc kik iii"
                ]
            },
            {
                id: 'nivel_1_pares_anulares',
                title: 'Pares: Anulares (L4 + R4)',
                description: 'Teclas: S, W, X + L, O (Solo O)',
                fingers: ['L4', 'R4'],
                keys: ['S', 'W', 'X', 'L', 'O', '2', '9', '.'],
                difficulty: 1,
                phrases: [
                    "oso soso solo lo olo los sol",
                    "lolo olo los osos solos o lo olo",
                    "sol solo o los osos sos o lo olo",
                    "so los olo o lolo solo lo olo",
                    "sws xws lol olo sws xws lol olo"
                ]
            },
            {
                id: 'nivel_1_pares_meniques',
                title: 'Pares: Meñiques (L5 + R5)',
                description: 'Teclas: A, Q, Z + Ñ, P (Solo A)',
                fingers: ['L5', 'R5'],
                keys: ['A', 'Q', 'Z', 'Ñ', 'P', '1', '0', '-', '´', "'"],
                difficulty: 1,
                phrases: [
                    "papa aña zapa a aza paña a papa",
                    "aza a paña a papa aña a zapa",
                    "paña zapa a aza aña a papa",
                    "apa aña aza paña zapa papa",
                    "aqa aza ñpñ aqa aza ñpñ"
                ]
            }
        ]
    },
    {
        id: 'fase_2',
        title: 'Fase 2: Dedos Individuales (Mano Izquierda)',
        description: 'Control independiente de cada dedo izquierdo.',
        levels: [
            {
                id: 'nivel_2_indice_izq',
                title: '1. Índice Izquierdo',
                description: 'F, R, T, G, V, B (Sin Vocales)',
                fingers: ['L2'],
                keys: ['F', 'R', 'T', 'G', 'V', 'B', '4', '5'],
                difficulty: 2,
                phrases: [
                    "frt gvb frt gvb frt gvb frt gvb",
                    "fgf rtr vbv fgf rtr vbv fgf rtr",
                    "bgt rfv bgt rfv bgt rfv bgt rfv",
                    "vfr tgb vfr tgb vfr tgb vfr tgb",
                    "ff rr tt gg vv bb ff rr tt gg"
                ]
            },
            {
                id: 'nivel_2_medio_izq',
                title: '2. Corazón Izquierdo',
                description: 'D, E, C (Vocal E)',
                fingers: ['L3'],
                keys: ['D', 'E', 'C', '3'],
                difficulty: 2,
                phrases: [
                    "cede de cede de cede de cede",
                    "dede cede dede cede dede cede",
                    "ece de cedec ece de cedec ece",
                    "ded cdc ded cdc ded cdc ded",
                    "cede ese cede ese cede ese"
                ]
            },
            {
                id: 'nivel_2_anular_izq',
                title: '3. Anular Izquierdo',
                description: 'S, W, X (Sin Vocales)',
                fingers: ['L4'],
                keys: ['S', 'W', 'X', '2'],
                difficulty: 2,
                phrases: [
                    "sws xws sws xws sws xws sws",
                    "wxw sxs wxw sxs wxw sxs wxw",
                    "ss ww xx ss ww xx ss ww xx",
                    "swx xws swx xws swx xws swx",
                    "xsw wsx xsw wsx xsw wsx xsw"
                ]
            },
            {
                id: 'nivel_2_menique_izq',
                title: '4. Meñique Izquierdo',
                description: 'A, Q, Z (Vocal A)',
                fingers: ['L5'],
                keys: ['A', 'Q', 'Z', '1', '<', '>'],
                difficulty: 2,
                phrases: [
                    "aza aqa aza aqa aza aqa aza",
                    "aqa zaza aqa zaza aqa zaza",
                    "qaz aza qaz aza qaz aza qaz",
                    "aa qq zz aa qq zz aa qq zz",
                    "zqa aqz zqa aqz zqa aqz zqa"
                ]
            }
        ]
    },
    {
        id: 'fase_3',
        title: 'Fase 3: Dedos Individuales (Mano Derecha)',
        description: 'Control independiente de cada dedo derecho.',
        levels: [
            {
                id: 'nivel_3_indice_der',
                title: '1. Índice Derecho',
                description: 'J, H, N, M, U, Y (Vocales U, Y)',
                fingers: ['R2'],
                keys: ['J', 'H', 'N', 'M', 'U', 'Y', '6', '7'],
                difficulty: 2,
                phrases: [
                    "un muy hum un muy hum un muy",
                    "muum nunn muum nunn muum nunn",
                    "juy hum juy hum juy hum juy",
                    "yny umu yny umu yny umu yny",
                    "muy un muy un muy un muy un"
                ]
            },
            {
                id: 'nivel_3_medio_der',
                title: '2. Corazón Derecho',
                description: 'K, I (Vocal I)',
                fingers: ['R3'],
                keys: ['K', 'I', '8', ','],
                difficulty: 2,
                phrases: [
                    "kik iii kik iii kik iii kik",
                    "ki ik ki ik ki ik ki ik ki",
                    "kiki ikik kiki ikik kiki ikik",
                    "iii kkk iii kkk iii kkk iii",
                    "ik ki ik ki ik ki ik ki ik"
                ]
            },
            {
                id: 'nivel_3_anular_der',
                title: '3. Anular Derecho',
                description: 'L, O (Vocal O)',
                fingers: ['R4'],
                keys: ['L', 'O', '9', '.'],
                difficulty: 2,
                phrases: [
                    "lol olo lol olo lol olo lol",
                    "lo ol lo ol lo ol lo ol lo",
                    "lolo olol lolo olol lolo olol",
                    "ooo lll ooo lll ooo lll ooo",
                    "lloo ooll lloo ooll lloo ooll"
                ]
            },
            {
                id: 'nivel_3_menique_der',
                title: '4. Meñique Derecho',
                description: 'Ñ, P (Sin Vocales)',
                fingers: ['R5'],
                keys: ['Ñ', 'P', '0', '-', '´'],
                difficulty: 2,
                phrases: [
                    "ñpñ pñp ñpñ pñp ñpñ pñp ñpñ",
                    "ññ pp ññ pp ññ pp ññ pp ññ",
                    "pñ ñp pñ ñp pñ ñp pñ ñp pñ",
                    "ñpñp pñpñ ñpñp pñpñ ñpñp pñpñ",
                    "ppññ ppññ ppññ ppññ ppññ ppññ"
                ]
            }
        ]
    },
    {
        id: 'fase_4',
        title: 'Fase 4: Combinaciones Reales',
        description: 'Palabras completas usando ambas manos.',
        levels: [
            {
                id: 'nivel_4_comunes',
                title: 'Palabras Comunes',
                description: 'Las 100 palabras más usadas.',
                fingers: ['L2', 'L3', 'L4', 'L5', 'R2', 'R3', 'R4', 'R5'],
                keys: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'Y', 'Z'],
                difficulty: 3,
                phrases: [
                    "para que sirve la vida si no hacemos cosas buenas por los demas cada dia",
                    "como estan las cosas en tu casa despues de todo lo que paso ayer",
                    "todo el mundo sabe eso desde hace mucho tiempo y nadie dice nada al respecto",
                    "cuando vienes a casa para comer algo rico y hablar de nuestros planes"
                ]
            }
        ]
    },
    {
        id: 'fase_6',
        title: 'Fase 6: Texto Completo (Pangramas)',
        description: 'Todas las letras.',
        levels: [
            {
                id: 'nivel_6_texto_completo',
                title: 'Pangramas',
                description: 'Todas las letras.',
                fingers: ['L2', 'L3', 'L4', 'L5', 'R2', 'R3', 'R4', 'R5'],
                keys: [],
                difficulty: 3,
                phrases: [
                    "el veloz murciélago hindú comía feliz cardillo y kiwi",
                    "la cigüeña tocaba el saxofón detrás del palenque de paja",
                    "queda gazpacho, fibra, latex, jamon, kiwi y viñas"
                ]
            }
        ]
    },
    {
        id: 'fase_7',
        title: 'Fase 7: Acentos',
        description: 'Práctica con tildes.',
        levels: [
            {
                id: 'fase_7_acentos',
                title: 'Acentos',
                description: 'Vocales acentuadas.',
                fingers: ['R5', 'L2', 'L3', 'L5', 'R2', 'R3', 'R4'],
                keys: ['´', 'A', 'E', 'I', 'O', 'U'],
                difficulty: 3,
                phrases: [
                    "á é í ó ú",
                    "mamá comió puré",
                    "allí durmió él",
                    "avión camión canción"
                ]
            }
        ]
    }
];

// Deprecated: Keeping empty array for type compatibility if needed temporarily, but ideally removed.
// export const GUIDE_LEVELS: GuideLevel[] = []; 

export const GUIDE_SECTIONS: GuideSection[] = [
    {
        id: 'intro',
        title: '1. Introducción',
        content: `La mecanografía es la optimización de una interfaz biomecánica compleja.
Para el usuario de un MacBook ISO Español, este desafío presenta variables únicas.
El objetivo es alcanzar la "high-velocity typing" minimizando latencia cognitiva y fatiga.`
    },
    {
        id: 'hardware',
        title: '1.1 Arquitectura del Hardware',
        content: `Validar la arquitectura del instrumento es imperativo.
Distribución ISO:
- Tecla de Retorno (Enter) Vertical (L invertida).
- División del Shift Izquierdo (tecla < > adicional).
Comprender esta topografía evita "micro-dudas".`
    },
    {
        id: 'biomechanics',
        title: '2. Fundamentos Biomecánicos',
        content: `La velocidad se basa en el reposo eficiente en la Fila Guía (Home Row).
Anclaje Sensorial:
- Índice Izquierdo: F (marca táctil).
- Índice Derecho: J (marca táctil).
Estos actúan como pivotes para la propiocepción espacial.`
    },
    {
        id: 'posture',
        title: '8. Ergonomía y Postura',
        content: `Postura de "Flotación":
- No apoyar las muñecas para alta velocidad.
- Antebrazos paralelos al suelo.
- Elevar el MacBook a la altura de los ojos para evitar compresión cervical.`
    }
];
