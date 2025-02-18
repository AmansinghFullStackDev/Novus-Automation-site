import React from 'react'
import logo from '../../../assets/logos/Novus.png'

import { TbDots } from "react-icons/tb";
import { HiOutlineSupport } from "react-icons/hi";
import { BsCart3 } from "react-icons/bs";
import { TbCurrencyDollar } from "react-icons/tb";
import { TbCpu } from "react-icons/tb";
import { TbActivityHeartbeat } from "react-icons/tb";
import { MdOutlineQueueMusic } from "react-icons/md";
import { CiGrid41 } from "react-icons/ci";

const Collapsed = () => {
    return (
        <section className='h-full w-full'>

            {/* for sidebar */}
            <div className='h-full w-full bg-green-500 px-4'>

                {/* header */}
                <a href="https://www.novusapl.com/" target="_blank" rel="noopener noreferrer">
                    <button className='flex items-center justify-center rounded-full p-3 bg-gray-100 hover:bg-gray-200'>
                        <img
                            className='w-26 h-16'
                            src={logo} alt="Novus logo" />
                    </button>
                </a>

                {/* for Home */}
                <ul className='bg-red-500 flex flex-col items-center justify-center'>
                    <li><TbDots /></li>
                    <li>
                        <HiOutlineSupport />
                    </li>
                    <li>
                        <BsCart3 />
                    </li>
                    <li>
                        <TbCurrencyDollar />
                    </li>
                    <li>
                        <TbCpu />
                    </li>
                    <li>
                        <TbActivityHeartbeat />
                    </li>
                    <li>
                        <MdOutlineQueueMusic />
                    </li>
                    <li>
                        <CiGrid41 />
                    </li>

                </ul>

                {/* for Apps */}
                <ul className='bg-red-900'>
                    <li><TbDots /></li>
                    <li>
                        <HiOutlineSupport />
                    </li>
                    <li>
                        <BsCart3 />
                    </li>
                    <li>
                        <TbCurrencyDollar />
                    </li>
                    <li>
                        <TbCpu />
                    </li>
                    <li>
                        <TbActivityHeartbeat />
                    </li>
                    <li>
                        <MdOutlineQueueMusic />
                    </li>
                    <li>
                        <CiGrid41 />
                    </li>

                </ul>
            </div>

        </section>
    )
}

export default Collapsed