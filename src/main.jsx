import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "modern-normalize"
import "./index.css"
import App, { AppFallback } from "./App.jsx"
import {
    createHashRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom"
import ErrorView from "./views/ErrorView/ErrorView.jsx"
import Home from "./views/Home/Home.jsx"
import { loader as indexLoader } from "./routes/index.js"
import { loader as gameLoader } from "./routes/game.js"
import { loader as gamesLoader } from "./routes/games.js"
import Game from "./views/Game/Game.jsx"
import Games from "./views/Games/Games.jsx"
import ShoppingCart from "./views/ShoppingCart/ShoppingCart.jsx"

const router = createHashRouter(
    createRoutesFromElements(
        <Route
            path="/"
            element={<App />}
            errorElement={<ErrorView />}
            hydrateFallbackElement={<AppFallback />}
        >
            <Route index element={<Home />} loader={indexLoader} />
            <Route path="game/:gameId" element={<Game />} loader={gameLoader} />
            <Route path="games" element={<Games />} loader={gamesLoader} />
            <Route path="cart" element={<ShoppingCart />} />
        </Route>
    )
)

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </StrictMode>
)
