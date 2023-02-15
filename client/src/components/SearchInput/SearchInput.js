import { useState } from "react";
//===================================

function SearchInput() {

  const [input, setInput] = useState('');

  return (
    <div className='flex justify-center pt-10'>
      <form className='flex'>
        <input className='lg:w-80 px-4 border-2 rounded-md focus:outline-none' type="text" value={input} />
        <button className='transition ease-in-out duration-300 ml-4 bg-white border-black rounded-md border-2 px-4 hover:bg-black hover:text-white'>Add Task</button>
      </form>
    </div>
  )
}

export default SearchInput