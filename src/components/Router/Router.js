import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Profile from "../Others/profile/Profile";
import Trams from "../Others/Trams";
import Catagory from "../pages/category/Catagory/Catagory";
import Home from "../pages/Home/Home/Home";
import News from "../pages/News/News/News";
import Login from "../pages/shared/Login/Login/Login";
import Register from "../pages/shared/Login/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";


export const router = createBrowserRouter([
    {
    path:'/',
    element:<Main></Main>,
    children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=> fetch('http://localhost:5000/news')
        },
        {
            path:'category/:id',
            element:<Catagory></Catagory>,
            loader: ({params})=> fetch(`http://localhost:5000/category/${params.id}`)
        
        },
        {
            path:'news/:id',
            element:<PrivateRoute><News></News></PrivateRoute>,
            loader:({params})=> fetch(`http://localhost:5000/news/${params.id}`)
        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/trams',
            element:<Trams></Trams>
        },
        {
            path:'profile',
            element:<PrivateRoute><Profile></Profile></PrivateRoute>
        }
    ]
    }
])