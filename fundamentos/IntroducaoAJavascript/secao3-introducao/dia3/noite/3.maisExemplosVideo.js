const trybeBankCustomers = ["Kaio","Rafaela","Marianna"];
const pirilamposCustomers = ["Thiago","Felipe","Matheus","Bartolomeu"];

function findElement(array,element){
    return array.includes(element);    
};

console.log(findElement(trybeBankCustomers,"Felipe"));
console.log(findElement(pirilamposCustomers,"Thiago"));