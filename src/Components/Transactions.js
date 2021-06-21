import React from "react";
import Transaction from "./Transaction";

export default function Transactions({ transactionsArr }) {
  return (
    <div>
      {transactionsArr.map((transaction, index) => {
        return (
          <Transaction key={index} transaction={transaction} index={index} />
        );
      })}
    </div>
  );
}
