function sum() {
    // const numbers = Array.from(arguments)
    const numbers = [...arguments]
    return numbers.reduce(function (sum, atual) {
        return sum + atual
    }, 0)
}
function avarege() {
    return sum(...arguments) / arguments.length
}

(function () {
    const alunos = [
        { nome: "Daniel", notas: [10, 3, 7.5, 3] },
        { nome: "Maria", notas: [10, 9, 3, 9.5] },
        { nome: "João", notas: [10, 4.5, 1, 3.5] },
        { nome: "Joana", notas: [1, 3, 9, 1.5] },
        { nome: "José", notas: [10, 4.5, 7, 3] },
        { nome: "Arnaldo", notas: [10, 4.5, 7, 3] },
        { nome: "Lucas", notas: [4.5, 9, 8, 3] },
        { nome: "Luana", notas: [3, 7, 9, 3] },
        { nome: "Beatriz", notas: [10, 4, 7, 9] },
        { nome: "Sergio", notas: [4.5, 9.5, 10, 2] }
    ];

    alunos.forEach(aluno => {
        // aluno.media = avarege(...aluno.notas)
        aluno.media = avarege.apply(null, aluno.notas)
    })

    const html = alunos.map(aluno => `
        <tr class="${aluno.media < 6 ? "reproved" : "aproved"}">
            <td>${aluno.nome}</td>
            ${aluno.notas.map(n => `<td> ${n} </td>`).join("")}
            <td>${aluno.media}</td>
        </tr>
    `).join("")

    document.querySelector("tbody").innerHTML = html

    console.log(html)
})()