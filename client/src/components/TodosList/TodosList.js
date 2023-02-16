import { useState, useEffect } from "react";
import todoService from "../../utils/todoService";
import EditTodo from "../EditTodo/EditTodo";
import DeleteTodo from "../DeleteTodo/DeleteTodo";
//===============================================

function TodosList({ todos, setTodos }) {
  const fetchTodos = async () => {
    const allTodos = await todoService.getAllTodos();
    setTodos(allTodos);
  };



  useEffect(() => {
    fetchTodos();
  }, [todos]);

  return (
    <div className="flex justify-center pt-10 pb-10">
      <div className="overflow-x-auto w-2/3">
        <div className="p-1.5 w-full inline-block align-middle ">
          <div className="overflow-hidden border rounded-lg ">
            <table className="min-w-full divide-y divide-gray-200 ">
              <thead className="bg-zinc-900">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-md font-bold text-left text-gray-100 uppercase "
                  >
                    Task
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-md font-bold text-right text-gray-100 uppercase "
                  >
                    Edit
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-md font-bold text-right text-gray-100 uppercase "
                  >
                    Remove From List
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {todos.map((todo) => (
                  <tr key={todo.todo_id}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-100 whitespace-nowrap">
                      {todo.description}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <EditTodo todo={todo} />
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <DeleteTodo todo={todo} todos={todos} setTodos={setTodos}/>
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
