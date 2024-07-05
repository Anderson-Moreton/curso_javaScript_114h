type User = {
    name: string,
    id: number
}

type levelAdmin = "Dev Junior" | "Teacher" | "Dev Sênior"

type Admin = {
    isAdmin: true,
    level: levelAdmin
}

type UserAdmin = User & Admin

let anderson: UserAdmin = {
    name: "Anderson",
    id: 0,
    isAdmin: true,
    level: "Dev Junior"
}