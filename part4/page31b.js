import { deposit, checkBalance, showTransactions } from "./bank.js";

deposit(1, 1500);
checkBalance(1)
deposit(1, 1000);
checkBalance(1)
showTransactions(1);