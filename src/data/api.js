import { generateRandomPrice } from "../utils"
import { subDays, lastDayOfMonth, formatISO } from "date-fns"

const RAWG_API_KEY = "809c6fd8d85848fb80022b89960016cc"
const NSFW_TAG_ID = 312

export const ORDERING_METHODS = {
    rating_desc: { value: "rating_desc", name: "Rating: Best" },
    rating_asc: { value: "rating_asc", name: "Rating: Worst" },
    nameAsc: { value: "name_asc", name: "Name: A-Z" },
    nameDesc: { value: "name_desc", name: "Name: Z-A" },
}

export const DEFAULT_ORDERING_METHOD = ORDERING_METHODS.rating_desc

const API_ORDERING_PARAMS = [
    {
        name: ORDERING_METHODS.nameAsc.value,
        apiName: "name",
    },
    {
        name: ORDERING_METHODS.nameDesc.value,
        apiName: "-name",
    },
    {
        name: ORDERING_METHODS.rating_asc.value,
        apiName: "rating",
    },
    {
        name: ORDERING_METHODS.rating_desc.value,
        apiName: "-rating",
    },
]

export async function getLatestReleases(nbResults, signal = null) {
    try {
        const urlSearchParams = new URLSearchParams()
        urlSearchParams.append("key", RAWG_API_KEY)
        urlSearchParams.append("page_size", 50)
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
            `https://api.rawg.io/api/games?${urlSearchParams}`,
            { signal }
        )

        if (response.status >= 400) {
            throw new Error(response.statusText)
        }

        const json = await response.json()
        return getRequestedGames(json, nbResults)
    } catch (error) {
        console.error(error)
    }
}

export async function getPopularGames(nbResults, signal = null) {
    try {
        const urlSearchParams = new URLSearchParams()
        urlSearchParams.append("key", RAWG_API_KEY)
        urlSearchParams.append("page_size", 50)

        const response = await fetch(
            `https://api.rawg.io/api/games/lists/popular?${urlSearchParams}`,
            { signal }
        )

        if (response.status >= 400) {
            throw new Error(response.statusText)
        }

        const json = await response.json()
        return getRequestedGames(json, nbResults)
    } catch (error) {
        console.error(error)
    }
}

export async function getBestOfYear(nbResults, signal = null) {
    try {
        const urlSearchParams = new URLSearchParams()
        urlSearchParams.append("key", RAWG_API_KEY)
        urlSearchParams.append("page_size", 50)
        urlSearchParams.append("ordering", "-added")

        const response = await fetch(
            `https://rawg.io/api/games/lists/greatest?${urlSearchParams}`,
            { signal }
        )

        if (response.status >= 400) {
            throw new Error(response.statusText)
        }

        const json = await response.json()
        return getRequestedGames(json, nbResults)
    } catch (error) {
        console.error(error)
    }
}

export async function getGameDetails(gameId, signal = null) {
    try {
        const params = new URLSearchParams()
        params.append("key", RAWG_API_KEY)

        const response = await fetch(
            `https://api.rawg.io/api/games/${gameId}?${params}`,
            { signal }
        )

        if (response.status >= 400) {
            throw new Error(response.statusText)
        }

        const gameJson = await response.json()
        return addGamePriceToGame(gameJson)
    } catch (error) {
        console.error(error)
    }
}

export async function getGameScreenshots(gameId, signal = null) {
    try {
        const params = new URLSearchParams()
        params.append("key", RAWG_API_KEY)
        params.append("page_size", 8)

        const response = await fetch(
            `https://api.rawg.io/api/games/${gameId}/screenshots?${params}`,
            { signal }
        )

        if (response.status >= 400) {
            throw new Error(response.statusText)
        }

        const screenshotsJson = await response.json()
        return screenshotsJson.results
    } catch (error) {
        console.error(error)
    }
}

export async function queryForGames(
    {
        name,
        genres = [],
        tags = [],
        minPrice = -1,
        maxPrice = -1,
        sortBy = DEFAULT_ORDERING_METHOD.value,
        excludeDlc = true,
        page = 1,
    },
    signal = null
) {
    try {
        const params = new URLSearchParams()
        params.append("key", RAWG_API_KEY)
        if (name) {
            params.append("search", name)
        }

        if (genres && genres.length > 0) {
            params.append("genres", genres.join(","))
        }
        if (tags && tags.length > 0) {
            params.append("tags", tags.join(","))
        }
        const apiOrderingIndex = API_ORDERING_PARAMS.findIndex(
            (param) => param.name === sortBy
        )
        if (apiOrderingIndex >= 0 && !name) {
            // API search is terrible, ordering returns irrelevant results when looking for a name
            params.append(
                "ordering",
                API_ORDERING_PARAMS[apiOrderingIndex].apiName
            )
        }

        if (excludeDlc) {
            params.append("exclude_additions", excludeDlc)
        }

        if (page > 1) {
            params.append("page", page)
        }

        const response = await fetch(
            `https://api.rawg.io/api/games?${params}`,
            { signal }
        )

        if (response.status >= 400) {
            throw new Error(response.statusText)
        }

        const responseJson = await response.json()
        const gamesWithPrices = generateGamePrices(responseJson.results)

        let count = responseJson.count
        let filteredGames = gamesWithPrices
        // Filter prices
        if (minPrice >= 0 || maxPrice >= 0) {
            filteredGames = gamesWithPrices.filter((game) => {
                console.log(game)

                if (minPrice >= 0 && game.price < minPrice) {
                    return false
                }
                if (maxPrice >= 0 && game.price > maxPrice) {
                    return false
                }

                return true
            })
            count = `${filteredGames.length}${responseJson.next && "+"}`
        }

        return { ...responseJson, results: filteredGames, count }
    } catch (error) {
        console.error(error)
    }
}

function getRequestedGames(json, nbGames) {
    const filteredGames = filterNSFWGames(json.results)
    const requestedGames = filteredGames.slice(
        0,
        Math.min(nbGames, filteredGames.length)
    )
    const results = generateGamePrices(requestedGames)

    return results
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

function generateGamePrices(games) {
    const results = []
    for (let i = 0; i < games.length; i++) {
        const game = games[i]
        results.push(addGamePriceToGame(game))
    }
    return results
}

function addGamePriceToGame(game) {
    return { ...game, price: generateRandomPrice(game.id) }
}
