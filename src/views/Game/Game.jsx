import { Link, useLoaderData } from "react-router-dom"
import HeroCarousel from "../../components/HeroCarousel/HeroCarousel"
import GameHeroCarouselItem from "../../components/HeroCarousel/GameHeroCarouselItem"
import style from "./Game.module.css"
import { format } from "date-fns"
import { Icon } from "@iconify-icon/react/dist/iconify.mjs"
import { getThumbnailLink } from "../../utils"

function Game() {
    const { game, screenshots } = useLoaderData()

    const releaseDate = new Date(game.released)
    const website = game.website
    const genres = game.genres
    const tags = game.tags
    const presentationImage = getThumbnailLink(game.background_image)
    const pageArtImg = game.background_image_additional

    const developers = game.developers.map((dev, index) => {
        return (
            <>
                {index > 0 && <span className={style["comma"]}>, </span>}
                <span className="developer-link">{dev.name}</span>
            </>
        )
    })

    const publishers = game.publishers.map((pub, index) => {
        return (
            <>
                {index > 0 && <span className={style["comma"]}>, </span>}
                <span className="publisher-link">{pub.name}</span>
            </>
        )
    })

    const priceString = `${game.price}€`

    return (
        <div className={style["game"]}>
            <div className={style["game-content"]}>
                <div className={style["presentation"]}>
                    <div className={style["presentation-left"]}>
                        <img
                            className={style["presentation-image"]}
                            src={presentationImage}
                            alt={game.name}
                        />
                    </div>
                    <div className={style["presentation-right"]}>
                        <h1 className={style["title"]}>{game.name}</h1>
                        <div className={style["pricing"]}>
                            <p className={style["price"]}>{priceString}</p>
                            <button
                                className={style["add-to-cart"]}
                                type="button"
                            >
                                <Icon
                                    className={style["cart-icon"]}
                                    icon="material-symbols:shopping-cart-outline"
                                />
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
                <div className={style["details"]}>
                    <div className={style["details-left"]}>
                        <div>
                            <h2 className={style["section-heading"]}>
                                Description
                            </h2>
                            <p className={style["description"]}>
                                {game.description_raw}
                            </p>
                        </div>
                        <div>
                            <h3 className={style["section-heading"]}>Genres</h3>
                            <div className={style["genres"]}>
                                {genres.length > 0 ? (
                                    genres.map((genre) => (
                                        <Link
                                            className={style["genre"]}
                                            to={`/games?genres=${genre.slug}`}
                                            key={genre.id}
                                        >
                                            {genre.name}
                                        </Link>
                                    ))
                                ) : (
                                    <span className={style["no-genres"]}>
                                        No genres specified
                                    </span>
                                )}
                            </div>
                        </div>
                        <div>
                            <h3 className={style["section-heading"]}>Tags</h3>
                            <div className={style["tags"]}>
                                {tags.length > 0 ? (
                                    tags.map((tag) => (
                                        <Link
                                            to={`/games?tags=${tag.slug}`}
                                            className={style["tag"]}
                                            key={tag.id}
                                        >
                                            {tag.name}
                                        </Link>
                                    ))
                                ) : (
                                    <span className={style["no-tags"]}>
                                        No tags yet !
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className={style["details-right"]}>
                        <div className={style["details-item"]}>
                            <span className={style["label"]}>
                                <Icon icon="mdi:building" />
                                Developer:
                            </span>
                            <div>{developers}</div>
                        </div>
                        <div className={style["details-item"]}>
                            <span className={style["label"]}>
                                <Icon icon="mdi:building" />
                                Publisher:
                            </span>
                            <div>{publishers}</div>
                        </div>
                        <div className={style["details-item"]}>
                            <span className={style["label"]}>
                                <Icon icon="mdi:calendar" />
                                Release date:
                            </span>
                            <span>{format(releaseDate, "d MMMM y")}</span>
                        </div>
                        {website && (
                            <div className={style["details-item"]}>
                                <span className={style["label"]}>
                                    <Icon icon="mdi:internet" />
                                    Website:
                                </span>
                                <a
                                    href={website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Link
                                </a>
                            </div>
                        )}
                    </div>
                </div>
                <div className={style["hero"]}>
                    <h3 className={style["section-heading"]}>Visuals</h3>
                    <HeroCarousel options={{ autoScroll: true }}>
                        {screenshots.map((screenshot) => (
                            <GameHeroCarouselItem
                                data={{ ...screenshot, name: game.name }}
                            />
                        ))}
                    </HeroCarousel>
                </div>
            </div>
            <div className={style["page-art"]}>
                <div
                    className={style["page-art-image"]}
                    style={{
                        backgroundImage: `linear-gradient(to bottom, rgba(18,18,18,0), rgb(40,40,40)),linear-gradient(to bottom, rgba(40,40,40,0.8), rgba(40,40,40,0.5)),url('${pageArtImg}')`,
                    }}
                ></div>
            </div>
        </div>
    )
}

export default Game
