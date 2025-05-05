export function mod(a, b) {
    return (b + (a % b)) % b
}

export function getThumbnailLink(gameData) {
    const background_image = gameData.background_image
    const regex = /^https:\/\/media\.rawg\.io\/media\/(games\/.*)$/
    const matchResult = background_image.match(regex)
    if (!matchResult) {
        console.error("Failed to match thumbnail link regex")
        return background_image
    }

    return `https://media.rawg.io/media/crop/600/400/${matchResult[1]}`
}
