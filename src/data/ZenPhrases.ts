export interface Level {
  id: number;
  phrases: string[];
}

export interface Category {
  stars: 1 | 2 | 3;
  levels: Level[];
}

export interface PhraseSystem {
  [key: string]: Category;
}

export const PHRASE_CATEGORIES: PhraseSystem = {
  oneStar: {
    stars: 1,
    levels: [
      {
        id: 1,
        phrases: [
          "el sol sale cada mañana en el este la casa es grande y de color azul mi perro corre por el campo verde me gusta comer pan tostado con miel el agua del rio esta muy fria hoy el gato duerme tranquilo sobre el sofa viejo los niños juegan felices en el parque tengo un libro nuevo para leer esta tarde",
          "la mesa tiene cuatro patas de madera fuerte el jardinero riega las flores con agua fresca cada tarde de verano la mama cocina una sopa muy rica para toda la familia el pajaro vuela alto en el cielo azul y claro busca comida entre los arboles verdes del bosque"
        ]
      },
      {
        id: 2,
        phrases: [
          "hoy el cielo esta despejado y hace mucho calor caminamos por la calle principal de la ciudad el coche de mi padre es rapido y seguro la madre prepara una cena rica para todos siento mucha paz cuando escucho la lluvia caer vamos al cine a ver una pelicula de risas el jardin tiene flores rojas y blancas muy bonitas y grandes",
          "el abuelo cuenta historias de viajes antiguos a otros paises lejanos nos gusta sentarnos cerca del fuego cuando hace frio en invierno la ventana esta abierta y entra un aire fresco que huele a campo recien cortado busco las llaves de casa en mi mochila pequeña pero no las encuentro por ninguna parte"
        ]
      },
      {
        id: 3,
        phrases: [
          "un dia en el campo es lo mejor para descansar del ruido de los autos podemos ver vacas ovejas y caballos comiendo hierba fresca bajo la sombra de un gran arbol verde la comida sabe mejor cuando estamos todos juntos compartiendo risas y momentos felices bajo el sol de la tarde que ya se va",
          "mañana sera un dia de mucho trabajo pero ahora quiero descansar un poco mas el sofa es comodo y la manta es suave y caliente me quedo dormido pensando en mis planes para las vacaciones de verano cerca del mar azul con olas grandes para jugar con mis amigos de siempre de la escuela"
        ]
      }
    ]
  },
  twoStars: {
    stars: 2,
    levels: [
      {
        id: 1,
        phrases: [
          "Aunque el camino sea difícil, siempre hay una luz al final del túnel que nos guía. La paciencia es una virtud que pocos poseen, pero que todos necesitamos cultivar para alcanzar nuestras metas más ambiciosas. Mañana será un día mejor si hoy nos esforzamos al máximo en nuestras tareas diarias y mostramos gratitud por lo que tenemos.",
          "¿Has pensado alguna vez en la inmensidad del universo y en lo pequeños que somos nosotros en comparación con las estrellas? El tiempo vuela cuando estamos disfrutando de una buena conversación con amigos sinceros. Las palabras tienen el poder de construir puentes o levantar muros, por eso es importante elegir bien qué decir en cada momento preciso."
        ]
      },
      {
        id: 2,
        phrases: [
          "¡Qué alegría verte de nuevo por aquí después de tanto tiempo sin saber de ti! Me pregunto si habrás cumplido todos esos sueños que tenías guardados en el cajón de las ilusiones. A veces, la vida nos sorprende con giros inesperados que nos obligan a cambiar de rumbo radicalmente, pero siempre aprendemos algo nuevo y valioso en el proceso de adaptación.",
          "¿Sabías que la música es el lenguaje universal que conecta los corazones de personas de diferentes culturas? No importa de dónde vengas ni qué lengua hables, una melodía hermosa puede evocar sentimientos profundos en cualquier ser humano sensible. Me gusta cerrar los ojos y dejarme llevar por el ritmo suave de una guitarra española en una noche estrellada."
        ]
      },
      {
        id: 3,
        phrases: [
          "El otoño trae consigo una melancolía dulce, con sus hojas secas crujiendo bajo nuestros pies cansados de caminar. El olor a tierra mojada tras la tormenta es uno de los perfumes más exquisitos que la naturaleza nos regala generosamente. Cada estación tiene su propio encanto, pero la transición entre el verano y el invierno parece tener una magia especial y única.",
          "Si decides emprender un viaje largo, asegúrate de llevar contigo solo lo indispensable para no cargar con peso innecesario. La libertad se encuentra en la simplicidad de las cosas pequeñas: un amanecer, una taza de café caliente, una mirada cómplice. No busques la felicidad en objetos materiales, pues ella reside en los momentos compartidos con las personas que amas de verdad."
        ]
      }
    ]
  },
  threeStars: {
    stars: 3,
    levels: [
      {
        id: 1,
        phrases: [
          "Para implementar correctamente un sistema asíncrono en Rust, es vital entender el concepto de Ownership y Borrowing profundamente. El uso de `tokio` permite gestionar múltiples hilos de ejecución sin bloquear el Event Loop principal del sistema operativo host. Si la latencia supera los 20ms, debemos optimizar el canal de comunicación usando UDP (osc) en lugar de protocolos pesados como HTTP o JSON serializado.",
          "El patrón de diseño 'Hexagonal Architecture' separa el dominio lógico de los detalles de infraestructura mediante puertos y adaptadores. Esto permite que el núcleo de la aplicación sea agnóstico a la base de datos o al framework de interfaz de usuario utilizado. En un entorno de alto rendimiento, la gestión manual de la memoria y la reducción de las asignaciones en el montón (heap allocations) son estrategias clave para el éxito."
        ]
      },
      {
        id: 2,
        phrases: [
          "const pipeline = (data) => data.filter(x => x.score > 80).map(x => ({ ...x, status: 'active' })); La recursividad puede ser elegante pero peligrosa si no se maneja el caso base adecuadamente, provocando un StackOverflowError. El uso de clausuras (closures) en JavaScript permite capturar el estado léxico circundante, creando potentes abstracciones para la programación funcional moderna y reactiva.",
          "docker-run --rm -v $(pwd):/app node:alpine npm install && npm run build --module-resolution=node. La seguridad en las APIs RESTful se garantiza habitualmente mediante el uso de tokens JWT (JSON Web Tokens) firmados digitalmente. Es fundamental implementar políticas de CORS estrictas y sanitizar todas las entradas de los usuarios para prevenir ataques de inyección SQL o Cross-Site Scripting (XSS) en producción."
        ]
      },
      {
        id: 3,
        phrases: [
          "El algoritmo de Dijkstra encuentra el camino más corto en un grafo con pesos no negativos utilizando una cola de prioridad. En machine learning, el descenso de gradiente estocástico es la base para entrenar redes neuronales profundas mediante la actualización iterativa de los pesos. La complejidad temporal O(n log n) es típica de algoritmos de ordenación eficientes como QuickSort o MergeSort en el caso promedio.",
          "La transformada de Fourier convierte una señal del dominio del tiempo al dominio de la frecuencia, revelando sus componentes espectrales. En sistemas distribuidos, el teorema CAP establece que es imposible garantizar simultáneamente consistencia, disponibilidad y tolerancia a particiones. La implementación de un Sidecar en Rust para procesamiento de audio requiere una sincronización precisa mediante buffers circulares y comunicación atómica."
        ]
      }
    ]
  }
};

export const ZEN_PHRASES = Object.values(PHRASE_CATEGORIES).flatMap(c => c.levels.flatMap(l => l.phrases));
