import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import useStudent from "../hooks/useStudent";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isStudent] = useStudent(user?.email);
  return (
    <div className="">
      <Navbar />
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content md:bg-base-100 bg-base-100 lg:bg-none gap-3">
            {isAdmin && (
              <>
                <li>
                  <Link to="" className="btn btn-outline">
                    Admin
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/allusers" className="btn btn-outline">
                    All Users
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/managestudents" className="btn btn-outline">
                    Manage Students
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/addstudent" className="btn btn-outline">
                    Add A Student
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/addannouncement" className="btn btn-outline">
                    Add An Announcement
                  </Link>
                </li>
                <li>
              <Link to="/dashboard/allannouncements" className="btn btn-outline">
                Announcement
              </Link>
              </li>
                <li>
              <Link to="/dashboard/addpost" className="btn btn-outline">
                Add A Post
              </Link>
              </li>
              </>
            )}
            {
              isStudent &&
              <li>
              <Link to="/dashboard/announcement" className="btn btn-outline">
                Announcement
              </Link>
              </li>
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
