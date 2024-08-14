const path = require("path")
const express = require("express")

const app = express()

// app.get("/", (req, res) => {
//     res.send("Hello World!")
// })

//O servidor estático para a rota "/"
app.use(express.static("static"))

//O servidor estático para a rota "/images"
// app.use("/images", express.static("images")) // relativo ao local onde foi executado o servidor

app.use("/images", express.static(path.join(__dirname, "images")))

app.get("*", (req, res) => {
    if(req.accepts("html")) {
        res.status(404).sendFile(path.join(__dirname, "404.html"))
    }
})
 
app.listen(3001)