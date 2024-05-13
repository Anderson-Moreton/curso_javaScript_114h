const str = "global string"

function teste(str) {
    console.log("----------- this de teste")
    console.log(this)
    console.log(str)

    setTimeout(() => {
        console.log("-----------")
        console.log(this)
    }, 2000)
}

const teste2 = () => {
    console.log("arrow function")
    console.log(this)
}

teste2()



//teste("parametro")
const obj = {
    foo: "bar",
    teste,
    teste2
}
obj.teste()
// obj.teste2()

const btn = document.querySelector("button")
    const _this = this

    btn.addEventListener("click", function () {
        console.log("declaraton")
        console.log(this)
        console.log(_this)
        console.log(this === _this)
     })


    btn.addEventListener("click", () => {
        console.log("arrow")
        console.log(this)
        console.log(_this)
        console.log(this === _this)
})