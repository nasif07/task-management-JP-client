import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import Dashboard from "../Pages/Dashboard/Dashboard";
import UserHome from "../Pages/UserHome/UserHome";
import ProtectRoute from "../PrivateRoute/ProtectRoute";
import AboutUs from "../Pages/AboutUs/AboutUs";
import AddATask from "../Pages/AddATask/AddATask";
import TodoList from "../Pages/TodoList/TodoList";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/signup",
            element: <SignUp></SignUp>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/aboutus",
            element: <AboutUs></AboutUs>
        }
      ]
    },
    {
        path: "/dashboard",
        element: <ProtectRoute><Dashboard></Dashboard></ProtectRoute>,
        children: [
            {
                path: "/dashboard",
                element: <UserHome></UserHome>
            },
            {
                path: "/dashboard/addatask",
                element: <ProtectRoute><AddATask></AddATask></ProtectRoute>
            },
            {
                path: "/dashboard/todolist",
                element: <ProtectRoute><TodoList></TodoList></ProtectRoute>
            }
        ]
    }
  ]);

export default router;