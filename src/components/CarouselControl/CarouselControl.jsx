import { Icon } from "@iconify-icon/react/dist/iconify.mjs"
import style from "./CarouselControl.module.css"

export function CarouselControlLeft({ onControlClick }) {
    return (
        <div className={style["controls-left"]}>
            <button
                className={style["controls-btn"]}
                type="button"
                onClick={onControlClick}
            >
                <Icon icon="mdi:chevron-left" />
            </button>
        </div>
    )
}

export function CarouselControlRight({ onControlClick }) {
    return (
        <div className={style["controls-right"]}>
            <button
                className={style["controls-btn"]}
                type="button"
                onClick={onControlClick}
            >
                <Icon icon="mdi:chevron-right" />
            </button>
        </div>
    )
}
