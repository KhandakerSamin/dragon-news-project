import { Link, NavLink } from "react-router-dom";
import userDefault from '../../../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
    }

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/carear'>Career</NavLink></li>

    </>

    return (
        <div className="navbar bg-transparent">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end gap-x-3">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src={userDefault} />
                    </div>
                </label>
                {
                    user ?
                        <Link to=''>
                            <button onClick={handleSignOut} className="btn bg-black text-white rounded-none px-10 hover:text-black">Sign Out</button>
                        </Link>
                        :
                        <Link to='/login'>
                            <button className="btn bg-black text-white rounded-none px-10 hover:text-black">Login</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;