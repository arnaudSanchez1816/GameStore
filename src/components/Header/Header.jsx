import { Icon } from "@iconify-icon/react/dist/iconify.mjs"
import style from "./Header.module.css"
import { Form } from "react-router-dom"

function Header() {
    return (
        <header className={style["header"]}>
            <a className={style["app-logo"]} href="/" title="Home"></a>
            <div className={style["search-bar-container"]}>
                <Form>
                    <input
                        className={style["search-bar"]}
                        type="search"
                        name="q"
                        defaultValue="Search bar"
                    />
                    <Icon
                        className={style["search-icon"]}
                        icon="material-symbols:search"
                    />
                </Form>
            </div>
            <div className={style["header-right"]}>
                <a className={style["cart-link"]} href="/cart/">
                    <Icon icon="material-symbols:shopping-cart-outline" />
                </a>
                <button className={style["user-btn"]} type="button">
                    <Icon icon="material-symbols:account-circle-outline" />
                </button>
            </div>
        </header>
    )
}

export default Header
