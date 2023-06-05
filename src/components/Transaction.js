import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState.js";

export const Transaction = (props) => {
  const { id, text, amount } = props;

  const { deleteTransaction } = useContext(GlobalContext);

  const sign = amount < 0 ? "-" : "+";

  return (
    <li className={amount < 0 ? "minus" : "plus"}>
      {text}
      <span>
        {sign}₹{Math.abs(amount)}
      </span>
      <button onClick={() => deleteTransaction(id)} className="delete-btn">
        x
      </button>
    </li>
  );
};
