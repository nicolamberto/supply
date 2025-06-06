import { query } from "./strapi";

export function getProductCategories() {
  return query("product-categories?fields[0]=name&fields[1]=slug&populate[image][fields][0]=url")
    .then((res) => {
      return res.data.map((item) => {
        const { name, slug, image } = item;
        const img = image?.url
          ? `http://localhost:1337${image.url}`
          : null;

        return {
          name,
          slug,
          img,
        };
      });
    });
}
