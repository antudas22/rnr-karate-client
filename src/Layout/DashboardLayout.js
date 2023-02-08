import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  return (
    <div className="">
      <Navbar />
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content m-4">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content gap-3">
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
                  <Link to="/dashboard/allstudents" className="btn btn-outline">
                    All Students
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/announcement" className="btn btn-outline">
                    Announcement
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
