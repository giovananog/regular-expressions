const text = 'phone numbers: (21) 23213 3131, 13113 1232, 21313 3131'

// solution
console.log(text.match(/(\(\d{2}\))?\s\w{5}\s\w{4}/g))