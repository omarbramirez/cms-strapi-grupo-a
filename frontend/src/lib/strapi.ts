

export async function query<T>(url: string): Promise<T> {
    const { STRAPI_HOST, STRAPI_TOKEN } = process.env;
    const res = await fetch(`${STRAPI_HOST}/api/${url}`, {
        headers: {
            Authorization: `Bearer ${STRAPI_TOKEN}`
        }
    });

    if(!res.ok){
        throw new Error(`API call failed: ${res.statusText}`)
    }

    return res.json() as Promise<T>
}