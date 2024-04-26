const ulAlvo = document.querySelector(".alvo ul")
const ulOriginal = document.querySelector(".original ul")

// crie um nova li com texto "item 2" e a inclua na ul de div com class .alvo
const li = document.createElement("li")
li.textContent = "item 2"
ulAlvo.appendChild(li)

//Mova a última li de orignal para alvo (mas antes da primeira li). 
//Em outras palavras, a última li da original deve virar a primeira li de alvo
// parent.insertBefore(element, referencia)
ulAlvo.insertBefore(ulOriginal.lastElementChild, ulAlvo.firstElementChild)

//altere o texto da primeira li de .alvo para "item 0"
ulAlvo.children[0].textContent = "item 0"

//clone a ul de .original e a inclua na primeira li de .alvo
const ulClone = ulOriginal.cloneNode(true)
ulAlvo.firstElementChild.appendChild(ulClone)

//remova a ultima li (item2) da lista inserida na etapa anterior
console.log(ulClone)
ulClone.removeChild(ulClone.lastElementChild)

//remova as duas li's que sobraram na ul original
ulOriginal.innerHTML = ""