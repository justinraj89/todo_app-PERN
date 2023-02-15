import React from 'react'
import { GiAtlas } from "react-icons/gi";

function Header() {
  return (
    <div className='text-center flex justify-center mt-4'>
        <GiAtlas className='h-14 w-14'/>
        <h1 className='text-4xl font-bold font-serif italic tracking-wide pt-4'>Todo List</h1>
    </div>
  )
}

export default Header