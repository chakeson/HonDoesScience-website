import React, { useState } from 'react';
import '../index.css';
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { GiDna1 } from 'react-icons/gi';



function Navbar() {
    const [showMobileNav, setShowMobileNav] = useState(false);

	return (
        <nav className="bg-primary sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-12">
                <div className="flex justify-between">
                    <div className="py-1 flex items-center">
                        <Link to="/">
                            <GiDna1 size="4em" color="white"/>
                        </Link>
                    </div>

                    {/*PC navbar*/}
                    <div className="hidden md:flex py-1">
                        <ul className="flex items-center space-x-5 font-bold text-3xl text-white">
                            <li className="transform transition duration-700 hover:scale-105 hover:text-tertiary">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="transform transition duration-700 hover:scale-105 hover:text-tertiary">
                                <Link to="/videos">Videos</Link>
                            </li>
                            <li className="transform transition duration-700 hover:scale-105 hover:text-tertiary">
                                <Link to="/research">Research</Link>
                            </li>
                            <li className="transform transition duration-700 hover:scale-105 hover:text-tertiary">
                                <Link to="/about">About</Link>
                            </li>
                        </ul>
                    </div>
                    {/*Mobile navbar*/}
                    <div className="md:hidden flex items-center transform transition duration-700 hover:scale-10" onClick={()=>setShowMobileNav(!showMobileNav)}>
                        <FaBars  size="2em" color="white"/>
                    </div>
                </div>
            </div>
            {/*actaul dropdown menu*/}
            <div className={`${showMobileNav ? "w-full h-40 transition-all ease-out duration-500 overflow-hidden md:hidden":"w-full h-0 transition-all ease-out duration-500 overflow-hidden md:hidden"}`}>
                <ul className="block font-bold text-3xl text-white px-4 py-2">
                    <li className="transform transition duration-700 hover:text-tertiary">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="transform transition duration-700 hover:text-tertiary">
                        <Link to="/videos">Videos</Link>
                    </li>
                    <li className="transform transition duration-700 hover:text-tertiary">
                        <Link to="/research">Research</Link>
                    </li>
                    <li className="transform transition duration-700 hover:text-tertiary">
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;


/*
(
        <nav className="bg-primary h-20 flex justify-end justify-items-center">
            <div className="justify-self-start">
                <Link to="/" className="text-3xl text-white"><GiDna1 /></Link>
            </div>

            <div className="flex">
                <ul className="flex font-bold text-3xl text-white">
                    <li className="p-3">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="p-3">
                        <Link to="/videos">Videos</Link>
                    </li>
                    <li className="p-3">
                        <Link to="/research">Research</Link>
                    </li>
                    <li className="p-3">
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>

        </nav>
	);
*/