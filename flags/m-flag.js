// m - multline
    
const texto = `
Leo é muito legal
Emanuel foi jogar em Sergipe
Bianca é casada com Habib
`

console.log(texto.match(/\n/g))             // (1)
console.log(texto.match(/^(\w).+\1$/gi))    // (2)
console.log(texto.match(/^(\w).+\1$/gim))   // (3)


//// outputs

// (1) - find all the \n's
        // [ '\n', '\n', '\n', '\n' ]


// (2) - tries to find the text that start and end with the same letter, but consider all the string
        // null

        
// (3) - does the same, but considering line by line 
            // [
            //    'Leo é muito legal',
            //    'Emanuel foi jogar em Sergipe',
            //    'Bianca é casada com Habib'
            // ]
  

