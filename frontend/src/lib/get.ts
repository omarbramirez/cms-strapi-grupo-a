import { query } from "@/lib/strapi";
const { STRAPI_HOST } = process.env;
import {StrapiResponse,StrapiArticle,ArticleData,StrapiEvent,EventData} from "@/lib/types"

const articles = [
  {
    date: "01 SEP",
    description: "En el marco de los 100 años de la publicación de Como el incienso, obra fundamental de la escritora ecuatoriana Aurora Estrada y Ayala...",
    image: "https://i0.wp.com/corporaciongrupoamerica.com/wp-content/uploads/2025/09/Aurora01-edited.jpg?resize=1080%2C608&ssl=1",
    slug: "conversatorio-en-homenaje-a-aurora-estrada-y-ayala",
    title: "Conversatorio en homenaje a Aurora Estrada y Ayala"
  },
  {
    date: "28 JUL",
    description: "El pasado sábado 26 de julio, en el Centro Cultural Carlos Fuentes (Quito), la Corporación Cultural Grupo América...",
    image: "https://i0.wp.com/corporaciongrupoamerica.com/wp-content/uploads/2025/07/ImagenRevolucionJuliana.jpg?resize=1024%2C683&ssl=1",
    slug: "se-realizo-el-conversatorio-por-los-100-anos-de-la-revolucion-juliana",
    title: "Se realizó el conversatorio por los 100 años de la Revolución Juliana"
  },
    {
    date: "24 JUL",
    description: "El escenario del Teatro Variedades se llenó de versos y emociones con el recital 'Con piel de lobos'...",
    image: "https://i0.wp.com/corporaciongrupoamerica.com/wp-content/uploads/2025/07/CesaryValeria.jpg?resize=1024%2C649&ssl=1",
    slug: "valeria-guzmán-y-césar-eduardo-carrión-en-un-mano-a-mano-con-piel-de-lobos",
    title: "Valeria Guzmán y César Eduardo Carrión en un mano a mano «Con piel de lobos»"
  },
    {
    date: "19 JUL",
    description: "La presentación del texto contó con la participación de Julio Pazos Barrera, presidente de nuestro grupo, y Jacqueline Costales...",
    image: "https://i0.wp.com/corporaciongrupoamerica.com/wp-content/uploads/2025/06/ThaliaCedeno.jpg?resize=1024%2C658&ssl=1",
    slug: "thalía-cedeño-presentó-sus-palabras-para-recordar",
    title: "Thalía Cedeño presentó sus «Palabras para recordar»"
  },
    {
    date: "19 JUN",
    description: "Desde el Grupo Cultural América, queremos extender nuestras más sinceras felicitaciones...",
    image: "https://i0.wp.com/corporaciongrupoamerica.com/wp-content/uploads/2025/06/FeriaDelLibro.jpg?resize=1024%2C521&ssl=1",
    slug: "felicitamos-a-santiago-vizcaíno-por-su-impecable-trabajo-en-la-organización-de-la-filq-2025",
    title: "Felicitamos a Santiago Vizcaíno por su impecable trabajo en la organización de la FILQ 2025"
  }
];



const events = [
  {
    categoryName: "PRESENTACIÓN DE LIBRO",
    date: "16 OCT",
    slug: "cartografias-del-silencio-de-rosario-a-lmea",
    time: "07:30",
    title: "Cartografías del silencio de Rosario A’Lmea",
    location: "Centro Cultural Carlos Fuentes | Av. Seis de Diciembre y Colón",
    dispo: "Entrada libre"
  },
  {
    categoryName: "MESA REDONDA",
    date: "20 OCT",
    slug: "literatura-y-memoria-en-el-ecuador-contemporaneo",
    time: "14:00",
    title: "Literatura y memoria en el Ecuador contemporáneo",
    location: "Biblioteca Nacional Eugenio Espejo | Av. 6 de Diciembre y Patria",
    dispo: "Entrada libre"
  },
  {
    categoryName: "CONVERSATORIO",
    date: "29 OCT",
    slug: "revistas-culturales-del-siglo-xx-y-su-legado-en-la-critica-literaria",
    time: "16:45",
    title: "Revistas culturales del siglo XX y su legado en la crítica literaria",
    location: "Casa de la Cultura Ecuatoriana Benjamín Carrión | Av. 6 de Diciembre y Patria",
    dispo: "Entrada libre"
  },
  {
    categoryName: "RECITAL POÉTICO",
    date: "30 OCT",
    slug: "recital-poetico-de-jovenes-autores-nuevas-voces-nuevas-rutas",
    time: "15:15",
    title: "Nuevas voces, nuevas rutas",
    location: "Teatro Sucre | Calle Manabí entre Guayaquil y Flores",
    dispo: "Entrada libre"
  }
];

export async function getArticles(): Promise<ArticleData[]> {
  return articles;
}

// export async function getArticles(): Promise<ArticleData[]> {
//     const res = await query<StrapiResponse<StrapiArticle>>("articles?fields[0]=title&fields[1]=slug&fields[2]=description&fields[3]=createdAt&fields[4]=imageurl");
    

    
//         return res.data.map((article )=> {

//                   const dateObj = new Date(article.attributes.createdAt);

//                   const day = dateObj.toLocaleDateString("es-MX", {
//                 day: "numeric",
//                 timeZone: "America/Mexico_City"
//             });
//             const month = dateObj.toLocaleDateString("es-MX", {
//                 month: "short",
//                 timeZone: "America/Mexico_City"
//             }).toUpperCase();

//             const date = `${day} ${month}`;
//             console.log( { title: article.attributes.title, slug:article.attributes.slug, description:article.attributes.description, image: article.attributes.imageurl ,date })
//             return { title: article.attributes.title, slug:article.attributes.slug, description:article.attributes.description, image: article.attributes.imageurl ,date }
//         })

//     }


export async function getEvents(): Promise<EventData[]> {
return events;
}
// export async function getEvents(): Promise<EventData[]> {
//   const res = await query<StrapiResponse<StrapiEvent>>(
//     "events?fields[0]=datetime&fields[1]=title&fields[2]=slug&populate[category][fields][0]=name");

//   return res.data.map((event) => {
//     const dateObj = new Date(event.attributes.datetime);

//     const day = dateObj.toLocaleDateString("es-MX", {
//       day: "numeric",
//       timeZone: "America/Mexico_City",
//     });
//     const month = dateObj
//       .toLocaleDateString("es-MX", {
//         month: "short",
//         timeZone: "America/Mexico_City",
//       })
//       .toUpperCase();

//     const date = `${day} ${month}`;
//     const time = dateObj.toLocaleTimeString("es-MX", {
//       hour: "2-digit",
//       minute: "2-digit",
//       hour12: false,
//       timeZone: "America/Mexico_City",
//     });

// const categoryName =
//   event.attributes.category?.data?.attributes?.name.toUpperCase() ||
//   "Sin categoría";
//   console.log({
//       date,
//       time,
//       title: event.attributes.title,
//       slug: event.attributes.slug,
//       categoryName,
//     })
//     return {
//       date,
//       time,
//       title: event.attributes.title,
//       slug: event.attributes.slug,
//       categoryName,
//     };
//   });

// }
