import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import "./Header.css";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const [showMenu, setShowMenu] = useState(false);

    const [navbarClass, setNavbarClass] = useState("");


    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 50) {
                setNavbarClass("fixed top-0 left-0 w-full z-10 bg-white");
            } else {
                setNavbarClass("");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={navbarClass}>
            <div className="flex items-center justify-between p-4 bg-gray-800 fixed-top md:px-10 md:py-6 md:flex-row">
                <div className="text-white font-medium my-name"><Link to="/">JobLink</Link></div>
                <div className="hidden md:flex items-center">
                    <Link
                        to="/"
                        className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                    >
                        About
                    </Link>
                    <Link
                        to="/contact"
                        className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                    >
                        Contact Us
                    </Link>

                    {
                        user?.uid ?
                            <>
                                <button variant="light" onClick={handleLogOut} className=' text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>Logout</button>
                            </>
                            :
                            <>
                                <Link
                                    to="/login"
                                    className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                                >
                                    Login
                                </Link>
                            </>
                    }


                </div>
                <div className="md:hidden">
                    <button
                        onClick={() => setShowMenu(!showMenu)}
                        className="px-3 py-2 rounded-md text-white bg-gray-900 focus:outline-none focus:bg-gray-700"
                    >
                        <svg
                            className="w-6 h-6"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            {showMenu ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="3"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="3"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
                {showMenu && (
                    <div className="md:hidden absolute right-0 top-0 mt-2 py-2 bg-gray-800 rounded-lg">
                        <Link
                            to="/"
                            className="block px-10 py-2 rounded-md text-base font-medium text-white bg-gray-800 focus:outline-none focus:text-white focus:bg-gray-700"
                            onClick={() => setShowMenu(false)}
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className="block px-10 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                            onClick={() => setShowMenu(false)}
                        >
                            About
                        </Link>
                        <Link
                            to="/contact"
                            className="block px-10 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                            onClick={() => setShowMenu(false)}
                        >
                            Contact Us
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Header;