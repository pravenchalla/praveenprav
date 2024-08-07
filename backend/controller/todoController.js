const Todo = require('../model/todomodel')

exports.createTodoList = async (req,res) => {
    try{
        const {title, description,completed} = req.body
        const todo = new Todo ({
            title: title,
            description: description,
            completed: completed
        })
        await todo.save()
        res.status(201).json({
            success: true,
            data: todo
        })
    }catch(error){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

exports.viewTodoList = async (req,res) => {
    try{
        const todo = await Todo.find({isDeleted: false})
        res.status(201).json({
            success: true,
            data: todo
        })
        }catch(error){
            res.status(500).json({
                success: false,
                message: err.message
        })
    }
}