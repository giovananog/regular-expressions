// border is the not \w, that means: [^A-Za-z0-9_]... accentuation problems

const text1 = 'dia diatonico diafragma media wikipedia bom_dia melodia radial'

console.log(text1.match(/\bdia\w+/gi))
    // [ 'diatonico', 'diafragma' ]

console.log(text1.match(/\w+dia\b/gi))
    // [ 'media', 'wikipedia', 'bom_dia', 'melodia' ]

console.log(text1.match(/\w+dia\w+/gi))
    // [ 'radial' ]

console.log(text1.match(/\bdia\b/gi))
    // [ 'dia' ]

    
const text2 = 'dia diatônico diafragma, média wikipédia bom-dia melodia radial'

console.log(text2.match(/\bdia\b/gi))
    // [ 'dia', 'dia', 'dia', 'dia' ]

console.log(text2.match(/(\S*)?dia(\S*)?/gi)) // comma enters
            // [
            //     'dia',
            //     'diatônico',
            //     'diafragma,',
            //     'média',
            //     'wikipédia',
            //     'bom-dia',
            //     'melodia',
            //     'radial'
            // ]

console.log(text2.match(/([\wÀ-ú-]*)?dia([\wÀ-ú-]*)?/gi))
            // [
            //     'dia',       'diatônico',
            //     'diafragma', 'média',
            //     'wikipédia', 'bom-dia',
            //     'melodia',   'radial'
            // ]
  