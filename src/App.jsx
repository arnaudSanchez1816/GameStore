import { Outlet, ScrollRestoration } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import style from "./App.module.css"
import GlobalSpinner from "./components/GlobalSpinner/GlobalSpinner"
import { useState } from "react"
import { ShoppingCartContext } from "./contexts/ShoppingCartContext"

export function AppFallback() {
    return (
        <div className={style["app"]}>
            <GlobalSpinner />
        </div>
    )
}

function App() {
    const [cartData, setCartData] = useState({ items: [] })

    return (
        <>
            <ScrollRestoration />
            <div className={style["app"]}>
                <ShoppingCartContext.Provider value={[cartData, setCartData]}>
                    <Header />
                    <div className={style["content"]}>
                        <Outlet />
                    </div>
                    <Footer />
                </ShoppingCartContext.Provider>
            </div>
        </>
    )
}

export default App
