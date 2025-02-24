import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import AdminLayOut from "../components/layout/AdminLayOut";



const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "about",
                element: <About></About>
            }
        ]
    },
    {
        path: '/admin',
        element: <AdminLayOut></AdminLayOut>,
        children: [
            {
                index: true,
                element: <h1>This is a admin Dashboard</h1>
            },
            {
                path: "admin-add",
                element: <h1>This is a admin pages</h1>
            }
        ]
    }
  
])


export default router