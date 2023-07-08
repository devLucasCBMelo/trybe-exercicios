const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];

function addCustomer(customer) {
  if (typeof customer === "string") {
    return trybeBankCustomers.push(customer);
  } else {
    return 'O parâmetro passado deve ser do tipo string';
  }
}

console.log(addCustomer("Lucas"));
console.log(trybeBankCustomers);