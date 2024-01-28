const texto = '<div>Conteudo 01</div><div>Conteudo 02</div>'

// quantifiers are greedy...

console.log(texto.match(/<div>.+<\/div>/g))
    // [ '<div>Conteudo 01</div><div>Conteudo 02</div>' ]

console.log(texto.match(/<div>.*<\/div>/g))
    // [ '<div>Conteudo 01</div><div>Conteudo 02</div>' ]

console.log(texto.match(/<div>.{0,100}<\/div>/g))
    // [ '<div>Conteudo 01</div><div>Conteudo 02</div>' ]


//  lazy qunatifiers...

console.log(texto.match(/<div>.+?<\/div>/g))
    // [ '<div>Conteudo 01</div>', '<div>Conteudo 02</div>' ]

console.log(texto.match(/<div>.*?<\/div>/g))
    // [ '<div>Conteudo 01</div>', '<div>Conteudo 02</div>' ]

    
console.log(texto.match(/<div>.{0,100}?<\/div>/g))
    // [ '<div>Conteudo 01</div>', '<div>Conteudo 02</div>' ]





