const text = 'list of emails: aaa@aaa.com, aa.sads@as.ads, aaa@aaaa.com.br'

// solution
console.log(text.match(/\w*\.*\w+@\w+\.\w*/gi))