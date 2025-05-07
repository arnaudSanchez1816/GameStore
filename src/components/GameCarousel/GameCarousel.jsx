import style from "./GameCarousel.module.css"
import {
    CarouselControlLeft,
    CarouselControlRight,
} from "../CarouselControl/CarouselControl"
import { useEffect, useRef, useState } from "react"
import GameTile from "../GameTile/GameTile"
import { getThumbnailLink } from "../../utils"

function GameCarousel({ items }) {
    const [containerScrollLeft, setContainerScrollLeft] = useState(0)
    const [maxScrollLeft, setMaxScrollLeft] = useState(0)
    const containerRef = useRef(null)

    useEffect(() => {
        const container = containerRef.current

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
        const clientWidth = containerRef.current.clientWidth
        const newScrollValue = Math.max(0, containerScrollLeft - clientWidth)
        containerRef.current.scroll({
            left: newScrollValue,
            behavior: "auto",
        })
    }

    const onRightControls = () => {
        const scrollWidth = containerRef.current.scrollWidth
        const clientWidth = containerRef.current.clientWidth
        const newScrollValue = Math.min(
            scrollWidth - clientWidth,
            containerScrollLeft + clientWidth
        )
        containerRef.current.scroll({
            left: newScrollValue,
            behavior: "auto",
        })
    }

    return (
        <div className={style["game-carousel"]}>
            <div className={style["container"]} ref={containerRef}>
                <ol className={style["list"]}>
                    {items.map((item, mapIndex) => (
                        <li key={mapIndex} className={style["item"]}>
                            <GameTile
                                name={item.name}
                                background_image={getThumbnailLink(item)}
                                price={item.price}
                            />
                        </li>
                    ))}
                </ol>
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
