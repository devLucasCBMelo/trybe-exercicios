const customer = {
    name: "Lucas",
    age: 27,
    job: "Desenvolvedor Full-Stack",
};

const addProperty = (object, key, value) => {
    if(typeof object[key] === "undefined"){
        object[key] = value;
    }
};

addProperty(customer,"birthPlace","09/04/1996");
console.log(customer);

