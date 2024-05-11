import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { HomePage, LoginPage, MovieInfo, RegisterPage, SendPage } from "./pages";
export const route = createBrowserRouter(
  createRoutesFromElements(
    [<Route path="/" element={window.localStorage.getItem("accessToken") ? <HomePage /> : <LoginPage />} />,
    <Route path="/send" element={<SendPage />} />,
    <Route path="/register" element={<RegisterPage />} />,
    <Route path="/movie/:id" element={<MovieInfo />} />,
    ]
  )
)