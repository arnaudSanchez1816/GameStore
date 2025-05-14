import { queryForGames } from "../data/api"
import { gamesDB } from "../data/games.js"
import { genres as genresDB } from "../data/genres.js"
import { generateRandomPrice } from "../utils.js"

async function fakeFetchGames() {
    const wait = new Promise((res) => {
        setTimeout(res, 5000)
    })
    await wait

    return {
        count: 0,
        next: null,
        previous: null,
        results: gamesDB.map((game) => {
            return { ...game, price: generateRandomPrice(game.id) }
        }),
    }
}

export async function loader({ request }) {
    // const gamesFetch = fakeFetchGames()

    const genres = genresDB
    const url = new URL(request.url)
    const searchParams = Object.fromEntries(url.searchParams)

    const gamesFetch = queryForGames({
        ...searchParams,
        name: searchParams.q,
        genres: searchParams.genres?.split(","),
        tags: searchParams.tags?.split(","),
    })
    /*
    const games = {
        count: gamesDB.length,
        next: null,
        previous: null,
        results: gamesDB.map((game) => {
            return { ...game, price: generateRandomPrice(game.id) }
        }),
    }
        */
    return { genres, gamesFetch }
}
