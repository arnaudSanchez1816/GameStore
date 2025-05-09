import style from "./GameHeroCarouselItem.module.css"

function GameHeroCarouselItem({ data }) {
    const { name, image } = data

    return (
        <a
            className={style["hero-carousel-item"]}
            href={image}
            target="_blank"
            rel="noopener noreferrer"
        >
            <img className={style["image"]} src={image} alt={name} />
        </a>
    )
}

export default GameHeroCarouselItem
