import { Outlet, ScrollRestoration } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import style from "./App.module.css"
import GlobalSpinner from "./components/GlobalSpinner/GlobalSpinner"

export function AppFallback() {
    return (
        <div className={style["app"]}>
            <GlobalSpinner />
        </div>
    )
}

function App() {
    return (
        <>
            <ScrollRestoration />
            <div className={style["app"]}>
                <Header />
                <div className={style["content"]}>
                    <Outlet />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default App
