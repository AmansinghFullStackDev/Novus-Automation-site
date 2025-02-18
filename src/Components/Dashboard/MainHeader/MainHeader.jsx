import React from 'react'
import { LuMenu } from "react-icons/lu";
import { GoSearch } from "react-icons/go";
import { MdKeyboardArrowDown } from "react-icons/md";

const MainHeader = () => {
  return (
    <section className='h-full w-full flex items-center justify-center bg-violet-500'>

      {/* !st part */}
      <ul className='bg-red-500 flex'>

        <li className='menu-icon'>
          <LuMenu />
        </li>

        <li className='search-icon'>
          <GoSearch />
        </li>
      </ul>

      {/* 2nd part */}
      <ul className='bg-yellow-500'>
        <li>
          <h6>Apps</h6>
          <MdKeyboardArrowDown />
        </li>
        
        <li></li>
        <li></li>
        <li></li>
      </ul>

      {/* 3rd part */}
      <div className='bg-purple-500'>

      </div>

    </section>
  )
}

export default MainHeader