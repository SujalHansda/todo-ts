import { Response, Request } from "express"
import { ITodo } from "../types/todo"
import Todo from "../models/models"

const getAllTodos = async (req: Request, res: Response): Promise<void> => {
    try {
        const todos: ITodo[] = await Todo.find()
        res.status(200).json({ todos })
    } catch (error: any) {
        console.log(error.message)
        res.status(500).json({ error: error.message })
    }
}

const getTodos = async (req: Request, res: Response): Promise<void> => {
    try {
        const newTodo: ITodo | null = await Todo.findById(req.params.id)
        res.status(200).json({ todo: newTodo })
    } catch (error: any) {
        console.log(error.message)
        res.status(400).json({ error: error.message })
    }
}

const getTodoByTitle = async (req: Request, res: Response): Promise<void> => {
    try {
        const query = { title: req.query.title };
        const newTodo: ITodo | null = await Todo.findOne(query)
        res.status(200).json({ todo: newTodo })
    } catch (error: any) {
        console.log(error.message)
        res.status(400).json({ error: error.message })
    }
}

const addTodo = async (req: Request, res: Response): Promise<void> => {
    try {
        //Creating a new type that only includes the title, description, and status properties from ITodo
        //and asserting the type of req.body to that type
        const body = req.body as Pick<ITodo, "title" | "description" | "status">
        if (body.status === undefined) body.status = true;
        const todo: ITodo = new Todo({
            title: body.title,
            description: body.description,
            status: body.status,
        })

        const newTodo: ITodo = await todo.save()
        const allTodos: ITodo[] = await Todo.find()
        res
            .status(201)
            .json({ message: "Todo added", todos: allTodos })
    } catch (error: any) {
        console.log(error.message)
        res.status(400).json({ error: error.message })
    }
}

const updateTodo = async (req: Request, res: Response): Promise<void> => {
    try {
        const {
            params: { id },
            body,
        } = req
        const updateTodo: ITodo | null = await Todo.findByIdAndUpdate(
            { _id: id },
            body
        )
        const allTodos: ITodo[] = await Todo.find()
        res.status(200).json({
            message: "Todo updated",
            todos: allTodos,
        })
    } catch (error: any) {
        console.log(error)
        res.status(400).json({ error: error.message })
    }
}

const deleteTodo = async (req: Request, res: Response): Promise<void> => {
    try {
        const deletedTodo: ITodo | null = await Todo.findByIdAndRemove(
            req.params.id
        )
        const allTodos: ITodo[] = await Todo.find()
        res.status(200).json({
            message: "Todo deleted",
            todos: allTodos,
        })
    } catch (error: any) {
        console.log(error)
        res.status(400).json({ error: error.message })
    }
}

const deleteAllTodo = async (req: Request, res: Response): Promise<void> => {
    try {
        const deletedTodo = await Todo.deleteMany({});
        res.status(200).json({
            message: "All Todos deleted",
            todos: deletedTodo
        })
    } catch (error: any) {
        console.log(error)
        res.status(400).json({ error: error.message })
    }
}

export { getTodos, getAllTodos, addTodo, updateTodo, deleteTodo, deleteAllTodo, getTodoByTitle }