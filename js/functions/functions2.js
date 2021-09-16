// function expression 
// funtion anonymous
let total = 0

// parametros (parameters)
const sum = function (number1, number2){
    let total = number1 + number2
    return total
}

let number1 = 34 
let number2 = 25
sum(number1, number2) // arguments - argumentos
// sum(number1, number2) // arguments - argumentos

console.log(`o numero 1 e ${number1}`)
console.log(`o numero 2 e ${number2}`)
console.log(`a soma e ${sum(number1, number2)}`)
console.log(total)

