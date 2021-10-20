
let family = {
    incomes: [10,1000,5,250],
    expenses: [20,30,10,20]
}



function sum(array){

    let total = 0
    
    for(let value of array){
        total += value
    }
    return total
}


function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses= sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    const itsOk = total >= 0

    let balanceText = "negativo"

    if(itsOk){
        balanceText = "positivo"
    }

    console.log(`Seu saldo e ${balanceText}: R$${total.toFixed(2)}`)
}

calculateBalance()