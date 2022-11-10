import { createBrowserRouter } from "react-router-dom";
import AddServices from "../components/AddServices/AddServices";
import Blog from "../components/Blog/Blog";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import MyReviews from "../components/MyReviews/MyReviews";
import ServiceDetails from "../components/ServiceDetails/ServiceDetails";
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
            },
            {
                path:'services/:id',
                element:<ServiceDetails></ServiceDetails>,
                loader:async({params})=>fetch(`https://artland-photography-server.vercel.app/service/${params.id}`)
            },
            {
                path:'addServices',
                element:<AddServices></AddServices>,
               
            },
            {
                path:'myReviews',
                element:<MyReviews></MyReviews>
            }
        ]
    }
])
export default router;