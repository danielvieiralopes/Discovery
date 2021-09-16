
// Function() constructor
// expressao new
// criar um novo objeto
// this keywor

function Person(name){
    this.name = name
    this.walk = function(){
        return this.name + " está andando"
    }
}

const mayk = new Person("mayk")
const joao = new Person("Joao")
console.log(mayk.walk())
console.log(joao.walk())