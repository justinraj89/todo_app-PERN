import { useState } from "react";
import todoService from "../../utils/todoService";
//==================================================

function EditTodo({ todo }) {
  const [showModal, setShowModal] = useState(false);
  const [input, setInput] = useState(todo.description);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const editTodo = async (e) => {
    e.preventDefault();
    try {
      const editedTodo = await todoService.editTodo(todo.todo_id, input);
      setShowModal(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <button
        className="text-green-500 hover:text-green-700"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Edit
      </button>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-2/6 my-6 mx-auto">
              <div className="rounded-lg relative flex flex-col w-full bg-gray-100 outline-none focus:outline-none ">
                <div className="flex items-center justify-center p-5 border-b border-solid border-slate-200 rounded-t ">
                  <h3 className="text-3xl font-semibold text-gray-900">
                    Edit your Task?
                  </h3>
                </div>

                <div className="relative p-6 flex justify-center ">
                  <form>
                    <input
                      className="w-96 h-10 px-2 focus:outline-none"
                      type="text"
                      value={input}
                      onChange={handleChange}
                    />
                    <div className="flex items-center justify-between p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={(e) => editTodo(e)}
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
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

export default EditTodo;
