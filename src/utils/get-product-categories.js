import { query } from "./strapi";

export function getProductCategories() {
  return query(
    "product-categories?sort=orden:asc&fields[0]=name&fields[1]=slug&populate[image][fields][0]=url"
  ).then((res) => {
    return res.data.map((item) => {
      const { name, slug, image } = item;
      const img = image?.url ? `${image.url}` : null;

      return {
        name,
        slug,
        img,
      };
    });
  });
}
