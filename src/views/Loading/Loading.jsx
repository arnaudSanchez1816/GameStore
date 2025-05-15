import style from "./Loading.module.css"
import logo from "../../assets/gameStore_white_noBg.png"

function Loading() {
    return (
        <div className={style["container"]}>
            <img className={style["logo"]} src={logo} alt="Game Store logo" />
            <span className={style["loader"]}></span>
        </div>
    )
}

export default Loading
