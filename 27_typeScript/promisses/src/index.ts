import axios from "axios"

type ResponseUser = {
    name: string,
    id: number,
    email: string
}

axios.get<Array<ResponseUser>>("https://localhost:3001/users").then((response) => {
    const resposta = response.data[0]
    console.log(resposta)
})

const maria: ResponseUser = { name: "maria", id: 2, email: "maria.gostosa@gmail.com" }
maria.id++
axios.post<ResponseUser>("https://localhost:3001/users", maria).then( (response) => {
    console.log(response.data.id)
})
