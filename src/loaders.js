import url from "./url"

export const indexLoader = async () => {
    const response = await fetch(url)
    const birdnests = await response.json()
    return birdnests
}

export const showLoader = async ({params}) => {
    const id = params.id
    const response = await fetch(url + id)
    const birdnest = await response.json()
    return birdnest
}