import style from "./GameCarousel.module.css"
import {
    CarouselControlLeft,
    CarouselControlRight,
} from "../CarouselControl/CarouselControl"
import { useEffect, useRef, useState } from "react"
import GameTile from "../GameTile/GameTile"

function GameCarousel({ items }) {
    const [containerScrollLeft, setContainerScrollLeft] = useState(0)
    const [maxScrollLeft, setMaxScrollLeft] = useState(0)
    const viewportRef = useRef(null)

    useEffect(() => {
        const container = viewportRef.current

        const onScroll = (e) => {
            setContainerScrollLeft(e.target.scrollLeft)
        }

        // const onWindowResize = () => {
        //     setContainerScrollLeft(container.scrollLeft)
        //     const scrollWidth = container.scrollWidth
        //     const clientWidth = container.clientWidth
        //     setMaxScrollLeft(scrollWidth - clientWidth)
        // }

        container?.addEventListener("scroll", onScroll)
        // window.addEventListener("resize", onWindowResize)

        if (container) {
            setContainerScrollLeft(container.scrollLeft)
            const scrollWidth = container.scrollWidth
            const clientWidth = container.clientWidth

            setMaxScrollLeft(scrollWidth - clientWidth)
        }

        return () => {
            container?.removeEventListener("scroll", onScroll)
            // window.removeEventListener("resize", onWindowResize)
        }
    }, [])

    const onLeftControls = () => {
        const clientWidth = viewportRef.current.clientWidth
        const newScrollValue = Math.max(0, containerScrollLeft - clientWidth)
        viewportRef.current.scroll({
            left: newScrollValue,
            behavior: "auto",
        })
    }

    const onRightControls = () => {
        const scrollWidth = viewportRef.current.scrollWidth
        const clientWidth = viewportRef.current.clientWidth
        const newScrollValue = Math.min(
            scrollWidth - clientWidth,
            containerScrollLeft + clientWidth
        )
        viewportRef.current.scroll({
            left: newScrollValue,
            behavior: "auto",
        })
    }

    return (
        <div className={style["game-carousel"]}>
            <div className={style["viewport"]} ref={viewportRef}>
                <div className={style["container"]}>
                    <ol className={style["list"]}>
                        {items.map((item, mapIndex) => (
                            <li key={mapIndex} className={style["item"]}>
                                <GameTile game={item} />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
            {containerScrollLeft > 0 && (
                <CarouselControlLeft onControlClick={onLeftControls} />
            )}
            {containerScrollLeft < maxScrollLeft && (
                <CarouselControlRight onControlClick={onRightControls} />
            )}
        </div>
    )
}

export default GameCarousel
