import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import HomePage from "../Pages/HomePage/HomePage";
import CoveragePage from "../Pages/CoveragePage/CoveragePage";
import AuthLayout from "../Pages/AuthLayout/AuthLayout";
import Login from "../Pages/AuthLayout/Login/Login";
import SignUp from "../Pages/AuthLayout/SignUP/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import SendPercelPage from "../Pages/SendPercelPage/SendPercelPage";
import BeRider from "../Pages/BeRider/BeRider";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: HomePage
            },
            {
                path: "/coverage",
                Component: CoveragePage,
                loader: () => fetch('/serviceCenters.json').then(res => res.json())
            },
            {
                path: '/send-percel',
                element: <PrivateRoutes><SendPercelPage /></PrivateRoutes>
            },
            {
                path: '/be-rider',
                element: <PrivateRoutes><BeRider /></PrivateRoutes>
            }

        ]
    },
    {
        path: '/auth',
        Component: AuthLayout,
        children: [
            {
                path: '/auth/login',
                Component: Login
            },
            {
                path: '/auth/signup',
                Component: SignUp
            }
        ]
    }
])