export type PhraseCategory = 'basico' | 'programacion' | 'teclas_raras' | 'acentuacion';

export interface PhraseDatabase {
  [lang: string]: {
    [category in PhraseCategory]: string[];
  };
}

export const LOCAL_PHRASE_DB: PhraseDatabase = {
  es: {
    basico: [
      "El veloz murciélago hindú comía feliz cardillo y kiwi.",
      "La constancia es la clave del éxito en cualquier disciplina.",
      "Mañana será un gran día para aprender algo nuevo.",
      "Caminar por la playa al atardecer es muy relajante.",
      "La mecanografía veloz requiere práctica diaria y paciencia."
    ],
    programacion: [
      "const pipeline = (data) => data.map(x => x * 2);",
      "function initApp() { return new Promise(resolve => {}); }",
      "export default class MyComponent extends React.Component {",
      "if (process.env.NODE_ENV === 'production') { console.log('Live'); }",
      "const { name, version } = JSON.parse(fs.readFileSync('package.json'));"
    ],
    teclas_raras: [
      "¿Viste cómo el pingüino corría hacia el iglú? ¡Increíble!",
      "Los caracteres [ corchetes ] y { llaves } son vitales en JSON.",
      "El símbolo ~ (tilde de la ñ) y ^ (circunflejo) son poco usados.",
      "La ruta C:\\Users\\Admin\\Documents/test.txt usa barras inversas.",
      "¿Sabías que 2^10 es igual a 1024? ¡Es potencia binaria!"
    ],
    acentuacion: [
      "El capitán pidió un café exprés y un té tras el festín en el jardín.",
      "Álvaro compró un jarrón de mármol azul y un sillón ortopédico.",
      "Sé que él no te dio el libro, pero tú aún no sabes qué pasó allí.",
      "El murciélago sobrevoló el área de forma frenética y enigmática.",
      "Raúl leía la biografía de un héroe que vivía en un país lejano.",
      "¿Cuándo vendrás? Dime si el examen de matemáticas fue difícil o fácil.",
      "El árbol de caoba creció rápido gracias al fértil césped del jardín.",
      "Sólo tú sabes qué es lo que más te conviene para el próximo decenio.",
      "Ojalá el médico apruebe el análisis del líquido cefalorraquídeo hoy.",
      "Escribía con ímpetu mientras el búho observaba desde el ático vacío."
    ]
  },
  en: {
    basico: [
      "The quick brown fox jumps over the lazy dog.",
      "Consistency is more important than intensity.",
      "Every day is a second chance to improve your skills.",
      "Reading books opens your mind to new perspectives.",
      "Success is the sum of small efforts repeated daily."
    ],
    programacion: [
      "const fetchData = async (url) => await fetch(url).json();",
      "git commit -m 'feat: add localization to phrase system'",
      "while (true) { if (battery < 20) break; }",
      "import { useState, useEffect } from 'react';",
      "array.reduce((acc, curr) => acc + curr, 0);"
    ],
    teclas_raras: [
      "Wait! Did you see the [bracketed] text in the {curly} braces?",
      "The pipe | symbol is used for redirects in Linux terminals.",
      "Is it true that 5 > 3 and 2 < 4? Let's check logic!",
      "Type 'cd ../../' to go back two directories in the shell.",
      "The #hashtag is used for comments in many config files."
    ],
    acentuacion: [
      "The résumé of the employé was impeccable and very detailed.",
      "She visited the café to drink a frappé during her vacation.",
      "The façade of the building had a beautiful décor in the façade.",
      "Please cooperate with the naïve protégé during the soirée.",
      "It is a cliché to say that the jalapeño is very spicy."
    ]
  },
  fr: {
    basico: [
      "Portez ce vieux vieux vieux vieux vieux vieux vieux vieux vieux.",
      "La vie est belle quand on prend le temps de l'apprécier.",
      "Apprendre à taper vite demande de la rigueur et du temps.",
      "Le succès est le fruit d'un travail acharné et constant.",
      "Chaque jour est une nouvelle opportunité de grandir."
    ],
    programacion: [
      "let reponse = await prompt('Voulez-vous continuer ?');",
      "const config = { langue: 'fr', theme: 'sombre' };",
      "console.error(`Erreur fatale : ${error.message}`);",
      "for (let i = 0; i < liste.length; i++) { doSomething(); }",
      "document.querySelector('.app').addEventListener('click', e => {});"
    ],
    teclas_raras: [
      "L'élève a-t-il reçu ses 100€ pour son déjeuner ?",
      "Regardez l'icône { } et [ ] dans l'éditeur de code.",
      "Le carácter ~ est rare, tout comme le symbole | (pipe).",
      "Utilisez-vous souvent el guion bajo _ o el guion medio - ?",
      "Attention aux caractères spéciaux comme ^ y ¨ !"
    ],
    acentuacion: [
      "L'événement théâtral a été un succès grâce à l'héroïne.",
      "Où est le garçon qui a mangé le gâteau à la crème fraîche ?",
      "C'est l'été, le maïs mûrit sous le château de la forêt.",
      "L'étudiant a étudié l'algèbre et la géométrie à l'école.",
      "Il paraît que le poète déteste les huîtres et le thé glacé."
    ]
  }
};