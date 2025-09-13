import { query } from "@/lib/strapi";
const { STRAPI_HOST } = process.env;
import {StrapiResponse,StrapiArticle,ArticleData,StrapiEvent,EventData} from "@/lib/types"



export async function getArticles(): Promise<ArticleData[]> {
    const res = await query<StrapiResponse<StrapiArticle>>("articles?fields[0]=title&fields[1]=slug&fields[2]=description&fields[3]=createdAt&populate[cover][fields][0]=url");
    

    
        return res.data.map((article )=> {
            console.log(article)
                  const dateObj = new Date(article.createdAt);

                  const day = dateObj.toLocaleDateString("es-MX", {
                day: "numeric",
                timeZone: "America/Mexico_City"
            });
            const month = dateObj.toLocaleDateString("es-MX", {
                month: "short",
                timeZone: "America/Mexico_City"
            }).toUpperCase();

            const date = `${day} ${month}`;

            const image = `${STRAPI_HOST}${article.cover.url}`
            return { title: article.title, slug:article.slug, description:article.description, image,date }
        })
    }

export async function getEvents(): Promise<EventData[]> {
  const res = await query<StrapiResponse<StrapiEvent>>(
    "events?fields[0]=datetime&fields[1]=title&fields[2]=slug&populate[category][fields][0]=name");

  return res.data.map((event) => {
    const dateObj = new Date(event.datetime);

    const day = dateObj.toLocaleDateString("es-MX", {
      day: "numeric",
      timeZone: "America/Mexico_City",
    });
    const month = dateObj
      .toLocaleDateString("es-MX", {
        month: "short",
        timeZone: "America/Mexico_City",
      })
      .toUpperCase();

    const date = `${day} ${month}`;
    const time = dateObj.toLocaleTimeString("es-MX", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "America/Mexico_City",
    });

    const categoryName = event.category?.name.toUpperCase() || "Sin categoría"

    return {
      date,
      time,
      title: event.title,
      slug: event.slug,
      categoryName,
    };
  });
}
