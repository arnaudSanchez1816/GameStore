import { Link } from "react-router-dom"
import { getThumbnailLink } from "../../utils"
import style from "./GameTile.module.css"
import { Icon } from "@iconify-icon/react/dist/iconify.mjs"
import { NSFW_TAG_ID } from "../../data/api"
import { useState } from "react"
import clsx from "clsx"

function GameTile({ game }) {
    const { name, background_image, price, id, tags } = game
    const isNsfw = tags.filter((tag) => tag.id === NSFW_TAG_ID).length > 0
    const [hideNsfw, setHideNsfw] = useState(isNsfw)

    const priceString = `${price}€`

    return (
        <div className={style["game-tile"]}>
            <div
                className={clsx(
                    style["content-wrapper"],
                    hideNsfw && style["hide"]
                )}
                aria-hidden={hideNsfw}
            >
                <Link className={style["link"]} to={`/game/${id}`}>
                    {background_image ? (
                        <img
                            className={style["image"]}
                            src={getThumbnailLink(background_image)}
                            alt={name}
                        />
                    ) : (
                        <div className={style["no-image"]}>
                            <Icon
                                className={style["no-image-icon"]}
                                icon="mdi:image-off-outline"
                            />
                        </div>
                    )}
                </Link>
                <div className={style["details"]}>
                    <span
                        className={style["name"]}
                        aria-label="Name"
                        title={name}
                    >
                        {name}
                    </span>
                    <span
                        className={style["price"]}
                        aria-label="Price"
                        title={priceString}
                    >
                        {priceString}
                    </span>
                </div>
            </div>
            <div
                className={clsx(
                    style["nsfw-wrapper"],
                    style["content-wrapper"],
                    !hideNsfw && style["hide"]
                )}
                aria-hidden={!hideNsfw}
            >
                <button
                    type="button"
                    className={style["show-nsfw-btn"]}
                    onClick={() => setHideNsfw(false)}
                    title="Show NSFW game"
                >
                    <Icon
                        className={style["nsfw-icon"]}
                        icon="tabler:rating-18-plus"
                    ></Icon>
                </button>
            </div>
        </div>
    )
}

export default GameTile
