const express = require("express")
const tasks = require("./data/tasks.json")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/tasks", (req, res) => {
    res.send(tasks)
})

app.post("/tasks", (req, res) => {
    console.log(req.body)
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

})

app.route("/tasks/:id")
    .get((req, res) => {
        res.send(tasks.filter(task => task.id === parseInt(req.params.id)))
    })
    .put((req, res) => { 
        const {title, completed, creatdAt, updatedAt, id, userId} = req.body
        const newTask = {title, completed, creatdAt, updatedAt, id, userId}

        const taskIndex = tasks.findIndex(task => task.id === parseInt(req.params.id))
        tasks.splice(taskIndex, 1, newTask)

        res.send(newTask)
    })
    .patch((req, res) => { })
    .delete((req, res) => { })

app.listen(3001)