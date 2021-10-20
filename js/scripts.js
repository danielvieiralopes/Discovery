

// console.log('Bem vindos ao Starter!!')

// console.log(' "ola" "hello" ')

// console.log(" 'ola' 'hello' ")

// console.log(`'ola' "hello"

// ${2 + 2}

// ola 
// mundo 
// !!!
// `)



// console.log(12.5)
// console.log(12 + 1.4)
// console.log(12.5 / 2)
// console.log(12.5 === Infinity)



// console.log([
//     "Leite",
//     "Ovos",
//     2,
//     3
// ])

// // Exercise

// // var weight

// // console.log(typeof weight)

// let name 
// let age 
// let stars 
// let isSubscribed
// let weight 

// let student  = {
//      name: "Daniel",
//      age: 24,
//      stars: 9.9,
//       weight: 89,
//      isSubscribed: true
// }

// let student1 = {
//     name: "mayk",
//     age: 23,
//     stars:4.5,
//     weight: 80,
//     isSubscribed: true

// }

// console.log(student.name)
//  console.log(typeof student)

//  console.log(`${student.name} de idade ${student.age} anos pesa ${student.weight} kg`)



// let students = [
//     student,
//     student1
// ]

// console.log(students)



// Prototype

//     *prototype-base language
//     *prototype chain
//     *__proto__

// Type conversion(typecasting) vs type conversion
// alteracao de umm tipo de dado para outro tipo

// Manipulando Strings e Numeros
//transformar String eem Numero e Numero em String

// let string = "123"
// console.log(Number(string))
// let number = 321
// console.log(String(number))

//Contar quantos caracteres tem uma palavra e quantos digitos tem um numero
// let word = "Paralelepipedo"
// console.log(word.length)
// let number =  1234
// console.log(String(number).length)

// Transformar um numero quebrado com 2 casas decimais e trocar ponto por virgula
// let number = 345.33452345
// console.log(number.toFixed(2).replace(".",","))
// let word = "Programar e muito bacana"
// console.log(word.toUpperCase())

//  Separe um texto que contem espacos, em um novo array onde cada texto e uma posicao do array. 
// Depois disso, transforcme o array em um texto e onde eram espacos, coloque _

// let phrase = "Eu quero viver o Amor!"
// let myArray = phrase.split(" ")
// let phraseWithUnderscore = myArray.join("_")
// console.log(phraseWithUnderscore)

// Verificar se o texto contem a palavra Amor
// let phrase = "Eu quero viver o Amor!"
// console.log(phrase.includes("Amor"))

// Manipulando Arrays

// Criar Array com construtor
// let myArray = new Array('a', 'b', 'c')
// console.log(myArray)

// Contar elementos de um Array
// console.log(["a", "b", "c"].length)

// Transformar uma cadeia de caracteres em elementos de um Array

// let word = "manipulacao"
// console.log(Array.from(word))

// Manipulando Arays
// let techs = ["html","css", "js"]

// adicionar um item no fim
// techs.push("nodejs")
// adicionar no comeco
// techs.unshift("sql")
// remover do fim
// techs.pop()
// remover do comeco
// techs.shift()
// pegar somente alguns elementos do Array
// console.log(techs.slice(1, 3))
// remover 1 ou mais items em qualquer posicao do Array
// techs.splice(1, 1)
// encontrar a posicao de um elemento no array
// let index = techs.indexOf('css')
// techs.splice(index, 1)
//  console.log(techs)

// Expressoes e Operadores
// - Expressions
// let number = 1; //ponto e virgula nesse caso para nao dar problema
// (function() {
//     console.log('alo')
// })()
// // - Operators
// //   Binary
// console.log(number + 1)
// //   Unary
// console.log(++number)
// //   Ternary
// console.log(true ? 'alo' : 'nada')

// new
// left-hand-side expression 
// criar um novo objeto

// let name = new String('Mayk')
// let age = new Number(23)
// console.log(name, age)

// Operadores unarios 
// typeof
// delete
// const person = {
//     name: 'Mayk',
//     age: 25,
// }
// delete person.age
// console.log(person)

// Operadores Aritimeticos

// multiplicacao *
// console.log(3 * 8)
// // divisao /
// console.log(12 / 6)
// // soma +
// console.log(12 + 2)
// // subtracao -
// console.log(12 - 6)
// // resto da divisao %
// console.log(12 % 5) 
// // incremento ++
// let number =  2 
// console.log(++number)
// // decremento --
// let num = 3
// console.log(--num)
// // exponencial **
// console.log(3 ** 3)

// Grouping operator ()
// let total = (2 + 3) * 5
// console.log(total)

// Operadores de comparacao
// Ira comparar valores e retornar um Boolean como resposta a comparacao

// let one = 1
// let two =2 

// // == igual a 
// console.log(two == 1)
// console.log(one == "1")

// // != diferente de 
// // console.log(one != two)
// // console.log(one != 1)
// // console.log(one != "1")

// let one = 1
// let two = 2

// === estritamente igual a 
// console.log(one === "1")
// console.log(one === 1)

// !== estritamente diferente de 
// console.log(two !== "2")
// console.log(two !== 2)

// Operador Condicional (Ternario)
// Dependendo da condicao nos receberemos valores diferentes

// condicao entao valor 1 se nao valor 2 
// condition ? value1 : value2 

// Exemplos 
// Cafe da manha top
// let pao = true 
// let queijo = true 

// const niceBreakfest = pao && queijo ? 'Cafe top' : 'Cafe Ruim' 

// console.log(niceBreakfest)

// //Maior de 18

// let age = 16 

// const canDrive = age >= 18 ? 'Habilitado' : 'Impossibilitado'
// console.log(canDrive)


// if...else 
// let temperature = 38

// if (temperature >= 37) {
//     console.log('Febre')
// } else {
//     console.log('Saudavel')
// } 
