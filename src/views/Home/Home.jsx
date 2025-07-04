import { Link, useLoaderData } from "react-router-dom"
import GameCarousel from "../../components/GameCarousel/GameCarousel"
import GameTile from "../../components/GameTile/GameTile"
import HeroCarousel from "../../components/HeroCarousel/HeroCarousel"
import style from "./Home.module.css"
import { Icon } from "@iconify-icon/react/dist/iconify.mjs"
import { useMemo } from "react"
import {
    ACTION_GENRE,
    ADVENTURE_GENRE,
    CASUAL_GENRE,
    FIGHTING_GENRE,
    genres,
    INDIE_GENRE,
    RACING_GENRE,
    RPG_GENRE,
    SHOOTER_GENRE,
    SPORTS_GENRE,
    STRATEGY_GENRE,
} from "../../data/genres"
import clsx from "clsx"
import HomeHeroCarouselItem from "../../components/HeroCarousel/HomeHeroCarouselItem"

function GenreTile({ genre }) {
    const { id, icon, name, slug } = genre
    const searchParams = new URLSearchParams()
    searchParams.set("genres", slug)

    return (
        <Link
            to={`/games?${searchParams}`}
            className={clsx("button", style["genre-link"])}
            key={id}
        >
            <span className={style["genre-name"]}>{name}</span>
            <Icon className={style["genre-icon"]} icon={icon} />
        </Link>
    )
}

function Home() {
    const { popularGames, latestRelease, highlightedGames } = useLoaderData()

    const genresList = useMemo(() => {
        const listedGenresId = [
            ACTION_GENRE,
            RPG_GENRE,
            FIGHTING_GENRE,
            INDIE_GENRE,
            SHOOTER_GENRE,
            ADVENTURE_GENRE,
            STRATEGY_GENRE,
            CASUAL_GENRE,
            RACING_GENRE,
            SPORTS_GENRE,
        ]
        return genres.filter((genre) => listedGenresId.includes(genre.id))
    }, [])

    return (
        <>
            <div className={style["hero"]}>
                <HeroCarousel options={{ autoScroll: true }}>
                    {highlightedGames.map((game) => (
                        <HomeHeroCarouselItem data={game} />
                    ))}
                </HeroCarousel>
            </div>
            <div className={style["section"]}>
                <h2>Latest releases</h2>
                <GameCarousel items={latestRelease} />
            </div>
            <div className={style["genres"]}>
                <h2>Genres</h2>
                <div className={style["genres-container"]}>
                    {genresList.map((genre) => (
                        <GenreTile genre={genre} key={genre.id} />
                    ))}
                </div>
            </div>
            <div className={style["popular-games"]}>
                <h2>Popular games</h2>
                <div className={style["popular-games-grid"]}>
                    {popularGames.map((item, index) => (
                        <div
                            className={style["popular-game-item"]}
                            key={item.id}
                        >
                            <GameTile key={index} game={item} />
                        </div>
                    ))}
                </div>
                <Link
                    className={clsx("button", style["all-games-link"])}
                    to="/games/"
                >
                    Display all games
                </Link>
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
