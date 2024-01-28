const text1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!'
const text2 = 'There is a big fog in NYC'

// ? -> zero or one (optional)
const regex = /fogo?/gi
console.log(text1.match(regex))      // [ 'fogo', 'FOGO' ]
console.log(text2.match(regex))      // [ 'fog' ]

//is this case, the 'o' is optional, thats why the output came as 'fog'


// * -> zero more
const regex2 = /fogo*/gi
console.log(text1.match(regex2))    // [ 'fogo', 'FOGOOOOOO' ]
console.log(text2.match(regex2))    // [ 'fog' ]


// + -> onde more
const regex3 = /fogo+/gi
console.log(text1.match(regex3))    // [ 'fogo', 'FOGOOOOOO' ]
console.log(text2.match(regex3))    // null


const text3 = 'numbers: 0123456789.'

console.log(text3.match(/[0-9]/g)) 
            // [
            //     '0', '1', '2', '3',
            //     '4', '5', '6', '7',
            //     '8', '9'
            // ]

console.log(text3.match(/[0-9]+/g))
            // [ '0123456789' ]