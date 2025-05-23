import SeedRandom from "seedrandom"

export function mod(a, b) {
    return (b + (a % b)) % b
}

export function clamp(a, min = 0, max = 1) {
    return Math.min(max, Math.max(min, a))
}

export function lerp(a, b, t) {
    return a * (1 - t) + b * t
}

export function getThumbnailLink(backgroundImageLink) {
    const regex = /^https:\/\/media\.rawg\.io\/media\/(games\/.*)$/
    const matchResult = backgroundImageLink.match(regex)
    if (!matchResult) {
        return backgroundImageLink
    }

    return `https://media.rawg.io/media/crop/600/400/${matchResult[1]}`
}

export function generateSeededRandom(seed) {
    const seededGenerator = new SeedRandom(seed)
    return seededGenerator.quick()
}

export function generateRandomPrice(gameId, minPrice = 5, maxPrice = 70) {
    const randomNb = generateSeededRandom(gameId)
    return Number(lerp(minPrice, maxPrice, randomNb).toFixed(2))
}
