import React from 'react'
import '../index.css'
import { appleImg, bagImg, searchImg} from '../utils'
import {navLists} from '../constants'

function Navbar() {
  return (
    <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center '>
        <nav className='flex screen-max-width w-full '>
          <img src={appleImg} alt="" height={14} width={18} />
          <div className=" flex flex-1 justify-center max-sm:hidden  ">
            {navLists.map((nav)=>(
              <div className=" px-5 text-sm cursor-pointer text-gray hover:text-white transition-all" key={nav}>{nav}</div>
            ))}
          </div>
          <div className="flex items-baseline max-sm:justify-end max-sm:flex-1 gap-7">
          <img src={searchImg} alt="search"  height={14} width={18} />
          <img src={bagImg} alt="bag" height={14} width={18}  />

          </div>
        </nav>
    </header>
  )
}

export default Navbar