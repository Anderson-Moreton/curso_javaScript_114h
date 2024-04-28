const msg = document.getElementById("msg")

msg.addEventListener("keypress", keypress)
msg.addEventListener("keyup", keyup)
msg.addEventListener("keydown", keydown)

function keypress(e) {
    console.log("keypress")
    console.log(this.value)
}

function keydown(e) {
    console.log("keydown")
    console.log(this.value)
}

function keyup(e) {
    console.log("keyup")
    console.log(this.value)
}