"use client";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React, { useState } from "react";

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="sticky top-0 shadow-[20px]">
      <header className="bg-gray-50 text-black px-4 py-2 lg:py-3 flex flex-wrap justify-between items-center shadow-sm ">
        {/* Logo */}
        <div className="flex items-center md:px-16 lg:px-24 ">
          <Link href="/">
            <img
              src="./logo.png"
              alt="Logo"
              className="md:w-30 md:h-10 h-10  mr-4 object-fill"
            />
          </Link>
          {/* <span className="text-lg font-bold">Blaze Mart</span> */}
        </div>

        {/* Navigation - Hidden on Mobile */}
        <nav className="hidden lg:flex      ">
          {/* Add your navigation items here */}
          <Link href="/" className="mx-4">
            Home
          </Link>
          <Link href="/profile" className="mx-4">
            Profile
          </Link>
          <Link href="/events/create" className="mx-4">
            Create Event
          </Link>
          {/* Add more items as needed */}
        </nav>

        {/* Mobile Menu and Profile Icon */}
        <div className="flex items-center   w-fit gap-x-4 mt-4 lg:mt-0 lg:ml-auto  ">
          {/* Profile Icon */}
          <div className="relative lg:hidden   -mt-4">
            <UserButton afterSignOutUrl="/" />
            {/* Add dropdown menu for profile if needed */}
          </div>

          {/* Mobile Toggle Menu Button (Hamburger Icon) */}
          <div className="lg:hidden  -mt-2">
            <button className="text-gray-800 " onClick={toggleMobileMenu}>
              {/* Hamburger Icon */}
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-9 h-9"
              >
                <path d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Full-screen Overlay */}

        {isMobileMenuOpen &&

          <div className="lg:hidden fixed inset-0 bg-white text-black z-50 p-4 delay-75 ">
            {/* Close Button */}



            <button
              className="absolute top-5 right-4 text-black text-4xl "
              onClick={toggleMobileMenu}
            >
              {/* Cross Icon */}
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-9 h-9"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Mobile Navigation */}
            <nav className="flex  items-center justify-center  w-full h-full  z-10 ">
              {/* Add your mobile navigation items here */}
              <div className="flex flex-col items-center text-2xl  font-mono font-bold text-gray-700">
                <Link href="/" className="my-2" onClick={toggleMobileMenu}>
                  Home
                </Link>
                <Link
                  href="/profile"
                  className="my-2"
                  onClick={toggleMobileMenu}
                >
                  Profile
                </Link>
                <Link
                  href="/events/create"
                  className="my-2"
                  onClick={toggleMobileMenu}
                >
                  Create Event
                </Link>
                <SignedOut>
                  <Link href="/sign-in" className="my-2">
                    Sign In
                  </Link>
                  <Link href="/sign-up" className="my-2">
                    Sign Up
                  </Link>
                </SignedOut>
              </div>




              {/* Add more items as needed */}
            </nav>

          </div>}

        {/* Login and Sign Up Buttons for Larger Screens */}

        <div className="hidden lg:flex  mt-4 lg:mt-0  text-sm ">
          <SignedOut>
            <Link href="/sign-in" className="bg-[#ecf0f1] text-gray-700 px-3 py-2 rounded-l-xl mr-1">
              Sign In
            </Link>
            <Link href="/sign-up" className="bg-[#ecf0f1] text-gray-700 px-3 py-2 rounded-r-xl mr-4">
              Sign Up
            </Link>

          </SignedOut>
        </div>

        <div className="hidden lg:px-32 lg:flex ">
          <UserButton afterSignOutUrl="/" />
        </div>



      </header>

    </div>
  );
}

export default Header;
