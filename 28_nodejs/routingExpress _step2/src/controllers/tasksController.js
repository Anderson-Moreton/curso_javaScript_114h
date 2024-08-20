const tasks = require('./../../data/tasks.json')

exports.get = async(req, res) => {
    res.send(tasks)
}

exports.post = async(req, res) => {
    const {title, userId} = req.body

    const newTask = {
        title,
        completed: false,
        creatdAt: Date.now(),
        updatedAt: null,
        userId,
        id: tasks[tasks.length - 1].id +1
    }

    tasks.push(newTask)
    res.send(newTask)
}

exports.getById = async(req, res) => {
    res.send(tasks.find(task => task.id === parseInt(req.params.id)))
}

exports.put = async(req, res) => {
    const {title, completed, creatdAt, updatedAt, id, userId} = req.body
    const newTask = {title, completed, creatdAt, updatedAt, id, userId}

    const taskIndex = tasks.findIndex(task => task.id === parseInt(req.params.id))
    tasks.splice(taskIndex, 1, newTask)

    res.send(newTask)
}

exports.patch = async(req, res) => {
    const { title, completed, userId } = req.body
    const taskById = tasks.find(task => task.id === parseInt(req.params.id))[0]
    const taskIndex = tasks.findIndex(task => task.id === parseInt(req.params.id))

    const updatedAt = Date.now()

    const taskUpdated = { title, completed, userId, updatedAt }

    for (let prop in taskUpdated) {
        if (typeof taskUpdated[prop] === "undefined") delete taskUpdated[prop]
    }

    const newTask = { ...taskById, ...taskUpdated }
    tasks.splice(taskIndex, 1, newTask)
    res.send(newTask)
}

exports.delete = async(req, res) => {
    const taskIndex = tasks.findIndex(task => task.id === parseInt(req.params.id))

    const deletedTaks = tasks.splice(taskIndex, 1)
    res.send(deletedTaks)
}