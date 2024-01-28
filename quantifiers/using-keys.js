const texto = 'O João recebeu 120 milhões apostando 6 9 21 23 45 46.'

// use {} to define quantifiers

console.log(texto.match(/\d{1,2}/g))
        // [
        //     '12', '0',  '6',
        //     '9',  '21', '23',
        //     '45', '46'
        // ]

console.log(texto.match(/[0-9]{2}/g))
        // [ '12', '21', '23', '45', '46' ]

console.log(texto.match(/\d{1,}/g))
        // [
        //     '120', '6',
        //     '9',   '21',
        //     '23',  '45',
        //     '46'
        // ]

console.log(texto.match(/\w{7}/g))
        // [ 'recebeu', 'apostan' ]

console.log(texto.match(/[\wõã]{7,}/g))
        // [ 'recebeu', 'milhões', 'apostando' ]
