import style from "./HeroCarouselItem.module.css"

function HeroCarouselItem({ data }) {
    const { name, background_image } = data

    return (
        <a className={style["hero-carousel-item"]} href="#">
            <img className={style["image"]} src={background_image} alt={name} />
            <div className={style["caption"]}>
                <div className={style["caption-container"]}>
                    <p className={style["title"]}>{name}</p>
                    <div className={style["pricing"]}>
                        <span className={style["price"]}>39.99€</span>
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
