let customers = [
  {
    id: 1,
    name: "John",
    balance: 5000,
    transactions: [],
  },
  {
    id: 2,
    name: "Amy",
    balance: 5000,
    transactions: [],
  },
];
function deposit(id, amount) {
  customers = customers.map((customer) => {
    if (customer.id === id) {
      return {
        ...customer,
        balance: customer.balance + amount,
        transactions: [
          ...customer.transactions,
          {
            type: "credit",
            amount: amount,
            date: Date.now(),
          },
        ],
      };
    } else {
      return customer;
    }
  });
}

function withdraw(id, amount) {
    customers = customers.map((customer) => {
        if (customer.id === id) {
            if (amount > customer.balance){
                console.log("Insufficient Balance");
            }
            else{
                return {
                ...customer,
                balance: customer.balance - amount,
                transactions: [
                    ...customer.transactions,
          {
            type: "debit",
            amount: amount,
            date: Date.now(),
          },
        ],

            }
            };
        }
        else{
            return customer;
        }
    });
}

function checkBalance(id) {
    const customer = customers.find((customer) => customer.id === id);
    console.log(customer);
}

function showTransactions(id) {
    const customer = customers.find((customer) => customer.id === id);
    if(customer.id==id){
       return customer.transactions;
    }
    else{
      
    }
}
export {deposit, withdraw, checkBalance, showTransactions};