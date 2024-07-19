import axios, { AxiosResponse } from "axios"

export type ResponseUser = {
    name: string,
    id: number,
    email: string
}

axios.get<Array<ResponseUser>>("https://localhost:3001/users").then((response) => {
    const resposta = response.data[0]
    console.log(resposta)
})

const maria: ResponseUser = { name: "maria", id: 2, email: "maria.gostosa@gmail.com" }

axios.post<ResponseUser>("https://localhost:3001/users", {name: "Paulo", email: "paulo.top@gmail.com"} ).then( (response) => {
    console.log(response.data.id)
})

const getUser = (id: number): Promise<AxiosResponse<ResponseUser>> => {
    return axios.get("https://localhost:3001/users/" + id)
}

console.log("getUser(2)")
getUser(2).then((resposta) => console.log(resposta.data.id))