import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Services from "../components/Services/Services";
import SignUp from "../components/SingUp/SignUp";
import Main from "../LayOut/Main";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'signup',
                element:<SignUp></SignUp>
            },
            {
                path:'blog',
                element:<Blog></Blog>
            },
            {
                path:'services',
                element:<Services></Services>
            }
        ]
    }
])
export default router;