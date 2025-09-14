const { STRAPI_HOST, STRAPI_TOKEN } = process.env;

export async function query<T>(url: string): Promise<T> {
  // Aseguramos que las variables de entorno existen
  if (!STRAPI_HOST || !STRAPI_TOKEN) {
    console.error('Error: Las variables de entorno para Strapi no están definidas.');
    return { data: [] } as T; // Devuelve un objeto vacío con la estructura esperada
  }

  try {
    const res = await fetch(`${STRAPI_HOST}/api/${url}`, {
      headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`
      },
      // Agrega un timeout para evitar que la llamada se cuelgue por mucho tiempo
      // aunque el servidor de Strapi no responda.
      signal: AbortSignal.timeout(5000)
    });

    if (!res.ok) {
      console.error(`API call failed with status: ${res.status} - ${res.statusText}`);
      return { data: [] } as T; // Devuelve un objeto vacío en caso de respuesta fallida
    }

    return res.json() as Promise<T>;
  } catch (error: any) {
    // Si la llamada falla (por URL inválida, timeout, etc.)
    if (error.name === 'AbortError') {
      console.error('API call timed out.');
    } else {
      console.error('Error en la función query:', error.message);
    }
    return { data: [] } as T; // Devuelve un objeto vacío
  }
}