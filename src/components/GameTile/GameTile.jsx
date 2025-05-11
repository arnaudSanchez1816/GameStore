import { Link } from "react-router-dom"
import { getThumbnailLink } from "../../utils"
import style from "./GameTile.module.css"
import { Icon } from "@iconify-icon/react/dist/iconify.mjs"

function GameTile({ game }) {
    const { name, background_image, price, id } = game

    const priceString = `${price}€`

    return (
        <div className={style["game-tile"]}>
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
                <span className={style["name"]} aria-label={name} title={name}>
                    {name}
                </span>
                <span
                    className={style["price"]}
                    aria-label={priceString}
                    title={priceString}
                >
                    {priceString}
                </span>
            </div>
        </div>
    )
}

export default GameTile
