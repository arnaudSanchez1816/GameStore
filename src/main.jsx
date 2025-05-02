import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom"
import TemplateView from "./components/views/TemplateView/TemplateView.jsx"
import ErrorView from "./components/views/ErrorView/ErrorView.jsx"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />} errorElement={<ErrorView />}>
            <Route index element={<TemplateView />}></Route>
        </Route>
    )
)

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </StrictMode>
)
