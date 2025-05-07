import { generatePriceString, generateSeededRandom } from "../utils"
import { subDays, lastDayOfMonth, formatISO } from "date-fns"

const RAWG_API_KEY = "809c6fd8d85848fb80022b89960016cc"
const NSFW_TAG_ID = 312
export async function getLatestReleases(nbResults) {
    try {
        const urlSearchParams = new URLSearchParams()
        urlSearchParams.append("key", RAWG_API_KEY)
        urlSearchParams.append("page_size", 40)
        urlSearchParams.append("ordering", "-rating")

        const currentDate = new Date()
        const dateUpperBound = subDays(currentDate, 120)
        const dateLowerBound = lastDayOfMonth(currentDate)
        urlSearchParams.append(
            "dates",
            [
                formatISO(dateUpperBound, { representation: "date" }),
                formatISO(dateLowerBound, { representation: "date" }),
            ].join(",")
        )

        const response = await fetch(
            `https://api.rawg.io/api/games?${urlSearchParams}`
        )

        if (response.status >= 400) {
            throw new Error(response.statusText)
        }

        const json = await response.json()
        const filteredGames = filterNSFWGames(json.results)
        const results = generateGamePrices(
            filteredGames,
            Math.min(filteredGames.length, nbResults)
        )

        return results
    } catch (error) {
        console.error(error)
    }
}

export async function getPopularGames(nbResults) {
    try {
        const urlSearchParams = new URLSearchParams()
        urlSearchParams.append("key", RAWG_API_KEY)
        urlSearchParams.append("page_size", nbResults)

        const response = await fetch(
            `https://api.rawg.io/api/games/lists/popular?${urlSearchParams}`
        )

        if (response.status >= 400) {
            throw new Error(response.statusText)
        }

        const json = await response.json()
        const filteredGames = filterNSFWGames(json.results)
        const results = generateGamePrices(
            filteredGames,
            Math.min(filteredGames.length, nbResults)
        )

        return results
    } catch (error) {
        console.error(error)
    }
}

export async function getBestOfYear(nbResults) {
    try {
        const urlSearchParams = new URLSearchParams()
        urlSearchParams.append("key", RAWG_API_KEY)
        urlSearchParams.append("page_size", nbResults)
        urlSearchParams.append("ordering", "-added")

        const response = await fetch(
            `https://rawg.io/api/games/lists/greatest?${urlSearchParams}`
        )

        if (response.status >= 400) {
            throw new Error(response.statusText)
        }

        const json = await response.json()
        const filteredGames = filterNSFWGames(json.results)
        const results = generateGamePrices(
            filteredGames,
            Math.min(filteredGames.length, nbResults)
        )

        return results
    } catch (error) {
        console.error(error)
    }
}

function filterNSFWGames(games) {
    const results = []
    for (let i = 0; i < games.length; i++) {
        const game = games[i]
        const tags = game.tags
        if (tags.find((tag) => tag.id === NSFW_TAG_ID)) {
            // Skip nsfw garbage
            continue
        }
        results.push(game)
    }

    return results
}

function generateGamePrices(games, endIndex = null) {
    const results = []
    for (let i = 0; i < (endIndex != null ? endIndex : games.length); i++) {
        const result = games[i]
        results.push({
            ...result,
            price: generateRandomPrice(result.id),
        })
    }
    return results
}

function generateRandomPrice(gameId, minPrice = 5, maxPrice = 70) {
    const randomNb = generateSeededRandom(gameId)
    return generatePriceString(randomNb, minPrice, maxPrice)
}
