const text = 'áéíóú àèìòù âêîôû ç ãõ ü'
console.log(text.match(/[À-ü]/g))

// [
//     'á', 'é', 'í', 'ó', 'ú',
//     'à', 'è', 'ì', 'ò', 'ù',
//     'â', 'ê', 'î', 'ô', 'û',
//     'ç', 'ã', 'õ', 'ü'
// ]
  