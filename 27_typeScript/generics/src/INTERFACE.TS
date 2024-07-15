type Action<T> = {
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