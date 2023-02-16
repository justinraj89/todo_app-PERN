import { useState } from "react";
import todoService from "../../utils/todoService";
//==================================================

function DeleteTodo({ todo, todos, setTodos }) {
  const [showModal, setShowModal] = useState(false);

  const deleteTodo = async (id) => {
    await todoService.deleteTodo(todo.todo_id);
    setTodos(todos.filter((todo) => todo.todo_id !== id));
  };

  return (
    <>
      <button
        className="text-red-500 hover:text-red-700"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Remove
      </button>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-2/6 my-6 mx-auto">
              <div className="rounded-lg relative flex flex-col w-full bg-zinc-300 outline-none focus:outline-none ">
                <div className="flex items-center justify-center p-5 rounded-t ">
                  <h3 className="text-3xl font-semibold text-gray-900">
                    Remove Task?
                  </h3>
                </div>

                <div className="relative p-6 flex justify-center ">
                  <div className="flex items-center justify-between p-6 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Nevermind
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={(e) => deleteTodo(e)}
                    >
                      Task completed
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default DeleteTodo;
