import { useContext } from "react"
import style from "./AddToCartButton.module.css"
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext"
import { clamp } from "date-fns"
import { useNavigate } from "react-router-dom"
import { Icon } from "@iconify-icon/react/dist/iconify.mjs"

function AddToCartButton({ gameId }) {
    const [cartData, setCartData] = useContext(ShoppingCartContext)
    const navigate = useNavigate()

    const onAddToCartClicked = () => {
        const index = cartData.findIndex((item) => item.id === gameId)
        if (index < 0) {
            setCartData([...cartData, { id: gameId, count: 1 }])
        } else {
            const newCartData = [...cartData]
            newCartData[index].count += clamp(
                newCartData[index].count + 1,
                1,
                10
            )
            setCartData(newCartData)
        }

        navigate("/cart")
    }

    return (
        <button
            className={style["add-to-cart"]}
            type="button"
            onClick={onAddToCartClicked}
        >
            <Icon
                className={style["cart-icon"]}
                icon="material-symbols:shopping-cart-outline"
            />
            Add to cart
        </button>
    )
}

export default AddToCartButton
