import axios from "axios";
//===========================

const newTodo = async (todo) => {
  try {
    const url = "http://localhost:3001/api/todos";
    const res = await axios.post(url, {
      description: todo,
    });
    return res;
  } catch (err) {
    console.error(err.message);
  }
};
//--------------------------------------------------

const getAllTodos = async () => {
  try {
    const url = "http://localhost:3001/api/todos";
    const res = await axios.get(url);
    return res.data;
  } catch (err) {
    console.error(err.message);
  }
};
//---------------------------------------------------

const deleteTodo = async (id) => {
  try {
    const url = `http://localhost:3001/api/todos/${id}`;
    const res = await axios.delete(url);
  } catch (err) {
    console.error(err.message);
  }
};

//----------------------------------------------------

const editTodo = async (id, editedTodo) => {
  try {
    const url = `http://localhost:3001/api/todos/${id}`;
    const res = await axios.put(url, {
      description: editedTodo
    })
    console.log(res, 'RES FROM SERVER')
  } catch (err) {
    console.error(err.message)
  }
}

//====================
export default {
  newTodo,
  getAllTodos,
  deleteTodo,
  editTodo
};
