import style from "./GlobalSpinner.module.css"
import logo from "../../assets/gameStore_white_noBg.png"

function GlobalSpinner() {
    return (
        <div className={style["container"]}>
            <img className={style["logo"]} src={logo} alt="Game Store logo" />
            <span className={style["loader"]}></span>
        </div>
    )
}

export default GlobalSpinner
