import App from "../App";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import MainLayout from "../layouts/MainLayout";
import Details from "../pages/Details";
import Trouble from "../pages/Trouble";
import Branch from "../components/Branch";
import Error from "../pages/Error";

const detailsLoader = ({ location }) => {
    return location.state; 
};

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement:<Error></Error>,
        children: [
            {
                index: true,  
                element: <Navigate to="/home" replace />,
            },
            {
                path: '/home',
                element: <Home></Home>,
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/details',
                element: <Details></Details>,
                loader: () => fetch('Products.json'), 
            },
            {
                path: '/trouble',
                element: <Trouble></Trouble>
            },
            {
                path: '/branch',
                element: <Branch></Branch>,
                loader: () => fetch('Branch.json'), 
            },
        ]
    },
]);

export default routes;
