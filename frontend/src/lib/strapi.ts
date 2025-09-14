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
  } catch (error: unknown) {
  // Ahora debes verificar que el error es del tipo que esperas
  if (error instanceof Error) {
    console.error('Error en la función query:', error.message);
    return { data: [] } as T;
  } else {
    // Si no es una instancia de Error, puedes manejarlo de otra manera
    console.error('Error desconocido:', error);
    return { data: [] } as T;
  }
}
}