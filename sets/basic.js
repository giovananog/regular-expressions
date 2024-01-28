// sets of characters are defined by []
const text1 = '1,2,3,4,5,6,a.b c!d?e[f'


const evenRegex = /[02468]/g                // same of 0|2|4|6|8
console.log(text1.match(evenRegex))         // [ '2', '4', '6' ]


const text2 = 'não vai na Lana.'
const regexComESemAcento = /n[aã]/g            // na | nã
console.log(text2.match(regexComESemAcento))  // [ 'nã', 'na', 'na' ]