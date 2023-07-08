const trybeBankCustomers = ["Lucas", "Pedro","Thiago"];

function recepcionarClientes (clientes){
    for(let index = 0; index < clientes.length; index = index +1){
        console.log(`Olá, ${clientes[index]}, seja bem vindo ao nosso banco!`);
    }
};

console.log(recepcionarClientes(trybeBankCustomers));