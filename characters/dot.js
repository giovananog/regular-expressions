// . matches one position with any character (in theory)

const text = '1,2,3,4,5,6,7,8,9,0'

console.log(text.match(/1.2/g))    // [ '1,2' ]
console.log(text.match(/1..2/g))   // null
console.log(text.match(/1..,/g))   // [ '1,2,' ]


const notes = '8.3,7.1,8.8,10.0'    

console.log(notes.match(/8../g))    // [ '8.3', '8.8' ]
console.log(notes.match(/.\../g))   // [ '8.3', '7.1', '8.8', '0.0' ]



// theres a problem, it doesnt match the \n character
        // some languages have the dotall flag, but is not the case of js

// a solution:


const texto = 'Roma \n, remar'

console.log(texto.match(/^r.*r$/gi)) // problema do dotall (1)
console.log(texto.match(/^r[\s\S]*r$/gi))  // (2)


// // outputs

// (1) - nulll

// (2) - \s - all spaces, \S all thats not space
        // [ 'Roma \n, remar' ]