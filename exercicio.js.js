// string: memória um espaço contíguo
// string é um tipo especializado de array

//          0123456
var nome = 'Maxsuel'

console.log(nome.length)
console.log(nome.charAt(2))
console.log(nome[2])

console.log(nome[0])
console.log(nome[nome.length - 1])
// Index Out Of Bounds Exception
console.log(nome[12])

console.log('  tads   ')

// console.log('  tads   '.charCodeAt(0))

// trim // aparar

var s1 = '  tads  '
console.log(s1)
var s2 = leftTrim(s1)
console.log(s2) // 'tads  '
var s3 = rightTrim(s1)
console.log(s3) // '  tads'
var s4 = allTrim(s1)
console.log(s4) // 'tads'