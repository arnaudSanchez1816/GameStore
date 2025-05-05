import { useLoaderData } from "react-router-dom"
import GameCarousel from "../../components/GameCarousel/GameCarousel"
import GameTile from "../../components/GameTile/GameTile"
import HeroCarousel from "../../components/HeroCarousel/HeroCarousel"
import style from "./Home.module.css"

function Home() {
    const { popularGames, latestRelease, highlightedGames } = useLoaderData()

    return (
        <div className={style["home"]}>
            <HeroCarousel
                items={highlightedGames}
                options={{ autoScroll: true }}
            />
            <div>
                <h2>Last releases</h2>
                <GameCarousel items={latestRelease} />
            </div>
            <div>
                <h2>Genres</h2>
                <div>
                    <div>
                        <button type="button">Action</button>
                    </div>
                    <div>
                        <button type="button">RPG</button>
                    </div>
                    <div>
                        <button type="button">Shooter</button>
                    </div>
                    <div>
                        <button type="button">Strategy</button>
                    </div>
                    <div>
                        <button type="button">Adventure</button>
                    </div>
                </div>
            </div>
            <div>
                <h2>Popular games</h2>
                <div className={style["popular-games-grid"]}>
                    {popularGames.map((item, index) => (
                        <div
                            key={index}
                            className={style["popular-games-item"]}
                        >
                            <GameTile gameData={item} />
                        </div>
                    ))}
                </div>
                <button type="button">Display all games</button>
            </div>
        </div>
    )
}

export default Home
