import { getBestOfYear, getLatestReleases, getPopularGames } from "../data/api"

export async function loader() {
    const [latestReleases, popularGames, bestOfYear] = await Promise.all([
        getLatestReleases(12),
        getPopularGames(24),
        getBestOfYear(10),
    ])

    return {
        highlightedGames: bestOfYear,
        popularGames: popularGames,
        latestRelease: latestReleases,
    }
}
