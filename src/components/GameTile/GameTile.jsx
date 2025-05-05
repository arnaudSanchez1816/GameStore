import style from "./GameTile.module.css"

function GameTile({ gameData }) {
    const { id, name, background_image } = gameData

    return (
        <a className={style["game-tile"]} href="#">
            <img className={style["image"]} src={background_image} alt={name} />
            <div className={style["caption"]}>
                <p className={style["title"]}>{name}</p>
            </div>
        </a>
    )
}

export default GameTile
