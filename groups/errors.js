const text = 'Pedrinho (filho do Pedro Silva) é doutor do ABCabc!'


// not a group
console.log(text.match(/[(abc)]/gi))
                // [
                //     '(', 'a', ')',
                //     'A', 'B', 'C',
                //     'a', 'b', 'c'
                // ]


console.log(text.match(/([abc])/gi))
                // [
                //     'a', 'A', 'B',
                //     'C', 'a', 'b',
                //     'c'
                // ]


console.log(text.match(/(abc)+/gi))
                // [ 'ABCabc' ]