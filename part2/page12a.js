//Print best performing Stock
const stockPrice = [
  { name: "Wirpo", lastPrice: 200, currPrice: 210 },
  { name: "Deloite", lastPrice: 250, currPrice: 270 },
  { name: "HDFC", lastPrice: 200, currPrice: 290 },
];
let profits=[];
let maxprofit = 0;
let bestCompany = "";
function bestStock(companies){
    maxprofit = 0;
    bestCompany = "";
    companies.forEach((company)=>{
        const profit = company.currPrice - company.lastPrice;
        if(profit > maxprofit){
            maxprofit = profit;
            bestCompany = company.name;
        }   
    });
    return bestCompany;
}
console.log(bestStock(stockPrice))
