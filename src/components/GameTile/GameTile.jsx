import { Link } from "react-router-dom"
import { getThumbnailLink } from "../../utils"
import style from "./GameTile.module.css"

function GameTile({ game }) {
    const { name, background_image, price, id } = game

    return (
        <div className={style["game-tile"]}>
            <Link className={style["link"]} to={`/game/${id}`}>
                <img
                    className={style["image"]}
                    src={getThumbnailLink(background_image)}
                    alt={name}
                />
            </Link>
            <div className={style["details"]}>
                <span className={style["name"]} aria-label={name} title={name}>
                    {name}
                </span>
                <span
                    className={style["price"]}
                    aria-label={price}
                    title={price}
                >
                    {price}
                </span>
            </div>
        </div>
    )
}

export default GameTile
