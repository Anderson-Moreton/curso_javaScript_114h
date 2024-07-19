import axios from "axios"
import { ResponseUser } from "./index"

async function Fn() {
    return 2
}

const fn = Fn()
fn.then(n => console.log("O valor de N:" + n))

async function getUser(id: number): Promise<ResponseUser> {
   try {
    const resposta = await axios.get<ResponseUser>("http://localhost:3001/users")
    console.log(resposta.data)
    return resposta.data
   } catch(e){
    throw new Error("Error: " + e.message)
   }
   
}

getUser(10).then(dado => {
    console.log("dado")
    console.log(dado)
}).catch(e => {
    console.log("deu ruim")
    console.log(e.message)
})