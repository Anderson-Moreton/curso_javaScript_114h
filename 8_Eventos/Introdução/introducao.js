const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")

function clicou() {
    console.log("click funcao clicou")
}

btn1.onclick = function () {
    console.log("click btn1 funcao anonima")
}
btn1.onclick = clicou

btn2.onclick = function () {
    console.log("funcao anonima no btn2")
}

btn2.addEventListener("click", clicou)

btn2.addEventListener("click", function () {
    console.log("click funcao anonima")
})

document.addEventListener("click", function (e) {
    console.log("clicou no document")
    console.log(e.target)
    console.log(e.currentTarget)
    console.log(this)
}, false)

btn3.addEventListener("click", function (e) {
    console.log(e)
    e.stopPropagation()
    console.log("clicou no btn3")
}, false)

const container = document.getElementById("container")
container.addEventListener("click", function () {
        console.log("clicou no container")
}, true)

const container2 = document.querySelector(".container2")
const btns = document.querySelectorAll(".container2 button")
console.log(btns);
// [...btns].forEach(btn => {
//     btn.addEventListener("click", function (e) {
//         e.stopPropagation()
//         console.log(e.target)
//     })
// })
console.log("this------", this)
container2.addEventListener("click", (e) => {
    // e.stopPropagation()
    console.log("clicou no container2")
    console.log(e.target)
    console.log(e.currentTarget)
    console.log(this)
    if (e.target.nodeName === "BUTTON") {
        // console.log(e.target)
    }
})