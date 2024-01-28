const text = `1,2,3,4,5,6,a.b c!d?e\r	-
f_g`

console.log(text.match(/\d/g)) // numbers [0-9]
console.log(text.match(/\D/g)) // not numbers [^0-9]

console.log(text.match(/\w/g)) // character [a-zA-Z0-9_]
console.log(text.match(/\W/g)) // not character [^a-zA-Z0-9_]

console.log(text.match(/\s/g)) // space [ \t\n\r\f]
console.log(text.match(/\S/g)) // not space [^ \t\n\r\f]

// \b \B