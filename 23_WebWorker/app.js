let count = 0
document.querySelector("img").addEventListener("click", () => {
  console.log("clicou na imagem", ++count)
})

const worker = new Worker('worker.js')

document.querySelector("button").addEventListener("click", function () {
  worker.postMessage("mensagem enviada pelo worker")
})

worker.addEventListener("message", function (e) {
  console.log(e)
  console.log(e.data)
})