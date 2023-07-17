const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (fullOrder) => {
    
    return `Olá, ${fullOrder.order.delivery.deliveryPerson}, entrega para: ${fullOrder.name}, Telefone: ${fullOrder.phoneNumber}, ${fullOrder.address.street}, Número: ${fullOrder.address.number}, AP: ${fullOrder.address.apartment}.`

  }
  
  console.log(customerInfo(order));
  
  const orderModifier = (fullOrder) => {
    
    //alterar o nome 
    fullOrder.name = "Luiz Silva";
    fullOrder.payment.total = 50; 

    //Pegar todos os nomes de pizzas em um array e juntar com espaço

    const pizzas = Object.keys(fullOrder.order.pizza).join(", ");

    return `Olá, ${order.name}, o valor total do seu pedido de ${pizzas} e ${fullOrder.order.drinks.coke.type} é de R$ ${fullOrder.payment.total},00.`
  }
  
  console.log(orderModifier(order));