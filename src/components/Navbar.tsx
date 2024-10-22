
"use client"

import { useEffect, useState } from 'react';
import Link from 'next/link';
import style from './Navbar.module.css'
import { redirect } from 'next/navigation';

interface UserData {
  role:string,
  email: string;
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const logoutHandler = () => {
    localStorage.removeItem("user")
    redirect('/')
  };

  useEffect(() => {
    const storedData = localStorage.getItem('user');
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);
  return (
    <nav className="bg-gray-800 p-4 px-10">
      <div className=" flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-bold">
          Test
        </Link>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>
        <div className={`md:flex md:items-center ${isOpen ? `${style.mobileNav} lg:hidden  bg-gray-800 text-white` : 'hidden'}`}>
      {userData?.role === "admin" ? 
        <>
        <Link href="/dashboard" className="text-white px-4 py-2">
          Dashboard
        </Link>
        </>
          :
        <>
          <Link href="/" className="text-white px-4 py-2">
            Home
          </Link>
          <Link href="/about" className="text-white px-4 py-2">
            About
          </Link>
          <Link href="/contact" className="text-white px-4 py-2">
            Contact
          </Link>
       </>
     
       }
          {userData ? 
          <button onClick={logoutHandler} className="bg-black text-white p-2 px-5">Logout</button> :
          <Link href="/login" className="text-white px-4 py-2">
            Login
          </Link>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

