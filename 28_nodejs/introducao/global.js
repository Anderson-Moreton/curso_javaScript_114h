globalThis.console.log("teste")
console.log(__filename)
console.log(__dirname)
console.log(process.argv)

// const [,, firstName, lastName] = process.argv
// console.log(`O nome é: ${firstName} ${lastName}`)

const getByFlag = flag => {
    const indexOfFlag = process.argv.indexOf(flag)
    return process.argv[indexOfFlag + 1]
}

const fistName = getByFlag("--firstname")
const lastName = getByFlag("--lastname")

console.log(`O nome é: ${fistName} ${lastName}`)