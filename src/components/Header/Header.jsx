import { Icon } from "@iconify-icon/react/dist/iconify.mjs"
import style from "./Header.module.css"
import { Form, Link, useNavigation, useSearchParams } from "react-router-dom"
import { useEffect, useRef } from "react"
import ShoppingCartButton from "../ShoppingCartButton/ShoppingCartButton"
import clsx from "clsx"

function Header() {
    const searchInputRef = useRef(null)
    const navigation = useNavigation()
    const [searchParams] = useSearchParams()
    const q = searchParams.get("q") || ""

    useEffect(() => {
        if (searchInputRef.current) {
            searchInputRef.current.value = q
        }
    }, [navigation, q])

    return (
        <header className={style["header"]}>
            <Link className={style["app-logo"]} to="/" title="Home"></Link>
            <div className={style["search-bar-container"]}>
                <Form action="/games" method="GET">
                    <input
                        className={style["search-bar"]}
                        type="search"
                        name="q"
                        aria-label="Search games"
                        defaultValue={q}
                        ref={searchInputRef}
                    />
                    <Icon
                        className={style["search-icon"]}
                        icon="material-symbols:search"
                    />
                </Form>
            </div>
            <div className={style["header-right"]}>
                <ShoppingCartButton />
                <button
                    className={clsx("link", style["user-btn"])}
                    type="button"
                >
                    <Icon icon="material-symbols:account-circle-outline" />
                </button>
            </div>
        </header>
    )
}

export default Header
