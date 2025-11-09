// import React, { use, useContext, useEffect } from 'react';
// import { Link, NavLink, useNavigate } from 'react-router';
// import { AuthContext } from '../Firebase/AuthContext';
// import { Tooltip } from 'react-tooltip';
// import { ThemeContext } from '../Contexts/ThemeContext.jsx';

// const Navbar = () => {

//     const { loggedInUser, setLoggedInUser, logOut } = use(AuthContext);
//     const { theme, setTheme } = useContext(ThemeContext);
//     const handleLogOut = () => {
//         logOut()
//             .then(() => {
//                 // Sign-out successful.
//                 setLoggedInUser(null);
//             }).catch((error) => {
//                 console.log(error);
//             });
//     }

//     const navigate = useNavigate();

//     const handleToggle = (e) => {
//         if (e.target.checked) {
//             setTheme('dark')
//         } else {
//             setTheme('light')
//         }
//     }
//     useEffect(() => {
//         localStorage.setItem('theme', theme);
//         const localTheme = localStorage.getItem('theme');
//         document.querySelector('html').setAttribute("data-theme", localTheme);
//         if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//             document.documentElement.classList.add('dark');
//             document.querySelector('html').classList.add('dark');
//         } else {
//             document.documentElement.classList.remove('dark');
//             document.querySelector('html').classList.remove('dark');
//         }
//     }, [theme])

//     const navItems = <>
//         <li>
//             <NavLink to='/'>Home</NavLink>
//         </li>
//         <li>
//             <NavLink to='/allgroup'>All Group</NavLink>
//         </li>
//         <li>
//             <NavLink to={`/mygroup/${loggedInUser?.email}`}>My Group</NavLink>
//         </li>
//         <li>
//             <NavLink to='/creategroup'>Create Group</NavLink>
//         </li>
//     </>

//     return (
//         <div>
//             <div className="navbar bg-base-100 shadow-sm">
//                 <div className="navbar-start">
//                     <div className="dropdown">
//                         <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
//                         </div>
//                         <ul
//                             tabIndex={0}
//                             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
//                             {navItems}
//                         </ul>
//                     </div>
//                     <Link to='/' className="btn btn-ghost text-xl">HobbyHub</Link>
//                 </div>
//                 <div className="navbar-center hidden lg:flex">
//                     <ul className="menu menu-horizontal px-1">
//                         {navItems}
//                     </ul>
//                 </div>
//                 <div className="navbar-end">
//                     <img data-tooltip-id="my-tooltip"
//                         data-tooltip-content={loggedInUser?.displayName} className='w-10 h-10 rounded-full mr-2' src={loggedInUser ? loggedInUser.photoURL : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'} alt="" />
//                     <Tooltip id="my-tooltip" />
//                     {
//                         (loggedInUser?.uid) ? <button onClick={handleLogOut} className="btn">LogOut</button> : <button onClick={() => navigate('/login')} className="btn">Login</button>
//                     }
//                     <div className="toggle-button mx-1 md:mx-4">
//                         <label className="swap swap-rotate ">
//                             {/* this hidden checkbox controls the state */}
//                             <input type="checkbox" onChange={handleToggle} />

//                             {/* sun icon */}
//                             <svg
//                                 className="swap-on h-7 w-7 fill-current"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 viewBox="0 0 24 24">
//                                 <path
//                                     d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
//                             </svg>

//                             {/* moon icon */}
//                             <svg
//                                 className="swap-off h-7 w-7 fill-current"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 viewBox="0 0 24 24">
//                                 <path
//                                     d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
//                             </svg>
//                         </label>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar;




// import React, { use, useContext, useEffect } from 'react';
// import { Link, NavLink, useNavigate } from 'react-router';
// import { AuthContext } from '../Firebase/AuthContext';
// import { Tooltip } from 'react-tooltip';
// import { ThemeContext } from '../Contexts/ThemeContext.jsx';

// const Navbar = () => {
//     const { loggedInUser, setLoggedInUser, logOut } = use(AuthContext);
//     const { theme, setTheme } = useContext(ThemeContext);
//     const navigate = useNavigate();

//     const handleLogOut = () => {
//         logOut()
//             .then(() => {
//                 setLoggedInUser(null);
//                 navigate('/');
//             }).catch((error) => {
//                 console.log(error);
//             });
//     }

//     const handleToggle = (e) => {
//         if (e.target.checked) {
//             setTheme('dark')
//         } else {
//             setTheme('light')
//         }
//     }

