import React, { use } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from './Firebase/AuthContext';

const Navbar = () => {

    const { loggedInUser, logOut } = use(AuthContext);
    //console.log('from navbar', loggedInUser.uid);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                console.log(error);
            });
    }

    const navigate = useNavigate();



    const navItems = <>
        <li>
            <NavLink to='/'>Home</NavLink>
        </li>
        <li>
            <NavLink to='/allgroup'>All Group</NavLink>
        </li>
        <li>
            <NavLink to='/mygroup'>My Group</NavLink>
        </li>
        <li>
            <NavLink to='/creategroup'>Create Group</NavLink>
        </li>
    </>


    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">HobbyHub</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        (loggedInUser?.uid) ? <button onClick={handleLogOut} className="btn">LogOut</button> : <button onClick={()=> navigate('/login')} className="btn">Login</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;