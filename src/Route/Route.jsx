import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Service from "../Pages/Services/Service";
import Gallery from "../Pages/Gallery/Gallery";
import Shop from "../Pages/Shop/Shop";
import CardDetails from "../Pages/Services/CardDetails/CardDetails";
import Login from "../Component/Login/Login";
import Register from "../Component/Login/Register";
import PrivateRoute from "./PrivateRoute";
import Error from "../ErrorPage/Error";



const myCreateRoute = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
                
            },
            {
                path:'/services',
                element:<Service></Service>
            },
            {
                path:'/details/:id',
                element:<PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
                loader:()=> fetch('/services.json')
            },
            {
                path:'/gallery',
                element:<Gallery></Gallery>
            },
           
            {
                path:'/shop',
                element:<Shop></Shop>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])
  


export default myCreateRoute;