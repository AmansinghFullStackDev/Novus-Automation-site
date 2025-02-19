import React, { useState } from 'react'
import profile from '../../../assets/logos/novus-profile.png'

import { HiOutlineSupport } from "react-icons/hi";
import { BsCart3 } from "react-icons/bs";
import { TbCurrencyDollar } from "react-icons/tb";
import { TbCpu } from "react-icons/tb";
import { TbActivityHeartbeat } from "react-icons/tb";
import { MdOutlineQueueMusic } from "react-icons/md";
import { CiGrid41 } from "react-icons/ci";

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { GoDot } from "react-icons/go";

import { NavLink } from 'react-router-dom';

const ExpandSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className='h-full w-full flex flex-col'>

            {/* for sidebar header */}
            <div className='mx-8 mt-3'>
                <div className='px-6'>
                    <img
                        src={profile}
                        alt="Novus profile"
                        className="w-full h-auto"
                    />
                </div>
            </div>

            {/* for sidebar content */}
            <div className='h-full w-full px-6 py-8 text-[30px] space-y-12 max-h-screen hover:overflow-y-auto 
                  [&::-webkit-scrollbar]:w-2
              [&::-webkit-scrollbar-track]:rounded-full
              [&::-webkit-scrollbar-track]:bg-gray-100
              [&::-webkit-scrollbar-thumb]:rounded-full
              [&::-webkit-scrollbar-thumb]:bg-gray-300
              dark:[&::-webkit-scrollbar-track]:bg-neutral-700
              dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500'>

                {/* Home items  */}
                <div className=''>
                    <ul className='space-y-2'>
                        <li>
                            <h1 style={{
                                fontSize: '14px', fontFamily: "'Plus Jakarta Sans', sans-serif",
                                color: '#2A3547', fontWeight: 400
                            }}>
                                HOME
                            </h1>
                        </li>

                        <li>
                            {/* "https://www.novusapl.com/" */}
                            <NavLink to="https://www.novusapl.com/"
                                className={({ isActive }) => `flex px-3 gap-2 py-2 my-1 rounded-lg mt-0
                          hover:bg-[#5d87ff1a] hover:text-[#5d87ff]
                          ${isActive ? "" : "hover:bg-[#5d87ff] hover:text-white"}`
                                }>
                                <HiOutlineSupport />
                                <h1 className=''
                                    style={{ fontSize: '14px', fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#2A3547', fontWeight: 400 }}>Modern</h1>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to=""
                                className={({ isActive }) => `flex px-3 gap-2 py-2 my-1 rounded-lg 
                          hover:bg-[#5d87ff1a] hover:text-[#5d87ff]
                           ${isActive ? "" : "hover:bg-[#5d87ff]"}`
                                }>
                                <BsCart3 />
                                <h1 style={{ fontSize: '14px', fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#2A3547', fontWeight: 400 }}>eCommerce</h1>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="" className={({ isActive }) => `flex px-3 gap-2 py-2 my-1 rounded-lg 
                          ${isActive ? "bg-yellow-400 text-black font-bold" : "hover:bg-gray-700"}`
                            }>
                                <TbCurrencyDollar />
                                <h1 style={{ fontSize: '14px', fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#2A3547', fontWeight: 400 }}>NFT</h1>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="" className={({ isActive }) => `flex px-3 gap-2 py-2 my-1 rounded-lg 
                          ${isActive ? "bg-yellow-400 text-black font-bold" : "hover:bg-gray-700"}`
                            }>
                                <TbCpu />
                                <h1 style={{ fontSize: '14px', fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#2A3547', fontWeight: 400 }}>Crypto</h1>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="" className={({ isActive }) => `flex px-3 gap-2 py-2 my-1 rounded-lg 
                          ${isActive ? "bg-yellow-400 text-black font-bold" : "hover:bg-gray-700"}`
                            }>
                                <TbActivityHeartbeat />
                                <h1 style={{ fontSize: '14px', fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#2A3547', fontWeight: 400 }}>General</h1>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="" className={({ isActive }) => `flex px-3 gap-2 py-2 my-1 rounded-lg 
                          ${isActive ? "bg-yellow-400 text-black font-bold" : "hover:bg-gray-700"}`
                            }>
                                <MdOutlineQueueMusic />
                                <h1 style={{ fontSize: '14px', fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#2A3547', fontWeight: 400 }}>Music</h1>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to=""
                                className={({ isActive }) =>
                                    `px-3 gap-2 py-2 my-1 rounded-lg flex flex-col 
                            ${isActive ? "bg-yellow-400 text-black font-bold" : "hover:bg-gray-700"}`
                                }
                            >
                                <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                                    <div className="flex gap-2">
                                        <CiGrid41 />
                                        <h1
                                            style={{
                                                fontSize: "14px",
                                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                                                color: "#2A3547",
                                                fontWeight: 400,
                                            }}
                                        >
                                            Frontend page
                                        </h1>
                                    </div>
                                    {isOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
                                </div>

                                {isOpen && (
                                    <ul
                                        style={{
                                            fontSize: "14px",
                                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                                            color: "#2A3547",
                                            fontWeight: 400,
                                        }}
                                        className="ml-2 mt-2"
                                    >
                                        <li className="flex gap-8">
                                            <GoDot />
                                            <h6>Homepage</h6>
                                        </li>
                                        <li className="flex gap-8">
                                            <GoDot />
                                            <h6>About Us</h6>
                                        </li>
                                        <li className="flex gap-8">
                                            <GoDot />
                                            <h6>Contact Us</h6>
                                        </li>
                                        <li className="flex gap-8">
                                            <GoDot />
                                            <h6>Blog</h6>
                                        </li>
                                        <li className="flex gap-8">
                                            <GoDot />
                                            <h6>Blog Details</h6>
                                        </li>
                                    </ul>
                                )}
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* Apps content  */}
                <div className=''>
                    <ul className='space-y-2'>
                        <li>
                            <h1 style={{ fontSize: '14px', fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#2A3547', fontWeight: 400 }}>
                                APPS
                            </h1>
                        </li>
                        <li>
                            <NavLink to="" className={({ isActive }) => `flex px-3 gap-2 py-2 my-1 rounded-lg mt-4 
                          ${isActive ? "bg-yellow-400 text-black font-bold" : "hover:bg-gray-700"}`}>
                                <HiOutlineSupport />
                                <h1 style={{ fontSize: '14px', fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#2A3547', fontWeight: 400 }}>Modern</h1>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="" className={({ isActive }) => `flex px-3 gap-2 py-2 my-1 rounded-lg 
                          ${isActive ? "bg-yellow-400 text-black font-bold" : "hover:bg-gray-700"}`}>
                                <BsCart3 />
                                <h1 style={{ fontSize: '14px', fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#2A3547', fontWeight: 400 }}>eCommerce</h1>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="" className={({ isActive }) => `flex px-3 gap-2 py-2 my-1 rounded-lg 
                          ${isActive ? "bg-yellow-400 text-black font-bold" : "hover:bg-gray-700"}`}>
                                <TbCurrencyDollar />
                                <h1 style={{ fontSize: '14px', fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#2A3547', fontWeight: 400 }}>NFT</h1>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="" className={({ isActive }) => `flex px-3 gap-2 py-2 my-1 rounded-lg 
                          ${isActive ? "bg-yellow-400 text-black font-bold" : "hover:bg-gray-700"}`}>
                                <TbCpu />
                                <h1 style={{ fontSize: '14px', fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#2A3547', fontWeight: 400 }}>Crypto</h1>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="" className={({ isActive }) => `flex px-3 gap-2 py-2 my-1 rounded-lg 
                          ${isActive ? "bg-yellow-400 text-black font-bold" : "hover:bg-gray-700"}`}>
                                <TbActivityHeartbeat />
                                <h1 style={{ fontSize: '14px', fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#2A3547', fontWeight: 400 }}>General</h1>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="" className={({ isActive }) => `flex px-3 gap-2 py-2 my-1 rounded-lg 
                          ${isActive ? "bg-yellow-400 text-black font-bold" : "hover:bg-gray-700"}`}>
                                <MdOutlineQueueMusic />
                                <h1 style={{ fontSize: '14px', fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#2A3547', fontWeight: 400 }}>Music</h1>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to=""
                                className={({ isActive }) =>
                                    `px-3 gap-2 py-2 my-1 rounded-lg flex flex-col 
                            ${isActive ? "bg-yellow-400 text-black font-bold" : "hover:bg-gray-700"}`
                                }
                            >
                                <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                                    <div className="flex gap-2">
                                        <CiGrid41 />
                                        <h1
                                            style={{
                                                fontSize: "14px",
                                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                                                color: "#2A3547",
                                                fontWeight: 400,
                                            }}
                                        >
                                            Frontend page
                                        </h1>
                                    </div>
                                    {isOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
                                </div>

                                {isOpen && (
                                    <ul
                                        style={{
                                            fontSize: "14px",
                                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                                            color: "#2A3547",
                                            fontWeight: 400,
                                        }}
                                        className="ml-2 mt-2"
                                    >
                                        <li className="flex gap-8">
                                            <GoDot />
                                            <h6>Homepage</h6>
                                        </li>
                                        <li className="flex gap-8">
                                            <GoDot />
                                            <h6>About Us</h6>
                                        </li>
                                        <li className="flex gap-8">
                                            <GoDot />
                                            <h6>Contact Us</h6>
                                        </li>
                                        <li className="flex gap-8">
                                            <GoDot />
                                            <h6>Blog</h6>
                                        </li>
                                        <li className="flex gap-8">
                                            <GoDot />
                                            <h6>Blog Details</h6>
                                        </li>
                                    </ul>
                                )}
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>

        </section>
    )
}

export default ExpandSidebar