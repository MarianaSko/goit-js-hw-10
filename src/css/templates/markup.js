export function createMarkupForSelect({ id, name }) {
    return `<option value='${id}'>${name}</option>`
}

export function createMarkupforBreedInfo({ name, description, temperament }) {
    return `<div class='wrapper'><h1 class='breed-name'>${name}</h1>
    <p class='breed-description'>${description}</p>
    <p class='breed-temperament'><span>Temperament: </span>${temperament}</p></div>`

}

export function createMarkupForCatImg({ url }) {
    return `<img class='cat-img' src='${url}' height='300'></img>`
}