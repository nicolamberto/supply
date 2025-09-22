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

export function getProductCategories() {
  return query(
    "product-categories?sort=orden:asc&populate=image"
  ).then((res) => {
    return (res?.data || []).map((item) => {
      const { id, name, slug, image } = item || {};
      const imageSources = buildImageSources(image);

      return {
        id,
        name,
        slug,
        img: imageSources?.fallback || null,
        images: imageSources,
      };
    });
  });
}
