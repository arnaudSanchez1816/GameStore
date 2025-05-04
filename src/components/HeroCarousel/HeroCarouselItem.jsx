import style from "./HeroCarouselItem.module.css"

function HeroCarouselItem({ data }) {
    const { gameId, name, imgLink, price } = data

    return (
        <a className={style["hero-carousel-item"]} href="#">
            <img className={style["image"]} src={imgLink} alt={name} />
            <div className={style["caption"]}>
                <div className={style["caption-container"]}>
                    <p className={style["title"]}>{name}</p>
                    <div className={style["pricing"]}>
                        <span className={style["price"]}>{price}</span>
                        <button className={style["add-to-cart"]} type="button">
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default HeroCarouselItem
