import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Classes from "../../Pages/Classes/Classes";
import Contact from "../../Pages/Contact/Contact";
import AddAnnouncement from "../../Pages/Dashboard/AddAnnouncement/AddAnnouncement";
import AddPost from "../../Pages/Dashboard/AddPost/AddPost";
import AddStudent from "../../Pages/Dashboard/AddStudent/AddStudent";
import AllAnnouncements from "../../Pages/Dashboard/AllAnnouncements.js/AllAnnouncements";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import Announcement from "../../Pages/Dashboard/Announcement/Announcement";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import ManageStudents from "../../Pages/Dashboard/ManageStudents/ManageStudents";
import Error from "../../Pages/Error/Error";
import Belts from "../../Pages/Home/Belts/Belts";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Posts from "../../Pages/Posts/Posts";
import SignUp from "../../Pages/SignUp/SignUp";
import TermsAndConditions from "../../Pages/TermsAndConditions/TermsAndConditions";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import StudentRoute from "../StudentRoute/StudentRoute";

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
                path: '/posts',
                element: <Posts />
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
            },
            {
                path: '/termsandconditions',
                element: <TermsAndConditions />
            },
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
                element: <StudentRoute><Announcement /></StudentRoute>
            },
            {
                path: '/dashboard/allannouncements',
                element: <AdminRoute><AllAnnouncements /></AdminRoute>
            },
            {
                path: '/dashboard/addpost',
                element: <AdminRoute><AddPost /></AdminRoute>
            },
        ]
    },
    {
        path: '*',
        element: <Error />
    }
])

export default router;