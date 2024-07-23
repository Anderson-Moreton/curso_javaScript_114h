//Partial

type Square = {
    x: number,
    y: number,
    width: number,
    height: number
}

type UpdateSquare = (a: Square, b: Partial<Square>) => Square

const square: Square = {
    x: 10,
    y: 20,
    width: 100,
    height: 200
}

// const square2: Partial<Square> = { x: 30 }


const updateSquare: UpdateSquare = (a, b) => {
    return Object.assign({}, a, b)
}

const square3 = updateSquare(square, { x: 70 })

console.log(square)
// console.log(square2)
console.log(square3)


//Pick
type Position = Pick<Square, "x" | "y">
const position: Position = {
    x: 20,
    y: 50
}

// Omit
type Size = Omit<Square, "x" | "y">
const size: Size = {
    width: 200,
    height: 300
}

// Exclude<T, U>
type SquareColor = "red" | "blue" | "green" | "black" | "white"

type SaturatedColor = Exclude<SquareColor, "black" | "white">

type SadColor = "black" | "white" | "gray" | "blue dark"

//Extract
type SadSquareColor = Extract<SquareColor, SadColor>
type HappySquareColor = Exclude<SquareColor, SadColor>
               
type User = {
    readonly name: string,
    email: string,
    id?: number
}


//Required
type UserGet = Required<User>

type UserPatch = Partial<User>
const maria: UserPatch = { id: 2 }

// Readonly
type UserRead = Readonly<User>
const anderson: User = {
    name: "Anderson",
    email: "anderson.moreton@gmail.com"
}

anderson.email = "email alterado"

//NonNullable
type Cpf = {cpf: string}
type Cnpj = {cnpj: string}

type User2 = Cpf | Cnpj | null | undefined

const user: NonNullable<User2> = {
    cpf: ""
}

//Redord<T, U>

type Url = {
    url: string
}

type SocialMedia = "facebook" | "instagram" | "youtube" | "tiktok"

const media: Record<SocialMedia, Url> = {
    facebook: {url: "facebook.com"},
    instagram: {url: "instargam.com"},
    youtube: {url: "youtube.com"},
    tiktok: {url: "tiktok.com"}
}

console.log(media)

// Conditional Types

type MyString = string
type MyType = MyString extends string | number ? string : boolean

function myFunction<T>(paran: T extends string ? string : number){

}

myFunction<boolean>(20)

function myFunction2<T>(param: T){
    return function(param2: T extends number ? boolean : MyString){

    }
}

const minhaFuncao = myFunction2(100)
minhaFuncao(true)

type NumberOrNever<T> = T extends number ? number : never

const teste : NumberOrNever<number> = 10

// type OnePropertyOfSquare = "x"| "y" | "width" | "heiht"
type OnePropertyOfSquare = keyof Square
let onePropertyOfSquare: OnePropertyOfSquare = "x"

//Mapped Types

type Props = "x" | "y" | "z" | "a"

// type MappedProps = {
//     "x": number,
//     "y": number,
//     "z": number,
//     "a": number
// }

type MappedFromProps<T extends string | number | symbol> = {
    [P in T]: P
}

type MyMappedTypes = MappedFromProps<Props>

type MappedFromProps2<T> = {
    readonly [P in keyof T] : T[P]
}

type Teste = MappedFromProps2<{a: boolean, b: "b"}>