import { useLoaderData } from "react-router-dom"
import style from "./Game.module.css"

function Game() {
    const { game } = useLoaderData()

    return (
        <div>
            Hello world
            <h2>{game.id}</h2>
        </div>
    )
}

export default Game
