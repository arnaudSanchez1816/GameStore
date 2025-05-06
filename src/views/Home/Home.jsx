import { useLoaderData } from "react-router-dom"
import GameCarousel from "../../components/GameCarousel/GameCarousel"
import GameTile from "../../components/GameTile/GameTile"
import HeroCarousel from "../../components/HeroCarousel/HeroCarousel"
import style from "./Home.module.css"
import { Icon } from "@iconify-icon/react/dist/iconify.mjs"

function Home() {
    const { popularGames, latestRelease, highlightedGames } = useLoaderData()

    return (
        <>
            <div className={style["section"]}>
                <HeroCarousel
                    items={highlightedGames}
                    options={{ autoScroll: true }}
                />
            </div>
            <div className={style["section"]}>
                <h2>Last releases</h2>
                <GameCarousel items={latestRelease} />
            </div>
            <div className={style["section"]}>
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
            <div className={style["popular-games"]}>
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
            <div className={style["newsletter"]}>
                <div className={style["section"]}>
                    <Icon
                        className={style["newsletter-icon"]}
                        icon="bi:send-fill"
                    />
                    <div className={style["newsletter-text"]}>
                        <p>Don't miss any offers or promotions !</p>
                        <p>Subscribe to our newsletter now !</p>
                    </div>
                    <button className={style["newsletter-sub"]} type="button">
                        Subscribe
                    </button>
                </div>
            </div>
        </>
    )
}

export default Home
