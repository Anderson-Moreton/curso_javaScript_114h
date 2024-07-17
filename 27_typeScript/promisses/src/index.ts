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