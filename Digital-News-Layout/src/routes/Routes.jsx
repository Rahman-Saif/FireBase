import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../login/Login";
import Register from "../register/Register";
import News from "../pages/News/News";
import PrivateRoutes from "./PrivateRoutes";


const routes=createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch(`/news.json`)
            },{
                path:'/news/:id',
                element:<PrivateRoutes><News></News></PrivateRoutes>,
            },
            {
                path:'/login',
                element:<Login></Login>,
            }
            ,{
                path:'/register',
                element:<Register></Register>,
            }
        ]
    }
])

export default routes;