import { useState } from "react"
import reactLogo from "/src/assets/react.svg"
import viteLogo from "/vite.svg"
import style from "./TemplateView.module.css"
import clsx from "clsx"

function TemplateView() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img
                        className={style.logo}
                        src={viteLogo}
                        alt="Vite logo"
                    />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className={clsx(style.logo, style.react)}
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className={style.card}>
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className={style["read-the-docs"]}>
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default TemplateView
