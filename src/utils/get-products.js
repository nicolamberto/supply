import { query } from "./strapi";

function buildImageSources(asset) {
    if (!asset) return null;

    const formats = asset.formats || {};

    const sources = {
        original: asset.url || null,
        large: formats.large?.url || null,
        medium: formats.medium?.url || null,
        small: formats.small?.url || null,
        thumbnail: formats.thumbnail?.url || null,
    };

    const fallback = sources.medium || sources.small || sources.large || sources.original || null;

    return {
        ...sources,
        fallback,
    };
}

export function getProducts({ categoryId, page = 1, pageSize = 20 }) {
    let endpoint = `products?populate=img&populate=product_category&populate=variantes&pagination[page]=${page}&pagination[pageSize]=${pageSize}`;

    if (categoryId) {
        endpoint += `&filters[product_category][slug][$contains]=${categoryId}`;
    }

    return query(endpoint)
        .then((res) => {
            const items = Array.isArray(res?.data) ? res.data : [];

            return {
                data: items.map((item) => {
                    const { id, nombre, codigo, img, caracteristicas, material, medidas, capacidad, entrada, diametroboca, product_category, variantes } = item || {};

                    const imageSources = buildImageSources(img);
                    const variantSources = buildImageSources(variantes);
                    const categoria = product_category?.name || "Sin categoría";

                    return {
                        id,
                        nombre,
                        codigo,
                        image: imageSources?.fallback || null,
                        images: imageSources,
                        caracteristicas,
                        categoria,
                        material,
                        medidas,
                        capacidad,
                        entrada,
                        diametroboca,
                        variant: variantSources?.fallback || variantes?.url || null,
                        variantImages: variantSources,
                    };
                }),
                pagination: res?.meta?.pagination,
            };
        });
}
