import { Router } from "express"

import { getTodoByTitle, getTodos, addTodo, updateTodo, deleteTodo, deleteAllTodo, getAllTodos } from "../controllers/todoController"

const router: Router = Router()

router.get("/todos", getAllTodos)

router.get("/todo/:id", getTodos)

router.get("/todo",getTodoByTitle)

router.post("/add-todo", addTodo)

router.put("/edit-todo/:id", updateTodo)

router.delete("/delete-todo/:id", deleteTodo)

router.delete("/delete-all-todos", deleteAllTodo)


export default router