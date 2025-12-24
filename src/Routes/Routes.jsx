import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import HomePage from "../Pages/HomePage/HomePage";
import CoveragePage from "../Pages/CoveragePage/CoveragePage";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children:[
            {
                index:true,
                Component:HomePage
            },
            {
                path:"/coverage",
                Component:CoveragePage,
                loader:()=>fetch('/serviceCenters.json').then(res=>res.json())
            },
            
        ]
    }
])