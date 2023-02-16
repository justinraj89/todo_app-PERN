import React from 'react'
import { GiDrowning } from "react-icons/gi";
import 'animate.css';
//===============================

function Header() {
  return (
    <div className='text-center flex justify-center text-gray-200 mt-10 animate__animated animate__zoomIn'>
        <GiDrowning className='h-20 w-20'/>
        {/* <h1 className='text-3xl font-bold font-serif italic tracking-wide pt-4'>Todo List</h1> */}
    </div>
  )
}

export default Header