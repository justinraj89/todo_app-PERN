const express = require('express');
const router = express.Router();
const todosCtrl = require('../../controllers/todos');
//===================================================

router.post("/", todosCtrl.newTodo);
router.get("/", todosCtrl.fetchAllTodos);
router.get("/:id", todosCtrl.fetchSingleTodo);
router.put("/:id", todosCtrl.updateTodo);
router.delete("/:id", todosCtrl.deleteTodo);

//============================
module.exports = router;