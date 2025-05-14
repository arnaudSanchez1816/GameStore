import { useContext } from "react"
import style from "./ShoppingCartButton.module.css"
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext"
import { Link } from "react-router-dom"
import { Icon } from "@iconify-icon/react/dist/iconify.mjs"

function ShoppingCartButton() {
    const [cartData] = useContext(ShoppingCartContext)

    const { items } = cartData

    return (
        <Link className={style["cart-link"]} to="/cart/">
            <Icon
                className={style["cart-icon"]}
                icon="material-symbols:shopping-cart-outline"
            />
            {items.length > 0 && (
                <div className={style["cart-count"]}>{items.length}</div>
            )}
        </Link>
    )
}

export default ShoppingCartButton
