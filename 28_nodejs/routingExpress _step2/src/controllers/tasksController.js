const repository = require('./../repository/tasks.repository')

const tasks = require('./../../data/tasks.json')

exports.get = async(req, res) => {
    try {
        let tasks = await repository.get()
        res.status(200).send(tasks)
    } catch (e) {
        res.status(500).send({ message: "Erro 500", err: e })
    }
}

exports.post = async(req, res) => {
    const {title, userId} = req.body

    const newTask = {
        title,
        completed: false,
        creatdAt: Date.now(),
        updatedAt: null,
        userId
    }

    // tasks.push(newTask)
    try {
        const data = await repository.post(newTask)
        res.status(201).send(newTask)
    } catch (e) {
        res.status(500).send({ message: "Erro 500", err: e })
    }
}

exports.getById = async (req, res) => {
    try {
        const data = await repository.get(parseInt(req.params.id))
        res.status(200).send(data)
    } catch (e) {
        res.status(500).send({ message: "Erro 500", err: e })
    }
}

exports.put = async(req, res) => {
    const {title, completed, creatdAt, updatedAt, userId} = req.body
    const newTask = {
        title, 
        completed, 
        creatdAt, 
        updatedAt, 
        id: req.params.id,
        userId
    }

    try {
        const data = await repository.put(newTask, req.params.id)
        res.send(data)
    } catch(e) {
        res.status(500).send({ message: "Erro 500", err: e })
    }
    res.status(200).send(newTask)
}

exports.patch = async (req, res) => {
    const { title, completed, userId } = req.body

    try {
        const data = await repository.patch({title, completed, userId}, req.params.id)
        res.status(200).send(data)
    } catch(e) {
        res.status(500).send({ message: "Erro 500", err: e })
    }
}

exports.delete = async(req, res) => {
    const taskIndex = tasks.findIndex(task => task.id === parseInt(req.params.id))

    const deletedTaks = tasks.splice(taskIndex, 1)
    res.send(deletedTaks)
}