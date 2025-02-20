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
        <section className='h-full w-full px-2 py-2'>

            {/* for collapsed sidebar */}
            <div className='h-full flex flex-col gap-6'>
                <div>
                    <img className=''
                        src={logo} alt="Novus" />
                </div>
                <ul className='flex flex-col items-center gap-6 text-[30px] overflow-hidden'>
                    <li className='mt-10'>
                <TbDots />
            </li>
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
            <li>
                <TbDots />
            </li>
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
            <li>
                <TbDots />
            </li>
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

            </div >

        </section >
    )
}

export default Collapsed