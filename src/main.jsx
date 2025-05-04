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

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />} errorElement={<ErrorView />}>
            <Route index element={<Home />}></Route>
        </Route>
    )
)

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </StrictMode>
)
