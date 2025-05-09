import { getGameDetails } from "../data/api"

export async function loader({ params }) {
    const game = await getGameDetails(params.gameId)

    return { game }
}
