import { query } from "./strapi";
const { STRAPI_HOST } = process.env;

export function getHomeInfo() {
    return query("home?populate=cover").then(res => {
        const { title, description, cover } = res.data;
        const image = `${STRAPI_HOST}${cover.url}`
        return { title, description, image }
    }
    )
}



export function getArticles() {
    return query("articles?fields[0]=title&fields[1]=slug&fields[2]=description&fields[3]=createdAt&populate[cover][fields][0]=url").then(res => {
        return res.data.map(article => {
            const { title, slug, description, cover: rawImage, createdAt} = article



                  const dateObj = new Date(createdAt);

                  const day = dateObj.toLocaleDateString("es-MX", {
                day: "numeric",
                timeZone: "America/Mexico_City"
            });
            const month = dateObj.toLocaleDateString("es-MX", {
                month: "short",
                timeZone: "America/Mexico_City"
            }).toUpperCase();

            const date = `${day} ${month}`;

            const image = `${STRAPI_HOST}${rawImage.url}`
            return { title, slug, description, image,date }
        })
    }
    )
}

export function getEvents() {
    return query("events?fields[0]=datetime&fields[1]=title&fields[2]=slug&populate[category][fields][0]=name").then(res => {
        return res.data.map(event => {
            const { datetime, title, slug, category } = event

            const dateObj = new Date(datetime);

            const day = dateObj.toLocaleDateString("es-MX", {
                day: "numeric",
                timeZone: "America/Mexico_City"
            });
            const month = dateObj.toLocaleDateString("es-MX", {
                month: "short",
                timeZone: "America/Mexico_City"
            }).toUpperCase();

            const date = `${day} ${month}`;

            const time = dateObj.toLocaleTimeString("es-MX", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
                timeZone: "America/Mexico_City"
            });

            const categoryName = category.name.toUpperCase();

            return { date, time, title, slug, categoryName };
        })
    })
}