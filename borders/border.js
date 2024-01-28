const text = 'Romário era um excelente jogador\n, mas hoje é um político questionador'

console.log(text.match(/r/gi))
    // [ 'R', 'r', 'r', 'r', 'r' ]


console.log(text.match(/^r/gi)) // ^ begin of line/string
    // [ 'R' ]

console.log(text.match(/r$/gi)) // $ end of line/string
    // [ 'r' ]

console.log(text.match(/^r.*r$/gi)) // dotall problem
    // null