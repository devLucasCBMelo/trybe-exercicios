const product = {
    name: 'Ruffles Original - 76g',
    price: 8.59,
    company: 'Elma Chips',
    nutritionInfo: {
      carbohydrates: 12,
      sugar: 0,
      sodium: 129,
    }
  };
  
let keys = Object.keys(product);
let entries = Object.entries(product);

  console.log(Object.keys(product)); // [ 'name', 'price', 'company', 'nutritionInfo' ]
  console.log(keys[1]);
  console.log(Object.values(product));
  console.log(Object.entries(product));
  console.log(entries[3]);
  console.log(entries[3][1]);