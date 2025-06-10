import { query } from "./strapi";

export function getProducts({ categoryId }) {
    let endpoint = "products?populate=img";

    if (categoryId) {
        endpoint += `&filters[product_category][slug][$contains]=${categoryId}`;
    }

    return query(endpoint)
        .then((res) => {
            return res.data.map((item) => {
                const { nombre, codigo, img, caracteristicas } = item;
                const image = img?.url || null;

                return {
                    nombre,
                    codigo,
                    image,
                    caracteristicas,
                };
            });
        });
}
