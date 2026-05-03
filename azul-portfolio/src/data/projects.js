
/* import arteDeco from "../assets/project-arte-deco.jpg";
import editorial from "../assets/project-editorial.jpg";
import social from "../assets/project-social.jpg";
import stickers from "../assets/project-stickers.jpg";
import experimental from "../assets/project-experimental.jpg"; */

import berryPortada from "../img/Berry Bistro/321.jpg"
import berryMarca1 from "../img/Berry Bistro/Moodboard - Lopez.jpg"
import berryMarca2 from "../img/Berry Bistro/oki.jpg"
import berryMarca3 from "../img/Berry Bistro/okiiiiiii.jpg"
import berryMarca4 from "../img/Berry Bistro/Paleta - Lopez.jpg"

import bioWord from "../img/Bioword/IMG-5916.JPG"
import bioWord1 from "../img/Bioword/6edd6b5c-75e3-475a-91d0-b7cf727e68e4.JPG"
import bioWord2 from "../img/Bioword/IMG-5917.JPG"
import bioWord3 from "../img/Bioword/IMG-5920.JPG"
import bioWord4 from "../img/Bioword/Mockup Via Publica. 1.png"

import millka from "../img/Milka/IMG-6312.JPG"
import millka1 from "../img/Milka/IMG-6313.JPG"

import vae from "../img/Vae/Mesa de trabajo 1.png"
import vae1 from "../img/Vae/Mesa de trabajo 2.png"
import vae2 from "../img/Vae/Mesa de trabajo 3.png"
import vae3 from "../img/Vae/Mesa de trabajo 4.png"

import ilustraciones from "../img/Paterns e ilustraciones/410024A9-75B2-4A5C-B36F-EAC7BD2E6A30.PNG"
import ilustraciones1 from "../img/Paterns e ilustraciones/BB94699B-2E4F-4F35-AA48-17DBD3DEC194.PNG"
import ilustraciones2 from "../img/Paterns e ilustraciones/IMG-3547.jpg"
import ilustraciones3 from "../img/Paterns e ilustraciones/IMG_1948.JPG"
import ilustraciones4 from "../img/Paterns e ilustraciones/IMG_1954.JPG"

import knor from "../img/Knorr/Mockup revista 1.jpg"
import knor1 from "../img/Knorr/Mockup revista 2.jpg"
import knor2 from "../img/Knorr/Mockup revista cortado 1.jpg"
import knor4 from "../img/Knorr/mockup via publica colectivo.jpg"

import paula from "../img/Paula/Paula 1.jpg"
import paula1 from "../img/Paula/paula 2.png"
import paula2 from "../img/Paula/paula 3.png"


/**
 * @typedef {Object} Project
 * @property {string} id
 * @property {string} title
 * @property {string} category
 * @property {string} description
 * @property {string} cover
 * @property {"tall" | "short" | "medium"} span - Tailwind row-span hint for masonry layout
 * @property {string} context
 * @property {string} objective
 * @property {string} solution
 * @property {string[]} gallery
 * @property {string} [pdfUrl] - REPLACE with Behance / Drive / PDF link
 */

