const text1 = 'O José Simão é muito engraçado... hehehehehehe'
console.log(text1.match(/(he)+/g))
    // [ 'hehehehehehe' ]





const text2 = 'http://www.site.info www.escola.ninja.br google.com.ag'
console.log(text2.match(/(http:\/\/)?(www\.)?\w+\.\w{2,}(\.\w{2})?/g))

    // [ 'http://www.site.info', 'www.escola.ninja.br', 'google.com.ag' ]