"use client";

import Link from "next/link";
import React, { use } from "react";
import Image from "next/image";
import { HiMenu } from "react-icons/hi";
import { GrClose } from "react-icons/gr";
import { useState, useEffect } from "react";

const navigationMenu = [
  {
    name: "Games",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const Navigation = () => {
  const [navOpen, setNavOpen] = useState(false);

  const mobileNavBar = () => {
    setNavOpen(!navOpen);
  };

  return (
    <>
      <header className="py-7">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-center">
            {/* logo */}
            <div>
              <Link href="/">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={50}
                  height={50}
                />
              </Link>
            </div>

            {/* navigation Menu */}
            <div className="hidden lg:block">
              <ul className="flex items-center space-x-7">
                {navigationMenu.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-gray-600 hover:text-gray-900"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div>
              <Link
                href="/get-started"
                className="px-5 py-4 bg-primary text-white rounded-lg hidden lg:inline-block"
              >
                Get Started
              </Link>

              <button className="block lg:hidden" onClick={mobileNavBar}>
                <HiMenu className="text-4xl text-black" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* mobile nav menu */}
      <div
        className={
          navOpen
            ? "py-0 block fixed w-screen z-[9999]"
            : "py-0 hidden fixed w-screen z-[9999]"
        }
      >
        <div
          className="h-screen w-screen z-[999] top-0 fixed text-black bg-opacity-50"
          onClick={mobileNavBar}
        ></div>

        <div className="bg-white w-[380px] top-0 right-0 z-[9999] h-screen fixed">
          <div className="h-14 px-10 border-b flex items-center">
            <button
              className="flex items-center space-x-3"
              onClick={mobileNavBar}
            >
              <GrClose className="text-2xl text-black" />
              <span className="text-xl">Close</span>
            </button>
          </div>

          <div className="h-full py-3 px-10 pb-20 overflow-y-scroll scroll-smooth">
            <ul className="flex flex-col space-y-5">
              {navigationMenu.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="group flex items-center py-2 duration-300 transition-all ease-in-out hover:text-primary"
                  >
                    <span>{item.name}</span>
                    <span className="left-2 relative duration-300 transition-all ease-in-out opacity-0 group-hover:opacity-100">
                      &rarr;
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
