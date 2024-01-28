const text = 'João é calmo, mas no transito fica nervoso.'

// all characters possible
console.log(text.match(/[\wÀ-ú]+/gi))
            // [
            //     'João',  'é',
            //     'calmo', 'mas',
            //     'no',    'transito',
            //     'fica',  'nervoso'
            // ]


// Positive lookahead
console.log(text.match(/[\wÀ-ú]+(?=,)/gi))       // [ 'calmo' ]
console.log(text.match(/[\wÀ-ú]+(?=\.)/gi))      // [ 'nervoso' ]
console.log(text.match(/[\wÀ-ú]+(?=, mas)/gi))   // [ 'calmo' ]



// Negative lookahead
console.log(text.match(/[\wÀ-ú]+\b(?!,)/gi))        // [ 'João', 'mas', 'no', 'transito', 'fica', 'nervoso' ]
console.log(text.match(/[\wÀ-ú]+[\s|\.](?!,)/gi))   // [ 'João ', 'é ', 'mas ', 'no ', 'transito ', 'fica ', 'nervoso.' ]
