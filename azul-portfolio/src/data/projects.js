
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
import knor3 from "../img/Knorr/Mockup revista cortado 2.jpg"
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
        title: "Berry Bistro",
        category: "Identidad de marca",
        description:
            "Sistema de identidad visual para una marca de decoración con foco en lo artesanal y lo contemporáneo.",
        cover: paula,
        span: "tall",
        context:
            "Arte y Deco es una marca de objetos de decoración para el hogar que buscaba una identidad cálida y elegante, capaz de comunicar su esencia artesanal sin perder modernidad.",
        objective:
            "Construir una identidad visual completa: logotipo, paleta, tipografías y aplicaciones que reflejen la sensibilidad estética de la marca.",
        solution:
            "Una tipografía serif refinada combinada con un símbolo floral minimalista. La paleta blush y lavanda aporta calidez, mientras que el sistema de aplicaciones mantiene una atmósfera editorial y serena.",
        gallery: [paula1, paula2],
    },
    {
        id: "berry-bistro",
        title: "Berry Bistro",
        category: "Identidad de marca",
        description:
            "Sistema de identidad visual para una marca de decoración con foco en lo artesanal y lo contemporáneo.",
        cover: berryPortada,
        span: "tall",
        context:
            "Arte y Deco es una marca de objetos de decoración para el hogar que buscaba una identidad cálida y elegante, capaz de comunicar su esencia artesanal sin perder modernidad.",
        objective:
            "Construir una identidad visual completa: logotipo, paleta, tipografías y aplicaciones que reflejen la sensibilidad estética de la marca.",
        solution:
            "Una tipografía serif refinada combinada con un símbolo floral minimalista. La paleta blush y lavanda aporta calidez, mientras que el sistema de aplicaciones mantiene una atmósfera editorial y serena.",
        gallery: [berryMarca1, berryMarca2, berryMarca3, berryMarca4],
    },
    {
        id: "stickers",
        title: "Sistema visual / stickers",
        category: "Ilustración aplicada",
        description:
            "Pack de stickers ilustrados como extensión de la identidad de una marca lúdica.",
        cover: vae,
        span: "medium",
        context:
            "Extensión gráfica de una identidad existente a través de un pack de stickers que funcionara como merch coleccionable.",
        objective:
            "Crear un sistema de íconos e ilustraciones reconocibles, divertidos y coherentes entre sí.",
        solution:
            "Una serie de ilustraciones realizadas en Procreate, con paleta restringida y trazo consistente para construir una familia visual unificada.",
        gallery: [vae1, vae2, vae3],
    },
    {
        id: "editorial",
        title: "Proyecto editorial",
        category: "Diseño editorial",
        description:
            "Diagramación y dirección de arte para una pieza editorial impresa con foco en la jerarquía tipográfica.",
        cover: bioWord,
        span: "medium",
        context:
            "Proyecto académico de diagramación editorial enfocado en la construcción de una grilla flexible y un sistema tipográfico coherente.",
        objective:
            "Explorar la relación entre texto e imagen, generando un ritmo visual que invite a la lectura pausada.",
        solution:
            "Una grilla amplia con generosos márgenes blancos, contrastes tipográficos sutiles y fotografía como elemento conductor entre páginas.",
        gallery: [bioWord1, bioWord2, bioWord3, bioWord4],
    },
    {
        id: "social",
        title: "Diseño para redes sociales",
        category: "Social media",
        description:
            "Sistema visual para feed de Instagram con piezas modulares, flexibles y reconocibles.",
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
        title: "Diseño para redes sociales",
        category: "Social media",
        description:
            "Sistema visual para feed de Instagram con piezas modulares, flexibles y reconocibles.",
        cover: knor,
        span: "short",
        context:
            "Desarrollo de un kit de plantillas para una marca lifestyle que necesitaba consistencia visual en sus publicaciones.",
        objective:
            "Diseñar piezas escalables que mantengan identidad sin volverse repetitivas.",
        solution:
            "Una grilla modular con tres tipos de pieza, paleta limitada y sistema tipográfico flexible que permite adaptar contenidos sin perder coherencia.",
        gallery: [knor1, knor2, knor3, knor4],
    },
    {
        id: "experimental",
        title: "Branding experimental",
        category: "Exploración visual",
        description:
            "Exploración tipográfica y de composición a partir de motivos botánicos y capas translúcidas.",
        cover: ilustraciones,
        span: "tall",
        context:
            "Ejercicio personal de exploración visual donde la tipografía dialoga con elementos fotográficos y orgánicos.",
        objective:
            "Investigar nuevos lenguajes visuales fuera del encargo, alimentando la práctica creativa personal.",
        solution:
            "Composiciones layered donde las palabras se diluyen en imágenes, jugando con escala, opacidad y respiración del espacio.",
        gallery: [ilustraciones1, ilustraciones2, ilustraciones3, ilustraciones4],
    },
];