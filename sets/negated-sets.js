const text = '1,2,3,a.b c!d?e[f'

console.log(text.match(/\D/g)) // not numbers
        // [
        //     ',', ',', ',', 'a',
        //     '.', 'b', ' ', 'c',
        //     '!', 'd', '?', 'e',
        //     '[', 'f'
        // ]


console.log(text.match(/[^0-9]/g)) // same...
        // [
        //     ',', ',', ',', 'a',
        //     '.', 'b', ' ', 'c',
        //     '!', 'd', '?', 'e',
        //     '[', 'f'
        // ]


console.log(text.match(/[^\d!\?\[\s,\.]/g))
        // [ 'a', 'b', 'c', 'd', 'e', 'f' ]


const text2 = '1: !"#$%&\'()*+,-./ 2: :;<=>?@'

console.log(text2.match(/[^!-/:-@\s]/g))  
        // [ '1', '2' ]