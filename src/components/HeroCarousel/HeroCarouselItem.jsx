import { Link } from "react-router-dom"
import style from "./HeroCarouselItem.module.css"

function HeroCarouselItem({ data }) {
    const { name, background_image, price, id } = data

    return (
        <Link className={style["hero-carousel-item"]} to={`/game/${id}`}>
            <img className={style["image"]} src={background_image} alt={name} />
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
        </Link>
    )
}

export default HeroCarouselItem
