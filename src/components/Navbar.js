import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="z-10 shadow-sm px-2 sticky top-0 md:w-100 md:mx-auto py-2 raleway bg-kimiGray">
            <nav className="border-gray-200">
                <div className="container mx-auto flex flex-wrap items-center justify-between relative">
                    <a href="/" className="flex">
                        <img className="h-12 mr-3" width="auto" src="../logo22.png" alt="kimipay logo" />
                    </a>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        type="button"
                        className="md:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
                        aria-controls="mobile-menu"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        {isMenuOpen ? (
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                            </svg>
                        )}
                    </button>
                    <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block w-full md:w-auto`} id="mobile-menu">
                        <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium items-center">
                            <li className="my-2 md:my-0">
                                <NavLink
                                    to="/services"
                                    className={({ isActive }) =>
                                        isActive ? 'text-kimiBlue border-b-2 border-kimiBlue font-semibold' : 'hover:text-gray-600 hover:bg-gray-50'
                                    }
                                >
                                    Services
                                </NavLink>
                            </li>
                            <li className="my-2 md:my-0">
                                <NavLink
                                    to="#"
                                    className="uppercase font-bold text-sm shadow-md bg-white text-black px-7 py-3 rounded-3xl sm:w-xl hover:text-kimiBlue"
                                >
                                    Login
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
