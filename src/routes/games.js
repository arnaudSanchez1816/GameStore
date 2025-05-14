import { queryForGames } from "../data/api"
import { genres as genresDB } from "../data/genres.js"

export async function loader({ request }) {
    const genres = genresDB
    const url = new URL(request.url)
    const searchParams = Object.fromEntries(url.searchParams)

    const gamesFetch = queryForGames(
        {
            ...searchParams,
            name: searchParams.q,
            genres: searchParams.genres?.split(","),
            tags: searchParams.tags?.split(","),
        },
        request.signal
    )
    return { genres, gamesFetch }
}
