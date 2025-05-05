import { query } from "./strapi";

export function getHomeInfo() {
    return query('home')
    .then((res) => {
        console.log(res.data);
        return res.data
    })
}