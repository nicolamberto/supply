import { query } from "./strapi";

export function getProducts({ categoryId }) {
let endpoint = "products?populate=img&populate=product_category";

    if (categoryId) {
        endpoint += `&filters[product_category][slug][$contains]=${categoryId}`;
    }

    return query(endpoint)
        .then((res) => {
            return res.data.map((item) => {
                const { nombre, codigo, img, caracteristicas, material, medidas, capacidad, entrada, diametroboca, product_category } = item;
                const image = img?.url || null;
                const categoria = product_category?.name || 'Sin categoría';

                return {
                    nombre,
                    codigo,
                    image,
                    caracteristicas,
                    categoria,
                    material,
                    medidas,
                    capacidad,
                    entrada,
                    diametroboca,
                };
            });
        });
}
