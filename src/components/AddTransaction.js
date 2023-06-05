import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState.js";

function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  function handleSubmission(e) {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    };
    addTransaction(newTransaction);
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmission}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            onChange={(e) => setText(e.target.value)}
            type="text"
            id="text"
            placeholder="Enter text..."
            value={text}
          />
        </div>

        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            placeholder="Enter amount..."
            value={amount}
          />
        </div>

        <button className="btn">Add transaction</button>
      </form>
    </>
  );
}

export default AddTransaction;
