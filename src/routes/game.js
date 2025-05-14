import { getGameDetails, getGameScreenshots } from "../data/api"

export async function loader({ request, params }) {
    const gameFetch = getGameDetails(params.gameId, request.signal)
    const screenshotsFetch = getGameScreenshots(params.gameId, request.signal)

    const [game, screenshots] = await Promise.all([gameFetch, screenshotsFetch])

    return { game, screenshots }
}
