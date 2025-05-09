import { useLoaderData } from "react-router-dom"
import HeroCarousel from "../../components/HeroCarousel/HeroCarousel"
import GameHeroCarouselItem from "../../components/HeroCarousel/GameHeroCarouselItem"
import style from "./Game.module.css"

function Game() {
    const { game, screenshots } = useLoaderData()

    return (
        <>
            <div className={style["hero"]}>
                <HeroCarousel options={{ autoScroll: true }}>
                    {screenshots.map((screenshot) => (
                        <GameHeroCarouselItem
                            data={{ ...screenshot, name: game.name }}
                        />
                    ))}
                </HeroCarousel>
            </div>
            <div className={style["details"]}>
                <h1>{game.id}</h1>
            </div>
        </>
    )
}

export default Game