/** @type {Project[]} */
export const projects = [
    {
        id: "berry-bistro",
        title: "Merchandising - Paula Scher ",
        category: "Merchandising",
        description:
            "",
        cover: paula,
        span: "tall",
        context:
            "Paula Scher es una de las diseñadoras gráficas más influyentes del mundo, conocida por su estilo tipográfico fuerte, expresivo y muy urbano.",
        objective:
            "Crear piezas de diseño que representen su estilo visual y recorrido, para dar a conocer su historia de una forma lúdica y expresiva.",
        solution:
            "Un mapa ilustrado que traduce su estilo, referencias y lugares icónicos, incorporando elementos estridentes para reforzar su identidad visual.",
        gallery: [paula1, paula2],
    },
    {
        id: "berry-bistro",
        title: "Branding – Berry Bistro",
        category: "Branding ",
        description:
            "",
        cover: berryPortada,
        span: "tall",
        context:
            "Cafetería ubicada en Buenos Aires, inspirada en la Patagonia argentina tanto en sus sabores como en su ambientación.",
        objective:
            "Crear una identidad visual que transmita la esencia de la Patagonia, resaltando lo natural, lo cálido y la experiencia del lugar.",
        solution:
            "Sistema gráfico con paleta inspirada en la Patagonia, tipografías simples y elementos orgánicos que transmiten lo natural y la calidez del espacio.",
        gallery: [berryMarca1, berryMarca2, berryMarca3, berryMarca4],
    },
    {
        id: "stickers",
        title: "Branding – Vae / Arte y Deco ",
        category: "Branding ",
        description:
            "",
        cover: vae,
        span: "medium",
        context:
            "Estudio de arte y deco enfocado en piezas hechas a mano, donde lo artesanal, los materiales y el proceso son protagonistas.",
        objective:
            "Crear una identidad propia que homogeneice la marca más allá de los cuadros y las piezas en sí, unificando su esencia.",
        solution:
            "Creación de un logo y sistema de elementos visuales inspirados en lo orgánico de la pintura, sin ser literal. Con una reminiscencia a una carta, algo delicado, hecho a mano y con sello, que representa tiempo y dedicación, logrando una identidad clara pero descontracturada.",
        gallery: [vae1, vae2, vae3],
    },
    {
        id: "editorial",
        title: "Diseño Publicitario – Bioworld",
        category: "Diseño Publicitario",
        description:
            "",
        cover: bioWord,
        span: "medium",
        context:
            "Bioworld es una marca de cuidado personal ecológico que propone cepillos de dientes como alternativa sustentable al plástico.",
        objective:
            "Dar a conocer el producto y comunicar sus beneficios, destacando su enfoque sustentable.",
        solution:
            "Se desarrollaron dos propuestas: una emocional, utilizando la imagen de un niño para simbolizar la vida y la importancia del cuidado del medio ambiente; y otra más directa, comparando dos realidades para evidenciar las consecuencias y el beneficio del producto.",
        gallery: [bioWord1, bioWord2, bioWord3, bioWord4],
    },
    {
        id: "social",
        title: "Diseño para redes sociales",
        category: "Diseño Publicitario",
        description:
            "",
        cover: millka,
        span: "short",
        context:
            "Desarrollo de un kit de plantillas para una marca lifestyle que necesitaba consistencia visual en sus publicaciones.",
        objective:
            "Diseñar piezas escalables que mantengan identidad sin volverse repetitivas.",
        solution:
            "Una grilla modular con tres tipos de pieza, paleta limitada y sistema tipográfico flexible que permite adaptar contenidos sin perder coherencia.",
        gallery: [millka1, millka],
    },
    {
        id: "social",
        title: "Diseño Publicitario – Knorr",
        category: "Diseño Publicitario",
        description:
            "",
        cover: knor,
        span: "short",
        context:
            "Knorr es una marca de alimentos reconocida por sus productos prácticos para cocinar, que busca adaptarse a nuevas demandas incorporando mejores ingredientes y opciones más naturales.",
        objective:
            "Dar a conocer los nuevos sabores, comunicando la mejora en sus ingredientes y la reducción de conservantes.",
        solution:
            "Se desarrolló una campaña bajo el slogan “Lo bueno puede ser aún mejor”, mostrando situaciones cotidianas para apelar a los sentimientos del consumidor y generar identificación. Se refuerza la idea de que el producto es el mismo, pero mejorado, sin perder a los consumidores actuales de la marca.",
        gallery: [knor1, knor2, knor4],
    },
    {
        id: "experimental",
        title: "Branding experimental",
        category: "Exploración visual",
        description:
            "",
        cover: ilustraciones,
        span: "tall",
        context:
            "Ejercicio personal de exploración visual donde la tipografía dialoga con elementos fotográficos y orgánicos.",
        objective:
            "Investigar nuevos lenguajes visuales fuera del encargo, alimentando la práctica creativa personal.",
        solution:
            "Composiciones layered donde las palabras se diluyen en imágenes, jugando con escala, opacidad y respiración del espacio.",
        gallery: [ilustraciones1, ilustraciones, ilustraciones3, ilustraciones4],
    },
];