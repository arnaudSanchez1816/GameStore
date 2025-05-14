import { getBestOfYear, getLatestReleases, getPopularGames } from "../data/api"

export async function loader({ request }) {
    const [latestReleases, popularGames, bestOfYear] = await Promise.all([
        getLatestReleases(12, request.signal),
        getPopularGames(24, request.signal),
        getBestOfYear(10, request.signal),
    ])

    return {
        highlightedGames: bestOfYear,
        popularGames: popularGames,
        latestRelease: latestReleases,
    }
}
