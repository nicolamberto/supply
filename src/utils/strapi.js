const STRAPI_HOST = import.meta.env.VITE_STRAPI_HOST;

export function query (url) {
    return fetch(`${STRAPI_HOST}/api/${url}`, {

    }).then(res => res.json())
}