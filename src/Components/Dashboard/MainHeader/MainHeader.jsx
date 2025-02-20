import React, { useState } from 'react'

import indianFlag from '../../../assets/Flag_of_India.svg.png'
import user1 from '../../../assets/users/user-1.jpg'

import Badge from "@mui/material/Badge";

import { LuMenu } from "react-icons/lu";
import { GoSearch } from "react-icons/go";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SearchModal from './SearchModal';

const MainHeader = ({ toggleSidebar }) => {

  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const hanleOpen = () => setIsSearchModalOpen(!isSearchModalOpen);

  return (
    <section className='h-full w-full flex items-center'
      style={{ fontFamily: '"Plus Jakarta Sans",sans-serif', color: '#5a6a85' }}>

      {/* !st part */}
      <ul className='flex gap-1' style={{ color: '#2a3547' }}>

        <li className='menu-icon h-16 w-16 flex items-center justify-center rounded-full hover:bg-[#5d87ff1a] hover:text-[#5d87ff]' onClick={toggleSidebar}>
          <LuMenu className='text-[30px]' />
        </li>

        <li className="search-icon h-16 w-16 flex items-center justify-center rounded-full hover:bg-[#5d87ff1a]"
          onClick={() => setIsSearchModalOpen(!isSearchModalOpen)}
        >
          <GoSearch className="text-[30px] hover:text-[#5d87ff]" />
          <SearchModal
            isOpen={isSearchModalOpen}
            onClose={() => setIsSearchModalOpen(false)}
          />
        </li>

      </ul>

      {/* 2nd part */}
      <div className='flex items-center justify-center gap-1 text-xl mx-6'>
        <div className='h-12 w-28 flex items-center justify-center rounded-lg hover:bg-[#5d87ff1a] hover:text-[#5d87ff]'>
          <h6>Apps</h6>
          <MdKeyboardArrowDown />
        </div>
        <ul className='flex items-center justify-center gap-10'>
          <li className='flex items-center justify-center p-2'>
            <h6 className='hover:text-[#5d87ff]'>Chat</h6>
          </li>
          <li className='h-16 w-16 flex items-center justify-center p-2'>
            <h6 className='hover:text-[#5d87ff]'>Calendar</h6>
          </li>
          <li className='h-16 w-16 flex items-center justify-center p-2'>
            <h6 className='hover:text-[#5d87ff]'>Email</h6>
          </li></ul>

      </div>

      {/* 3rd part */}
      <div className=''>
        <ul className='bg-red-500 flex items-center'>

          <li>
            <IoMoonOutline />
          </li>
          <li>
            <img src={indianFlag} alt="flag"
              className='w-8 h-8 rounded-full'
            />
          </li>
          <li>
            <Badge color="warning" badgeContent={4}>
              <ShoppingBasketOutlinedIcon />
            </Badge>
          </li>
          <li>
            <Badge color="primary" variant='dot'>
              <NotificationsActiveOutlinedIcon />
            </Badge>
          </li>
          <li>
            <div className=''>
              <img src={user1} alt=""
                className='rounded-full bg-purple-200 w-10 h-10'
              />
            </div>
          </li>

        </ul>
      </div>

    </section>
  )
}

export default MainHeader