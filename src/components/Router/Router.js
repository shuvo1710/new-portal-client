import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Catagory from "../pages/category/Catagory/Catagory";
import Home from "../pages/Home/Home/Home";
import News from "../pages/News/News/News";
import Login from "../pages/shared/Login/Login/Login";
import Register from "../pages/shared/Login/Register/Register";


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
            element:<News></News>,
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
    ]
    }
])