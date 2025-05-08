import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "modern-normalize"
import "./index.css"
import App from "./App.jsx"
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom"
import ErrorView from "./views/ErrorView/ErrorView.jsx"
import Home from "./views/Home/Home.jsx"
import { loader as indexLoader } from "./routes/index.js"
import GlobalSpinner from "./components/GlobalSpinner/GlobalSpinner.jsx"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"
            element={<App />}
            errorElement={<ErrorView />}
            hydrateFallbackElement={<GlobalSpinner />}
        >
            <Route index element={<Home />} loader={indexLoader}></Route>
        </Route>
    )
)

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </StrictMode>
)
