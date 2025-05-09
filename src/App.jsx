import { Outlet, useLocation } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import style from "./App.module.css"
import GlobalSpinner from "./components/GlobalSpinner/GlobalSpinner"
import { useLayoutEffect } from "react"

export function AppFallback() {
    return (
        <div className={style["app"]}>
            <GlobalSpinner />
        </div>
    )
}

const ScrollWrapper = ({ children }) => {
    const location = useLocation()

    useLayoutEffect(() => {
        // Scroll to the top of the page when the route changes
        window.scrollTo({ top: 0, left: 0, behavior: "instant" })
    }, [location.pathname])

    return children
}

function App() {
    return (
        <ScrollWrapper>
            <div className={style["app"]}>
                <Header />
                <div className={style["content"]}>
                    <Outlet />
                </div>
                <Footer />
            </div>
        </ScrollWrapper>
    )
}

export default App
