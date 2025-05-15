import { Link } from "react-router-dom"
import style from "./ShoppingCart.module.css"
import { useContext, useEffect, useRef, useState } from "react"
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext"
import { getGameDetails } from "../../data/api"
import { clamp, getThumbnailLink } from "../../utils"
import { Icon } from "@iconify-icon/react/dist/iconify.mjs"
import clsx from "clsx"

function ShoppingCartItem({ shoppingItem, gameDetails }) {
    const [cartData, setCartData] = useContext(ShoppingCartContext)
    const { id, count } = shoppingItem
    const { name, background_image } = gameDetails

    const onAmountValueChanged = (e) => {
        let value = parseInt(e.target.value) || 1
        value = clamp(value, 1, 10)

        setCartData(
            cartData.map((cartItem) => {
                return cartItem.id === id
                    ? { ...cartItem, count: value }
                    : cartItem
            })
        )
    }

    const onRemoveFromCartClicked = () => {
        setCartData(cartData.filter((item) => item.id !== id))
    }

    return (
        <div className={style["cart-item"]}>
            <Link className={style["item-link"]} to={`/game/${id}`}>
                <img
                    className={style["item-image"]}
                    src={getThumbnailLink(background_image)}
                    alt={name}
                />
            </Link>
            <div className={style["item-middle"]}>
                <h3 className={style["item-heading"]}>{name}</h3>
            </div>
            <div className={style["item-right"]}>
                <span
                    className={style["item-price"]}
                >{`${gameDetails.price}€`}</span>
                <select
                    className={style["item-amount"]}
                    name="amount"
                    onChange={onAmountValueChanged}
                >
                    {[...Array(10)].map((_, index) => {
                        const amount = index + 1
                        return (
                            <option value={amount} selected={count === amount}>
                                {amount}
                            </option>
                        )
                    })}
                </select>
                <button
                    className={clsx("link", style["remove-from-cart"])}
                    type="button"
                    onClick={onRemoveFromCartClicked}
                >
                    <Icon icon="mdi:garbage-outline" />
                </button>
            </div>
        </div>
    )
}

function ShoppingCart() {
    const [cartData, setCartData] = useContext(ShoppingCartContext)
    const gameDetails = useRef(new Map())
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const gamesFetches = []
                for (let i = 0; i < cartData.length; ++i) {
                    const gameId = cartData[i].id
                    const request = getGameDetails(gameId)
                    gamesFetches.push(request)
                }

                const results = await Promise.all(gamesFetches)
                for (const result of results) {
                    gameDetails.current.set(result.id, result)
                }
            } catch (error) {
                console.error(error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchGames()
    }, [cartData])

    if (isLoading) {
        return (
            <div>
                <p>Loading cart...</p>
            </div>
        )
    }

    const total = cartData
        .reduce((prev, current) => {
            const gameData = gameDetails.current.get(current.id)
            if (!gameData) {
                console.error("Failed to find price for " + current.id)

                return prev
            }

            return prev + current.count * gameData.price
        }, 0)
        .toFixed(2)

    return (
        <div className={style["cart"]}>
            <div className={style["cart-content"]}>
                <h1 className={style["cart-content-heading"]}>Cart</h1>
                {cartData.length <= 0 ? (
                    <div className={style["empty-cart"]}>
                        <p>Looks like your cart is empty !</p>
                    </div>
                ) : (
                    <ol className={style["cart-items-list"]}>
                        {cartData.map((item) => {
                            const gameData = gameDetails.current.get(item.id)
                            if (!gameData) {
                                return (
                                    <div>
                                        Game details not found ! {item.id}
                                    </div>
                                )
                            } else {
                                return (
                                    <li key={item.id}>
                                        <ShoppingCartItem
                                            shoppingItem={item}
                                            gameDetails={gameData}
                                        />
                                    </li>
                                )
                            }
                        })}
                    </ol>
                )}
            </div>
            <div className={style["cart-summary"]}>
                <h2 className={style["cart-summary-heading"]}>Summary</h2>
                <div className={style["cart-summary-card"]}>
                    <div className={style["cart-total"]}>
                        <span className={style["total-label"]}>Total</span>
                        <span
                            className={style["total-value"]}
                        >{`${total}€`}</span>
                    </div>
                    <button
                        type="button"
                        className={style["checkout-button"]}
                        disabled={cartData.length <= 0}
                    >
                        <span>Checkout</span>
                        <Icon
                            className={style["icon"]}
                            icon="mdi:chevron-right"
                        />
                    </button>
                    <div className={style["summary-separator"]}>or</div>
                    <Link to="/" className={style["continue-shopping-link"]}>
                        <Icon
                            className={style["icon"]}
                            icon="mdi:chevron-left"
                        />
                        <span>Continue shopping</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart
