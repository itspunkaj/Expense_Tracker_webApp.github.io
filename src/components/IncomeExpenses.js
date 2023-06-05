import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState.js";

function incomeExpenses() {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <p className="money plus">+₹{income}</p>
      </div>
      <div>
        <p className="money minus">-₹{expense}</p>
      </div>
    </div>
  );
}

export default incomeExpenses;
