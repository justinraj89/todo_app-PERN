// pool is how you query postgres DB
const pool = require("../db");
//=====================================

const fetchAllTodos = async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    // the .rows comes from the JSON returned, check in postman. this will only send back the records
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
};
//--------------------------------------------------------------
const newTodo = async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = pool.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING *",
      [description]
    );
    res.json(newTodo);
  } catch (err) {
    console.error(err.message);
  }
};
//---------------------------------------------------------------
const fetchSingleTodo = async (req, res) => {
  try {
    const { id } = req.params;
    // Think of $1 as the placeholder for what you want to insert into it, the [id] is what will be put there
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
      id,
    ]);
    res.json(todo.rows);
  } catch (err) {
    console.error(err.message);
  }
};
//----------------------------------------------------------------
const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    // Again, the $1, $2 are placeholders for what will be inserted, the contents of the array after are the actual values
    const updatedTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2",
      [description, id]
    );
    res.json("Todo was Updated");
  } catch (err) {
    console.error(err);
  }
};
//-----------------------------------------------------------------
const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
    res.json("Todo was deleted");
  } catch (err) {
    console.error(err.message);
  }
};

//=======================
module.exports = {
  newTodo,
  fetchAllTodos,
  fetchSingleTodo,
  updateTodo,
  deleteTodo,
};
