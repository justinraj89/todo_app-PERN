import { useState, useEffect } from "react";
import todoService from "../../utils/todoService";
//===============================================

function TodosList() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const allTodos = await todoService.getAllTodos();
    setTodos(allTodos);
  };

  const deleteTodo = async (id) => {
    await todoService.deleteTodo(id);
    setTodos(todos.filter(todo => todo.todo_id !== id))
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  console.log(todos, "TODOS FROM CLIENT");

  return (
    <div className="flex justify-center pt-10 pb-10">
      <div className="overflow-x-auto w-2/3">
        <div className="p-1.5 w-full inline-block align-middle ">
          <div className="overflow-hidden border rounded-lg ">
            <table className="min-w-full divide-y divide-gray-200 ">
              <thead className="bg-gray-100">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    Edit
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {todos.map((todo) => (
                  <tr key={todo.todo_id}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      {todo.description}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <button className="text-green-500 hover:text-green-700">
                        EDIT
                      </button>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <button className="text-red-500 hover:text-red-700" onClick={() => deleteTodo(todo.todo_id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodosList;
