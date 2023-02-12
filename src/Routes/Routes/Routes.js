import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Contact from "../../Pages/Contact/Contact";
import AddAnnouncement from "../../Pages/Dashboard/AddAnnouncement/AddAnnouncement";
import AddStudent from "../../Pages/Dashboard/AddStudent/AddStudent";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import Announcement from "../../Pages/Dashboard/Announcement/Announcement";
import Classes from "../../Pages/Dashboard/Classes/Classes";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import ManageStudents from "../../Pages/Dashboard/ManageStudents/ManageStudents";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/classes',
                element: <Classes />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers /></AdminRoute>
            },
            {
                path: '/dashboard/addstudent',
                element: <AdminRoute><AddStudent /></AdminRoute>
            },
            {
                path: '/dashboard/managestudents',
                element: <AdminRoute><ManageStudents /></AdminRoute>
            },
            {
                path: '/dashboard/addannouncement',
                element: <AdminRoute><AddAnnouncement /></AdminRoute>
            },
            {
                path: '/dashboard/announcement',
                element: <Announcement />
            },
        ]
    }
])

export default router;