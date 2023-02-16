import { useState } from "react";
import todoService from "../../utils/todoService";
//===================================

function SearchInput() {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    todoService.newTodo(input);
    setInput("");
  };

  //--------------------------------------------

  return (
    <div className="flex justify-center pt-10">
      <form onSubmit={handleSubmit} className="flex">
        <input
          className="lg:w-96 md:w-80 px-4 border-2 rounded-md focus:outline-none"
          type="text"
          value={input}
          onChange={handleChange}
        />
        <button
          className="transition ease-in-out duration-300 ml-4 bg-white text-black rounded-md border-2 px-4 hover:bg-gray-100 hover:cursor-pointer hover:text-black"
          disabled={!input}
        >
          Add Task
        </button>
      </form>
    </div>
  );
}

export default SearchInput;
