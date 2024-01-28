// g - global
// i - ignore case

const texto = 'Carlos assinou o abaixo-assinado.'
console.log(texto.match(/C|ab/))        // (1)
console.log(texto.match(/c|ab/i))       // (2)
console.log(texto.match(/ab|c/gi))      // (3)



//// outputs

// (1) - matches exactly what was given
                // [
                //    'C',
                //    index: 0,
                //    input: 'Carlos assinou o abaixo-assinado.',
                //    groups: undefined
                // ]


// (2) - lowercase and uppercase are the same
                // [
                //    'C',
                //    index: 0,
                //    input: 'Carlos assinou o abaixo-assinado.',
                //    groups: undefined
                // ]

// (3) - finds in all string, not just the first match
                // [ 'C', 'ab' ]
