import { getGameDetails, getGameScreenshots } from "../data/api"

export async function loader({ params }) {
    const game = await getGameDetails(params.gameId)
    const screenshots = await getGameScreenshots(params.gameId)

    return { game, screenshots }
}
