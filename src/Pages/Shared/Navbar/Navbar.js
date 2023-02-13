import React, { useContext } from "react";
import { Link } from "react-router-dom";
import rnrLogo from "../../../assets/rnr-logo.png";
import { AuthContext } from "../../../contexts/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const menuItems = (
    <React.Fragment>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/posts">Posts</Link>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
    </React.Fragment>
  );
  return (
      <div className="flex items-center bg-base-100 rounded-md px-5 my-2">
      <div className="navbar-start">
          <img width={"75px"} src={rnrLogo} alt="logo" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-1">{menuItems}</ul>
      </div>
      <div className="flex navbar-end">
        {user?.uid ? (
          <>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} alt="profile-pic" />
                </div>
              </label>
              <ul
                tabIndex={1}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 gap-1"
              >
                <li>
                  <Link to="">
                    Profile
                  </Link>
                </li>
                <div className="lg:hidden">
        <ul className="">{menuItems}</ul>
      </div>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                
                <li>
                  <Link to="">Settings</Link>
                </li>
                <li>
                  <button
                    className="bg-gradient-to-r from-cyan-400 to-sky-600 text-white uppercase"
                    onClick={handleLogOut}
                  >
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          </>
        ) : (
            <Link
              className=" px-6 py-3 font-bold rounded-lg bg-gradient-to-r from-cyan-400 to-sky-600 text-white uppercase border-none"
              to="/login"
            >
              Log in
            </Link>
        )}
      </div>
    </div>

    //   <div className="navbar bg-base-100 justify-between">
    //   <div className="navbar-start">
    //     <div className="dropdown">
    //       <label tabIndex={0} className="btn btn-ghost lg:hidden">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-5 w-5"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M4 6h16M4 12h8m-8 6h16"
    //           />
    //         </svg>
    //       </label>
    //       <ul
    //         tabIndex={1}
    //         className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
    //       >
    //         {menuItems}
    //       </ul>
    //     </div>
    //     <Link to="/">
    //       <img width={"75px"} src={rnrLogo} alt="" />
    //     </Link>
    //   </div>
    //   <div className="navbar-center hidden lg:flex">
    //     <ul className="menu menu-horizontal px-1">
    //       {menuItems}
    //     </ul>
    //   </div>
    //   <label tabIndex={2} className="lg:hidden">
    //     <label htmlFor="dashboard-drawer" className="btn btn-accent text-white btn-sm drawer-button lg:hidden">Open Menu</label>
    //   </label>
    // </div>
  );
};

export default Navbar;
