export function parseCaracteristicas(textoPlano) {
    return textoPlano
        .split("-")
        .map(str => str.trim())
        .filter(str => str.length > 0);
}

/**
 * Devuelve { firstTitle, secondTitle } para un nombre de categoría.
 * @param {string} categoryTitle
 * @returns {{ firstTitle: string, secondTitle: string }}
 */
export function splitCategoryTitle(categoryTitle) {
    const titleArray = categoryTitle.split(' ');
    let firstTitle = '', secondTitle = '';

    if (titleArray.length === 3) {
        const [first, second, third] = titleArray;
        if (first.length > 11 || second.length > 3) {
            firstTitle = first;
            secondTitle = `${second} ${third}`;
        } else {
            firstTitle = `${first} ${second}`;
            secondTitle = third;
        }
    } else if (titleArray.length === 2) {
        [firstTitle, secondTitle] = titleArray;
    } else {
        firstTitle = titleArray.slice(0, 2).join(' ');
        secondTitle = titleArray.slice(2).join(' ');
    }
    return { firstTitle, secondTitle };
}