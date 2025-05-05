import { query } from "./strapi";

export function getProducts({ categoryId }) {

    // Base endpoint
    let endpoint = "products?populate=image";

    // Agregar filtro si hay categoría
    if (categoryId) {
        endpoint += `&filters[product_category][slug][$contains]=${categoryId}`;
    }

    return query(endpoint)
        .then((res) => {
            return res.data.map((item) => {
                const { name, slug, image, description } = item;
                const img = image?.url
                    ? `http://localhost:1337${image.url}`
                    : null;

                return {
                    name,
                    slug,
                    img,
                    description
                };
            });
        });
}
