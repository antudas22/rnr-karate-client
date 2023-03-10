import React, { useContext } from "react";
import { Link } from "react-router-dom";
import rnrLogo from "../../../assets/rnr-logo.png";
import { AuthContext } from "../../../contexts/AuthProvider";
import { FaUserNinja } from "react-icons/fa";

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
      <div>
        <div className="navbar flex items-center bg-base-100 rounded-md px-5 my-2">
      <div className="navbar-start">
          <Link to="/"><img width={"75px"} src={rnrLogo} alt="logo" /></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-1">{menuItems}</ul>
      </div>
      <div className="flex navbar-end">
        {user?.uid ? (
          <>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar w-14 h-14">
                <div className="w-12 rounded-full">
                  {
                    user?.photoURL ?
                    <img src={user?.photoURL} alt="profile-pic" />
                    :
                    <div className="flex h-full justify-center items-center">
                      <FaUserNinja className="text-3xl text-sky-500" />
                    </div>
                  }
                </div>
              </label>
              <ul
                tabIndex={1}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 gap-1"
              >
                <li className="text-black">
                      {
                        <p className="bg-gradient-to-r from-cyan-400 to-sky-600 text-white">{user?.displayName}</p>
                        ||
                        <p className="bg-gradient-to-r from-cyan-400 to-sky-600 text-white">{user?.email}</p>
                      }
                </li>
                <div className="lg:hidden">
        <ul className="">{menuItems}</ul>
      </div>
                <li className="text-black">
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                
                <li className="text-black">
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
            <>
            <div className="dropdown dropdown-end">
            <label tabIndex={2} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current text-black"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 gap-1">
      {menuItems}
      <li><Link
              className=" px-6 py-3 font-bold rounded-lg bg-gradient-to-r from-cyan-400 to-sky-600 text-white uppercase border-none"
              to="/login"
            >
              Log in
            </Link>
      </li>
      </ul>
    </div>
            <Link
              className="hidden lg:block px-6 py-3 font-bold rounded-lg bg-gradient-to-r from-cyan-400 to-sky-600 text-white uppercase border-none"
              to="/login"
            >
              Log in
            </Link>
            </>
        )}
      </div>
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
