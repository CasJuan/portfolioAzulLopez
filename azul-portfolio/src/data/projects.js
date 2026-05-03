
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
        cover: berryPortada,
        span: "tall",
        context:
            "Arte y Deco es una marca de objetos de decoración para el hogar que buscaba una identidad cálida y elegante, capaz de comunicar su esencia artesanal sin perder modernidad.",
        objective:
            "Construir una identidad visual completa: logotipo, paleta, tipografías y aplicaciones que reflejen la sensibilidad estética de la marca.",
        solution:
            "Una tipografía serif refinada combinada con un símbolo floral minimalista. La paleta blush y lavanda aporta calidez, mientras que el sistema de aplicaciones mantiene una atmósfera editorial y serena.",
        gallery: [berryMarca1, berryMarca2, berryMarca3, berryMarca4],
        // pdfUrl: "https://...", // REPLACE with link
    },
    {
        id: "editorial",
        title: "Proyecto editorial",
        category: "Diseño editorial",
        description:
            "Diagramación y dirección de arte para una pieza editorial impresa con foco en la jerarquía tipográfica.",
        /* cover: editorial, */
        span: "medium",
        context:
            "Proyecto académico de diagramación editorial enfocado en la construcción de una grilla flexible y un sistema tipográfico coherente.",
        objective:
            "Explorar la relación entre texto e imagen, generando un ritmo visual que invite a la lectura pausada.",
        solution:
            "Una grilla amplia con generosos márgenes blancos, contrastes tipográficos sutiles y fotografía como elemento conductor entre páginas.",
        //gallery: [editorial, arteDeco],
    },
    {
        id: "social",
        title: "Diseño para redes sociales",
        category: "Social media",
        description:
            "Sistema visual para feed de Instagram con piezas modulares, flexibles y reconocibles.",
        /* cover: social, */
        span: "short",
        context:
            "Desarrollo de un kit de plantillas para una marca lifestyle que necesitaba consistencia visual en sus publicaciones.",
        objective:
            "Diseñar piezas escalables que mantengan identidad sin volverse repetitivas.",
        solution:
            "Una grilla modular con tres tipos de pieza, paleta limitada y sistema tipográfico flexible que permite adaptar contenidos sin perder coherencia.",
        //gallery: [social, stickers],
    },
    {
        id: "stickers",
        title: "Sistema visual / stickers",
        category: "Ilustración aplicada",
        description:
            "Pack de stickers ilustrados como extensión de la identidad de una marca lúdica.",
        /* cover: stickers, */
        span: "medium",
        context:
            "Extensión gráfica de una identidad existente a través de un pack de stickers que funcionara como merch coleccionable.",
        objective:
            "Crear un sistema de íconos e ilustraciones reconocibles, divertidos y coherentes entre sí.",
        solution:
            "Una serie de ilustraciones realizadas en Procreate, con paleta restringida y trazo consistente para construir una familia visual unificada.",
        //gallery: [stickers, social],
    },
    {
        id: "experimental",
        title: "Branding experimental",
        category: "Exploración visual",
        description:
            "Exploración tipográfica y de composición a partir de motivos botánicos y capas translúcidas.",
        /* cover: experimental, */
        span: "tall",
        context:
            "Ejercicio personal de exploración visual donde la tipografía dialoga con elementos fotográficos y orgánicos.",
        objective:
            "Investigar nuevos lenguajes visuales fuera del encargo, alimentando la práctica creativa personal.",
        solution:
            "Composiciones layered donde las palabras se diluyen en imágenes, jugando con escala, opacidad y respiración del espacio.",
        //gallery: [experimental, arteDeco, editorial],
    },
];