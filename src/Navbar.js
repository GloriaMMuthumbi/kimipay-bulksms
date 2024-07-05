import React, { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return ( 
        <div className="sticky bg-opacity-75 top-0 w-100 mx-auto py-2 raleway bg-kimiGray">
            <nav className="border-gray-200">
                <div className="container mx-auto flex flex-wrap items-center justify-between relative">
                    <a href="/" className="flex">
                        <img className="h-12 mr-3" width="auto" src="../logo22.png" alt="kimipay logo" />
                    </a>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        type="button"
                        className="md:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
                        aria-controls="mobile-menu-2"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                        </svg>
                        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                    </button>
                    <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block w-full md:w-auto`} id="mobile-menu">
                        <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium items-center">
                            <li>
                                <button
                                    id="dropdownNavbarLink"
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className="hover:font-semibold border-b border-gray-100 md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:hover:text-bold md:p-0 font-medium flex items-center justify-between w-full md:w-auto"
                                >
                                    Services <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </button>
                                <div className={`${isDropdownOpen ? 'absolute' : 'hidden mb-5'} bg-white text-base z-10 list-none divide-y raleway divide-gray-100 rounded shadow my-4 w-44`}>
                                    <ul className="py-1 text-left font-normal" aria-labelledby="dropdownLargeButton">
                                        <li>
                                            <a href="/" className="text-sm font-medium hover:bg-gray-100 text-gray-700 block px-4 py-2">Bulk SMS</a>
                                        </li>
                                        <li>
                                            <a href="/" className="text-sm font-medium hover:bg-gray-100 text-gray-700 block px-4 py-2">RBT & Skiza Tunes</a>
                                        </li>
                                        <li>
                                            <a href="/" className="text-sm font-medium hover:bg-gray-100 text-gray-700 block px-4 py-2">SMS Shortcodes</a>
                                        </li>
                                        <li>
                                            <a href="/" className="text-sm font-medium hover:bg-gray-100 text-gray-700 block px-4 py-2">USSD</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <button className="uppercase font-bold text-sm shadow-md bg-white text-black px-7 py-3 rounded-3xl sm:w-xl hover:text-kimiBlue">Login</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
     );
}
 
export default Navbar;