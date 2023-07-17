const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];

function addCustomers(customers, newCustomers){
    for ( let index = 0; index < newCustomers.length; index = index + 1){
        if(typeof newCustomers[index] === "string"){
            customers.push(newCustomers[index]);
        } else {
            return "Todos os valores devem ser strings";
        }
    }
    return trybeBankCustomers;
};

console.log(addCustomers(trybeBankCustomers,["Teste1","Teste2","Teste3"]));