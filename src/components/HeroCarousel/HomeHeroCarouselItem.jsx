import { Link } from "react-router-dom"
import style from "./HomeHeroCarouselItem.module.css"
import AddToCartButton from "../AddToCartButton/AddToCartButton"

function HomeHeroCarouselItem({ data }) {
    const { name, background_image, price, id } = data

    return (
        <div className={style["hero-carousel-item"]}>
            <Link className={style["game-link"]} to={`/game/${id}`}>
                <img
                    className={style["image"]}
                    src={background_image}
                    alt={name}
                />
            </Link>
            <div className={style["caption"]}>
                <div className={style["caption-container"]}>
                    <p className={style["title"]}>{name}</p>
                    <div className={style["pricing"]}>
                        <span className={style["price"]}>{`${price}€`}</span>
                        <div className={style["add-to-cart"]}>
                            <AddToCartButton gameId={id} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeHeroCarouselItem
