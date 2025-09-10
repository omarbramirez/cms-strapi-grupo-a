import { query } from "./strapi";
const {STRAPI_HOST} = process.env;

export function getHomeInfo() {
    return query("home?populate=cover").then(res => {
        const {title, description, cover} = res.data;
        const image = `${STRAPI_HOST}${cover.url}`
        return {title, description, image}
    }
    )
}

export function getArticles (){
    return query("articles?fields[0]=title&fields[1]=slug&fields[2]=description&populate[cover][fields][0]=url").then(res =>{
        console.log("THIS IS WORKING")
        console.log(res.data)
        return res.data.map(article=>{
            const {name, slug, description, cover: rawImage} = article
            const image = `${STRAPI_HOST}${rawImage.url}`
            return {name, slug, description, image}
        })
    }
    )
}

export function getEvents (){
    return query("events?fields[0]=datetime&fields[1]=title&fields[2]=slug&populate[category][fields][0]=name").then(res =>{
        return res.data.map(event =>{
            const {datetime, title, slug, category} = event
            const categoryName = category.name.toUpperCase()
            console.log(datetime, title, slug, categoryName)
            return {datetime, title, slug, categoryName}
        })
    })
}