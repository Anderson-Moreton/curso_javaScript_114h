function showFeedback(message: string, type: String): void {
    alert(type.toLocaleUpperCase() + ": " + message)
}

const feedback = showFeedback("Olá", "Mundo")

function showError(message: string): never {
    throw new Error("Função marcada com never nunca retorna nada")
}

const error = showError("Mensagem de erro")