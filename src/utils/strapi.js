const STRAPI_HOST = import.meta.env.VITE_STRAPI_HOST;
const STRAPI_TOKEN = import.meta.env.VITE_STRAPI_TOKEN;

export function query (url) {
    return fetch(`https://supply-strapi.onrender.com/api/${url}`, {
        headers: {
            Authorization: `Bearer 9eb4ebfad0bf3ac66af00f38c8d8a376bd7f17ccd1e5eebdbd7b005cdeb8fdc937c2078e1fc938fcd5c40420c87a7fdf3e0f6020d4c1471b7320d66a9910d31f24a0b8b9fad0a2d194c3f1b50c4d7842ec312c0af170f2bd58950c07c89ff8975810a5f06a6099f82b5f5a211c2490a162bd438a33ee8fd51bc03c1e2f9742dc`,
        }
    }).then(res => res.json())
}