const tasks = require('./../../data/tasks.json')

exports.get = async (id) => {
    if(!isNaN(id)) {
        return tasks.find(taks => tasks.id === parseInt(id))
    }
    return tasks
}

exports.post = async (data) => {
    const newData = {
        ...data,
        id: tasks[tasks.length - 1].id + 1
    }
    tasks.push(newData)
    return newData
}

exports.put = async (data, id) => {
    const taskIndex = tasks.findIndex(task => task.id === parseInt(id))
    tasks.splice(taskIndex, 1, data)
    return data
}

exports.patch = async (data, id) => {
    const { title, completed, userId } = data
    const taskById = tasks.find(task => task.id === parseInt(id))
    const taskIndex = tasks.findIndex(task => task.id === parseInt(id))
    const updatedAt = Date.now()
    const taskUpdated = { title, completed, userId, updatedAt }

    for (let prop in taskUpdated) {
        if (typeof taskUpdated[prop] === "undefined") delete taskUpdated[prop]
    }

    const newTask = { ...taskById, ...taskUpdated }

    tasks.splice(taskIndex, 1, newTask)
}