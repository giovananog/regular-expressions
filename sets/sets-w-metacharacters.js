const texto = '.$+*?-'

// scape is not needded on sets
console.log(texto.match(/[+.?*$]./g))
        //  [ '.$', '+*', '?-' ]


// this is a valid range
console.log(texto.match(/[$-?]/g)) 
        //  [ '.', '$', '+', '*', '?', '-' ]

// not a range
console.log(texto.match(/[$\-?]/g))
        //  [ '$', '?', '-' ]


console.log(texto.match(/[-?]/g))
        //  [ '?', '-' ]

