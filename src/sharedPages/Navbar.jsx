import React, { useContext} from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthContext';
import { BsCart4 } from "react-icons/bs";
import UseCart from '../hooks/UseCart';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const[cart] = UseCart();

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error.message);
            })
    }

    const navList =
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/menu'>Our Menu</NavLink></li>
            <li><NavLink to='/order/salads'>Order Food</NavLink></li>
            <li><NavLink to='/secret'>Secret</NavLink></li>
            <li><NavLink to='/signup'>Signup</NavLink></li>
            {
                user ?
                    <>
                        {/* <p>{user.displayName}</p> */}
                        <li onClick={handleSignOut} ><Link>LogOut</Link></li>
                    </> :
                    <><li><NavLink to='/login'>Login</NavLink></li></>
            }
            <li>
                <NavLink to='dashboard'>
                    <BsCart4></BsCart4> <div className="badge badge-sm badge-secondary">+{cart.length}</div>
                </NavLink>
            </li>
        </>

    return (
        <div>
            <div className="navbar fixed z-10 opacity-40 max-w-7xl bg-black text-white shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {
                                navList
                            }
                        </ul>
                    </div>
                    {/* <a className="btn btn-ghost text-xl">BISTRO BOSS </a> <br /> */}
                    <div className="flex flex-col items-center">
                        <a className="btn btn-ghost text-xl lg:font-medium">BISTRO BOSS</a>
                        <p className="text-xl lg:font-medium">RESTAURANT</p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navList
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <a className="btn">Button</a> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;