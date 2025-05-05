import { gamesDB, testGames } from "../data/games"

export function loader() {
    return {
        highlightedGames: gamesDB,
        popularGames: testGames,
        latestRelease: testGames,
    }
}
