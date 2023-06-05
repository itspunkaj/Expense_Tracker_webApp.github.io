import React from "react";
import Header from "./Header.js";
import Balance from "./Balance.js";
import IncomeExpenses from "./IncomeExpenses.js";
import TransactionList from "./TransactionList.js";
import AddTransaction from "./AddTransaction.js";
import { GlobalProvider } from "../context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
