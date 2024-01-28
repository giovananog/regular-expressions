const texto = '1,2,3,4,5,6,a.b c!d?e'

const comma = /,/
console.log(texto.split(comma))         // [ '1', '2', '3', '4', '5', '6', 'a.b c!d?e' ]
console.log(texto.match(comma))         // [ ',', index: 1, input: '1,2,3,4,5,6,a.b c!d?e', groups: undefined ]

console.log(texto.match(/,/g))          // [ ',', ',', ',', ',', ',', ',' ]
console.log(texto.match(/A/g))          // null
console.log(texto.match(/A/gi))         // [ 'a' ]
console.log(texto.match(/2/g))          // [ '2' ]
console.log(texto.match(/b c!d/))       // [
                                        //    'b c!d',
                                        //    index: 14,
                                        //    input: '1,2,3,4,5,6,a.b c!d?e',
                                        //    groups: undefined
                                        // ]



// check all characters and its code on https://unicode-table.com/pt/