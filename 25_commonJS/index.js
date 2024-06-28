const fs = require("fs");
const emoji = require("node-emoji");

const mod1 = require("./modules/mod1")
console.log("mod1")
console.log(mod1.fn)
console.log(mod1.fn())

fs.writeFile("text-txt", "Olá Mundo", err => {
    if(err) throw err
    console.log("Saved!", emoji.get("coffee"))
})

