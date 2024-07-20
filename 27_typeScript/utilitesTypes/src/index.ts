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


