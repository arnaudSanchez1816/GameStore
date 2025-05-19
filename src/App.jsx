import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import style from "./App.module.css"
import GlobalSpinner from "./components/GlobalSpinner/GlobalSpinner"
import { useState } from "react"
import { ShoppingCartContext } from "./contexts/ShoppingCartContext"
import Loading from "./views/Loading/Loading"

export function AppFallback() {
    return (
        <div className={style["app"]}>
            <Loading />
        </div>
    )
}

function App() {
    const [cartData, setCartData] = useState([
        { id: 250, count: 1 },
        { id: 22511, count: 1 },
    ])
    const navigation = useNavigation()
    const isLoading = navigation.state === "loading"

    return (
        <>
            <ScrollRestoration />
            <div className={style["app"]}>
                <ShoppingCartContext.Provider value={[cartData, setCartData]}>
                    <Header />
                    <div className={style["content"]}>
                        {isLoading ? <GlobalSpinner /> : <Outlet />}
                    </div>
                    <Footer />
                </ShoppingCartContext.Provider>
            </div>
        </>
    )
}

export default App
