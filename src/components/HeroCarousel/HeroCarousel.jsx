import style from "./HeroCarousel.module.css"
import HeroCarouselItem from "./HeroCarouselItem"
import { useEffect, useRef, useState } from "react"
import clsx from "clsx"
import { Icon } from "@iconify-icon/react/dist/iconify.mjs"

const DEFAULT_ITEMS = [
    {
        gameId: 100,
        name: "The Elder Scrolls IV: Oblivion Remastered",
        imgLink:
            "https://images.ctfassets.net/rporu91m20dc/1wGximc864FDh0hPe5mbjI/9039ff982fbf12911290467dcc42d36c/OR_LargeHero_AvailableNow.png?q=70&fm=png",
        price: "50.00€",
    },
    {
        gameId: 110,
        name: "Kingdom Come : Deliverance II",
        imgLink:
            "https://pbs.twimg.com/media/GWeeYlBXwAAipbn?format=jpg&name=4096x4096",
        price: "29.99€",
    },
    {
        gameId: 120,
        name: "Black Myth: Wukong",
        imgLink:
            "https://cdn1.epicgames.com/spt-assets/ca9ef1bcf2f54043baac351366aec677/black-myth-wukong-jz9yr.jpg",
        price: "50.00€",
    },
    {
        gameId: 130,
        name: "Age of Mythology : Retold",
        imgLink:
            "https://image.api.playstation.com/vulcan/ap/rnd/202501/2218/781d28bc15aff7c19074e087cc006f2637c7f6df85f1a000.jpg",
        price: "49.99€",
    },
    {
        gameId: 140,
        name: "Anno 1800 : Gold Edition",
        imgLink:
            "https://cdn2.unrealengine.com/egst-edition-thumbnail-1920x1080-1920x1080-5a00fb27a68e.jpg",
        price: "14.99€",
    },
    {
        gameId: 150,
        name: "Factorio",
        imgLink: "https://cdn.factorio.com/assets/img/artwork/0.17-stable.png",
        price: "29.99€",
    },
]

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

function HeroCarousel({
    items = DEFAULT_ITEMS,
    options = HERO_CAROUSEL_DEFAULT,
}) {
    options = { ...HERO_CAROUSEL_DEFAULT, ...options }
    const { autoScroll, scrollDelay } = options
    const [index, setIndex] = useState(0)

    useEffect(() => {
        let interval = null
        if (autoScroll) {
            interval = setInterval(() => {
                let newIndex = index + 1
                if (newIndex >= items.length) {
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
    }, [autoScroll, scrollDelay, index, items])

    const onLeftControls = () => {
        setIndex(Math.max(0, index - 1))
    }

    const onRightControls = () => {
        setIndex(Math.min(items.length - 1, index + 1))
    }

    const onNavDotClick = (i) => {
        setIndex(i)
    }

    const dots = []
    for (let i = 0; i < items.length; i++) {
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
                    {items.map((item, mapIndex) => {
                        const isActive = index === mapIndex

                        return (
                            <li
                                className={clsx(
                                    style["row-item"],
                                    isActive && style["active"]
                                )}
                                key={item.gameId}
                            >
                                <HeroCarouselItem data={item} />
                            </li>
                        )
                    })}
                </ol>
                {index > 0 && (
                    <div className={style["controls-left"]}>
                        <button
                            className={style["controls-btn"]}
                            type="button"
                            onClick={onLeftControls}
                        >
                            <Icon icon="mdi:chevron-left" />
                        </button>
                    </div>
                )}
                {index < items.length - 1 && (
                    <div className={style["controls-right"]}>
                        <button
                            className={style["controls-btn"]}
                            type="button"
                            onClick={onRightControls}
                        >
                            <Icon icon="mdi:chevron-right" />
                        </button>
                    </div>
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