//     useEffect(() => {
//         localStorage.setItem('theme', theme);
//         const localTheme = localStorage.getItem('theme');
//         document.querySelector('html').setAttribute("data-theme", localTheme);
//         if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//             document.documentElement.classList.add('dark');
//             document.querySelector('html').classList.add('dark');
//         } else {
//             document.documentElement.classList.remove('dark');
//             document.querySelector('html').classList.remove('dark');
//         }
//     }, [theme])

//     // Public navigation items
//     const publicNavItems = (
//         <>
//             <li>
//                 <NavLink to='/' className={({ isActive }) => isActive ? 'active' : ''}>
//                     Home
//                 </NavLink>
//             </li>
//             <li>
//                 <NavLink to='/allgroup' className={({ isActive }) => isActive ? 'active' : ''}>
//                     All Groups
//                 </NavLink>
//             </li>
//             <li>
//                 <NavLink to='/aboutus' className={({ isActive }) => isActive ? 'active' : ''}>
//                     About Us
//                 </NavLink>
//             </li>
//             <li>
//                 <NavLink to='/contactus' className={({ isActive }) => isActive ? 'active' : ''}>
//                     Contact Us
//                 </NavLink>
//             </li>
//         </>
//     );

//     // Authenticated user navigation items
//     const authNavItems = (
//         <>
//             <li>
//                 <NavLink to='/dashboard' className={({ isActive }) => isActive ? 'active' : ''}>
//                     Dashboard
//                 </NavLink>
//             </li>
//             <li>
//                 <NavLink to={`/mygroup/${loggedInUser?.email}`} className={({ isActive }) => isActive ? 'active' : ''}>
//                     My Groups
//                 </NavLink>
//             </li>
//             <li>
//                 <NavLink to='/creategroup' className={({ isActive }) => isActive ? 'active' : ''}>
//                     Create Group
//                 </NavLink>
//             </li>
//         </>
//     );

//     return (
//         <div className="sticky top-0 z-50 bg-base-100/80 backdrop-blur-md shadow-sm">
//             <div className="navbar max-w-7xl mx-auto">
//                 {/* Navbar Start - Logo & Mobile Menu */}
//                 <div className="navbar-start">
//                     <div className="dropdown">
//                         <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
//                             </svg>
//                         </div>
//                         <ul
//                             tabIndex={0}
//                             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow-lg">
//                             {publicNavItems}
//                             {loggedInUser?.uid && authNavItems}
//                         </ul>
//                     </div>
//                     <Link to='/' className="btn btn-ghost text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
//                         HobbyHub
//                     </Link>
//                 </div>

//                 {/* Navbar Center - Desktop Menu */}
//                 <div className="navbar-center hidden lg:flex">
//                     <ul className="menu menu-horizontal px-1 gap-1">
//                         {publicNavItems}
//                         {loggedInUser?.uid && authNavItems}
//                     </ul>
//                 </div>

//                 {/* Navbar End - User Profile & Actions */}
//                 <div className="navbar-end gap-2">
//                     {/* Theme Toggle */}
//                     <label className="swap swap-rotate">
//                         <input type="checkbox" onChange={handleToggle} checked={theme === 'dark'} />
//                         {/* Sun icon */}
//                         <svg
//                             className="swap-on h-6 w-6 fill-current"
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 24 24">
//                             <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
//                         </svg>
//                         {/* Moon icon */}
//                         <svg
//                             className="swap-off h-6 w-6 fill-current"
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 24 24">
//                             <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
//                         </svg>
//                     </label>

//                     {/* User Profile or Login Button */}
//                     {loggedInUser?.uid ? (
//                         <div className="dropdown dropdown-end">
//                             <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
//                                 <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
//                                     <img
//                                         src={loggedInUser.photoURL || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}
//                                         alt={loggedInUser.displayName || 'User'}
//                                     />
//                                 </div>
//                             </div>
//                             <ul
//                                 tabIndex={0}
//                                 className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow-lg">
//                                 <li className="menu-title">
//                                     <span className="text-sm font-semibold">{loggedInUser.displayName || 'User'}</span>
//                                     <span className="text-xs opacity-60">{loggedInUser.email}</span>
//                                 </li>
//                                 <li>
//                                     <Link to='/dashboard' className="justify-between">
//                                         Dashboard
//                                         <span className="badge badge-sm badge-primary">New</span>
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link to={`/mygroup/${loggedInUser.email}`}>My Groups</Link>
//                                 </li>
//                                 <li>
//                                     <Link to='/profile'>Profile Settings</Link>
//                                 </li>
//                                 <div className="divider my-0"></div>
//                                 <li>
//                                     <button onClick={handleLogOut} className="text-error">
//                                         Logout
//                                     </button>
//                                 </li>
//                             </ul>
//                         </div>
//                     ) : (
//                         <button onClick={() => navigate('/login')} className="btn btn-primary px-12 py-2">
//                             Login
//                         </button>
//                     )}
//                 </div>
//             </div>
//             <Tooltip id="my-tooltip" />
//         </div>
//     );
// };

