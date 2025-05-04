import style from "./Header.module.css"

function Header() {
    return (
        <header>
            <div>
                <h1>Game Store</h1>
            </div>
            <div>
                <input type="search" defaultValue="Search bar" />
            </div>
            <div>
                <button type="button">Cart</button>
            </div>
        </header>
    )
}

export default Header
