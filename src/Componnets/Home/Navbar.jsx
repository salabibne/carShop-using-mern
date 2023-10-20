import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { context_siatos } from "../Providers/Context";
import { AiOutlineUser } from "react-icons/ai";
import {  } from "react-icons/ai";






const Navbar = () => {
    const { user, Logout } = useContext(context_siatos)
    const [theme, setTheme] = useState(false)
 

    const handleThemes = () => {
        setTheme(!theme)

    }
    const LoggingOut = () => {
        return Logout()

    }

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/addproducts">AddProduct</NavLink></li>
        <li><NavLink to="/mycarts">MyCart</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <div className="flex items-center">

                    <img className="rounded-full" width={50} src="/SiaTos.jpg"></img>
                    <p className="btn btn-ghost normal-case text-yellow-900 font-mono font-extrabold text-xl">SIATOS</p>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <button onClick={handleThemes} className="p-2 bg-black text-white font-bold rounded-full">Darkmode
                    {
                        theme ? <p>normal</p> && document.querySelector("body").classList.add("dark")
                          
                         : <p>darkmode</p> && document.querySelector("body").classList.remove("dark")
                    }
                </button>
               
            </div>
            <div className="navbar-end">
                {
                    user ? <p className="font-bold text-xl">{user.email.split('@')[0]}<span>{user.photoURL ? <img width={50} className="rounded-full" src={user.photoURL}></img> : <AiOutlineUser></AiOutlineUser>}</span></p> : ""
                }
            </div>
            <div className="navbar-end">
                {
                    user ? <button onClick={LoggingOut} className="p-4 bg-yellow-950 text-white  font-bold rounded-lg">Logout</button> : <Link to="/login"><button className="p-4 bg-yellow-950 text-white  font-bold rounded-lg">Login</button></Link>
                }

            </div>
        </div>
    );
};

export default Navbar;