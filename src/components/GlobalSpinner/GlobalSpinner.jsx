import style from "./GlobalSpinner.module.css"

function GlobalSpinner() {
    return (
        <div className={style["spinner-container"]}>
            <span className={style["loader"]}></span>
        </div>
    )
}

export default GlobalSpinner
