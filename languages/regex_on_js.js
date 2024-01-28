const text = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

const regexNine = RegExp('9')

const regexString = /[a-f]/g


// RegExp methods
console.log(regexNine.test(text))  // (1)
console.log(regexNine.exec(text))  // (2)


// String methods
console.log(text.match(regexString))                // (3)
console.log(text.search(regexString))               // (4)
console.log(text.replace(regexString, 'found'))     // (5)
console.log(text.split(regexString))                // (6)





////// outputs


// (1) - test if the regex can be found on the text
                //  true 
 
// (2) - this execute and find the regex on the text passed on the parameter
                // [
                //  '9',
                //  index: 18,
                //  input: '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f',
                //  groups: undefined
                // ]


// (3) - applies the regex on the text and return the matches
                // [ 'a', 'b', 'c', 'd', 'e', 'f' ]


// (4) - search and return the first index the regex was found on the text
                // 20


// (5) - replace all the occourences to the string parameter 
                // 0,1,2,3,4,5,6,7,8,9,found,found,found,found,found,found
                

// (6) - split the text on the parts that the regex was found (returns a array)
                // [ '0,1,2,3,4,5,6,7,8,9,', ',', ',', ',', ',', ',', '' ]