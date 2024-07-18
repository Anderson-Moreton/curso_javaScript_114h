type Action<T = string> = {
    action: T
}

const step1: Action<number> = {
    action: 0
}

step1.action = 20

const step2: Action<boolean> = {
    action: true
}

console.log(step1)
console.log(step2)

const step3: Action = {
    action: "Qualquer valor"
}

console.log(step3)

type NumberOrString = number | string
interface ActionI<T extends NumberOrString = string, U = number> {
    action: T,
    timestamp: U
}

const step4: ActionI = {
    action: "delete",
    timestamp: 123
}

const historyActions: Array<ActionI> = []

const AddAction = <T extends ActionI & { id: number}>(obj: T) => {
    console.log("AddActions")
    console.log(obj)
    const result = {
        ...obj,
        _id: obj.id + "_" + obj.timestamp
    }
    historyActions.push(obj)
}

AddAction({
    action: "delete",
    timestamp: 123,
    teste: "Olá Mundo",
    id: 456
})

console.log(historyActions)

export default "teste"