import { Outlet } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import style from "./App.module.css"

function App() {
    return (
        <div className={style["app"]}>
            <Header />
            <div className={style["content"]}>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default App
