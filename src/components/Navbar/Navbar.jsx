import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import style from './Navbar.module.css';
import logo from '../../assets/images/freshcart-logo.svg';
import { UserContext } from '../../context/usercontext';
import { CartContext } from '../../context/Cartcontext';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu toggle
    const navigate = useNavigate();
    const { userData, setUserData } = useContext(UserContext);
    const { cart } = useContext(CartContext);

    function logout() {
        localStorage.removeItem('usertoken');
        setUserData(null);
        navigate('/login');
    }

    return (
        <nav className="bg-slate-50 lg:fixed top-0 right-0 left-0 z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-6 lg:flex-row flex-col">
                {/* Logo */}
                <div className="flex justify-between">
                <div className="flex items-center mr-11">
                    <img src={logo} alt="logo" className="h-10" />
                </div>

                {/* Mobile Menu Toggle Button */}
                <button
                    data-collapse-toggle="navbar-dropdown"
                    type="button"
                    className=" ml-11                           inline-flex  p-2 w-10 h-10 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-dropdown"
                    aria-expanded={isMenuOpen ? "true" : "false"}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                </div>

                {/* Navbar Links */}
                <div className={`flex-col lg:flex-row lg:flex ${isMenuOpen ? 'flex' : 'hidden'} lg:block w-full lg:w-auto`} id="navbar-dropdown">
                    {localStorage.getItem('usertoken') ? (
                        <ul className="flex flex-col lg:flex-row ">
                            <li className="mx-2 text-sm font-thin"><NavLink to="/">Home</NavLink></li>
                            <li className="mx-2 text-sm"><NavLink to="products">Products</NavLink></li>
                            <li className="mx-2 text-sm"><NavLink to="brands">Brands</NavLink></li>
                            <li className="mx-2 text-sm"><NavLink to="category">Categories</NavLink></li>
                            <li className="mx-2 text-sm"><NavLink to="whishlist">Wishlist</NavLink></li>
                        </ul>
                    ) : (
                        <ul className="flex flex-col lg:flex-row items-center">
                            <li className="mx-2 text-sm"><NavLink to="register">Register</NavLink></li>
                            <li className="mx-2 text-sm"><NavLink to="login">Login</NavLink></li>
                        </ul>
                    )}
                </div>

                {/* Cart and Logout */}
                {localStorage.getItem('usertoken') && (
                    <div className="flex items-center space-x-4 mt-4 lg:mt-0">
                        <NavLink to="cart" className="relative">
                            <i className="fa-solid fa-cart-shopping text-gray-700" style={{ fontSize: '24px' }}></i>
                            <span className="absolute -top-1 -right-2 bg-green-600 text-white text-xs px-1 rounded-md">{cart.numOfCartItems}</span>
                        </NavLink>
                        <span onClick={logout} className="cursor-pointer text-sm text-gray-700 hover:text-red-600">Logout</span>
                    </div>
                )}
            </div>
        </nav>
    );
}