// export default Navbar;



import React, { use, useContext, useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../Firebase/AuthContext';
import { ThemeContext } from '../Contexts/ThemeContext.jsx';
import { Menu, X, User, LogOut, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const { loggedInUser, setLoggedInUser, logOut } = use(AuthContext);
  const { theme, setTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        setLoggedInUser(null);
        navigate('/');
      })
      .catch((error) => console.log(error));
  };

  const handleToggle = (e) => {
    setTheme(e.target.checked ? 'dark' : 'light');
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  // Navigation links
  const links = (
    <>
      <NavLink to="/" className="navlink">Home</NavLink>
      <NavLink to="/allgroup" className="navlink">All Groups</NavLink>
      <NavLink to="/aboutus" className="navlink">About Us</NavLink>
      <NavLink to="/contactus" className="navlink">Contact Us</NavLink>

      {loggedInUser?.uid && (
        <>
          <NavLink to="/dashboard" className="navlink">Dashboard</NavLink>
          <NavLink to={`/mygroup/${loggedInUser?.email}`} className="navlink">My Groups</NavLink>
          <NavLink to="/creategroup" className="navlink">Create Group</NavLink>
        </>
      )}
    </>
  );

  return (
    <div className="sticky top-0 z-50 backdrop-blur-xl bg-white/10 border-b border-white/20 shadow-lg">
      
      {/* Outer container */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent tracking-wider"
        >
          HobbyHub
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6 text-gray-600 dark:text-gray-100 text-sm font-medium">
            {links}
          </div>
        </div>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-4">

          {/* Theme Toggle */}
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={handleToggle}
              className="hidden"
            />
            <div className="w-12 h-6 bg-white/20 rounded-full relative transition">
              <div
                className={`${
                  theme === "dark" ? "translate-x-6" : "translate-x-1"
                } absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full transition`}
              />
            </div>
            {theme === "dark" ? (
              <Moon className="ml-2 text-white" size={18} />
            ) : (
              <Sun className="ml-2 text-yellow-300" size={18} />
            )}
          </label>

          {/* Authenticated user menu */}
          {loggedInUser?.uid ? (
            <div className="relative group">
              <img
                src={
                  loggedInUser.photoURL ||
                  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                }
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-white/30 cursor-pointer"
              />

              <div className="absolute right-0 mt-3 hidden group-hover:block bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-xl py-3 w-48">
                <p className="text-sm px-4 text-gray-200 mb-1 font-medium">
                  {loggedInUser.displayName}
                </p>
                <p className="text-xs px-4 text-gray-300 mb-3">
                  {loggedInUser.email}
                </p>
                <div className="border-t border-white/20 my-1"></div>

                <Link
                  to="/dashboard"
                  className="dropdown-item"
                >
                  Dashboard
                </Link>

                <Link
                  to={`/mygroup/${loggedInUser.email}`}
                  className="dropdown-item"
                >
                  My Groups
                </Link>

                <Link
                  to="/profile"
                  className="dropdown-item"
                >
                  Profile Settings
                </Link>

                <button
                  onClick={handleLogOut}
                  className="dropdown-item text-red-400 flex items-center gap-2"
                >
                  <LogOut size={16} /> Logout
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold hover:scale-105 transition shadow-lg"
            >
              Login
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white/10 backdrop-blur-xl border-t border-white/20">
          <div className="flex flex-col px-6 py-4 text-white text-lg gap-4">
            {links}

            <div className="border-t border-white/20 mt-2"></div>

            {loggedInUser?.uid ? (
              <button
                onClick={handleLogOut}
                className="text-red-300 text-left"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="px-6 py-2 mt-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-lg"
              >
                Login
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
