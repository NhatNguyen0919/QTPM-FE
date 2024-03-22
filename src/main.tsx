import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar/navbar.tsx";
import HomePage from "./components/home/home.tsx";
import RestaurantPage from "./components/restaurants/restaurant.tsx";
import RegisterPage from "./components/register/register.tsx";
import LoginPage from "./components/login/login.tsx";
import "./index.css";
import Logout from "./components/logout/logout.tsx";
import AddingRes from "./components/addingres/adding.tsx";
import DetailRes from "./components/restaurants/detailRes.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/restaurants",
        element: <RestaurantPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/adding",
        element: <AddingRes />,
      },
      {
        path: `/restaurant/:id`,
        element: <DetailRes />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
