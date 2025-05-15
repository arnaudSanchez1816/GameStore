import style from "./HeroCarousel.module.css"
import { useEffect, useRef, useState } from "react"
import clsx from "clsx"
import {
    CarouselControlLeft,
    CarouselControlRight,
} from "../CarouselControl/CarouselControl"

const dotFillAnim = [
    {
        clipPath: "polygon(50% 0, 50% 0, 50% 0, 50% 0, 50% 0, 50% 0, 50% 50%)",
        easing: "linear",
    },
    {
        clipPath:
            "polygon(50% 0, 100% 0, 100% 0, 100% 0, 100% 0, 100% 0, 50% 50%)",
        easing: "linear",
    },
    {
        clipPath:
            "polygon(50% 0, 100% 0, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 50% 50%)",
        easing: "linear",
    },
    {
        clipPath:
            "polygon(50% 0, 100% 0, 100% 100%, 0% 100%, 0% 100%, 0% 100%, 50% 50%)",
        easing: "linear",
    },
    {
        clipPath:
            "polygon(50% 0, 100% 0, 100% 100%, 0% 100%, 0 0, 0 0, 50% 50%)",
        easing: "linear",
    },
    {
        clipPath:
            "polygon(50% 0, 100% 0, 100% 100%, 0% 100%, 0 0, 50% 0, 50% 50%)",
        easing: "linear",
    },
]

function HeroCarouselNavDot({
    index,
    isActive,
    onClick,
    delayDuration = null,
}) {
    const onDotClick = () => onClick(index)
    const dotFillRef = useRef(null)
    const hasDelay = isActive && delayDuration != null

    useEffect(() => {
        let anim = null
        if (dotFillRef.current) {
            console.log("hello ?" + delayDuration)

            anim = dotFillRef.current.animate(dotFillAnim, {
                easing: "linear",
                duration: delayDuration,
            })
        }

        return () => {
            anim?.cancel()
        }
    }, [isActive, delayDuration])

    return (
        <button
            type="button"
            className={clsx(style["dot"], isActive && style["active"])}
            onClick={onDotClick}
        >
            {hasDelay && <div className={style["dot-fill"]} ref={dotFillRef} />}
        </button>
    )
}

const HERO_CAROUSEL_DEFAULT = {
    autoScroll: false,
    scrollDelay: 5000,
}

function HeroCarousel({ children, options = HERO_CAROUSEL_DEFAULT }) {
    options = { ...HERO_CAROUSEL_DEFAULT, ...options }
    const { autoScroll, scrollDelay } = options
    const [index, setIndex] = useState(0)

    useEffect(() => {
        let interval = null
        if (autoScroll) {
            interval = setInterval(() => {
                let newIndex = index + 1
                if (newIndex >= children.length) {
                    newIndex = 0
                }
                setIndex(newIndex)
            }, scrollDelay)
        }

        return () => {
            if (interval) {
                clearInterval(interval)
            }
        }
    }, [autoScroll, scrollDelay, index, children])

    const onLeftControls = () => {
        setIndex(Math.max(0, index - 1))
    }

    const onRightControls = () => {
        setIndex(Math.min(children.length - 1, index + 1))
    }

    const onNavDotClick = (i) => {
        setIndex(i)
    }

    const dots = []
    for (let i = 0; i < children.length; i++) {
        dots.push(
            <HeroCarouselNavDot
                index={i}
                isActive={index === i}
                onClick={onNavDotClick}
                delayDuration={options.autoScroll ? options.scrollDelay : null}
            />
        )
    }

    return (
        <div className={style["hero-carousel"]}>
            <div className={style["row-container"]}>
                <ol className={style["row-list"]}>
                    {children.map((item, mapIndex) => {
                        const isActive = index === mapIndex

                        return (
                            <li
                                className={clsx(
                                    style["row-item"],
                                    isActive && "active"
                                )}
                                key={mapIndex}
                            >
                                {item}
                            </li>
                        )
                    })}
                </ol>
                {index > 0 && (
                    <CarouselControlLeft onControlClick={onLeftControls} />
                )}
                {index < children.length - 1 && (
                    <CarouselControlRight onControlClick={onRightControls} />
                )}
            </div>
            <ol className={style["dots-list"]}>
                {dots.map((dot, mapIndex) => (
                    <li key={mapIndex}>{dot}</li>
                ))}
            </ol>
        </div>
    )
}

export default HeroCarousel
