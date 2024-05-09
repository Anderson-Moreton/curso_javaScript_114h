console.log(opener)

if (opener) {
    opener.teste2()
}

document.getElementById("btnBack").addEventListener("click", function () {
    history.back()
})

document.getElementById("btnForward").addEventListener("click", function () {
    history.forward()
})

document.getElementById("btnClose").addEventListener("click", function () {
    close()
})