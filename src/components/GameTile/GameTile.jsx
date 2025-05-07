import style from "./GameTile.module.css"

function GameTile({ name, background_image, price }) {
    return (
        <div className={style["game-tile"]}>
            <a className={style["link"]} href="#">
                <img
                    className={style["image"]}
                    src={background_image}
                    alt={name}
                />
            </a>
            <div className={style["details"]}>
                <span className={style["name"]}>{name}</span>
                <span className={style["price"]}>{price}</span>
            </div>
        </div>
    )
}

export default GameTile
