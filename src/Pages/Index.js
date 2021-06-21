import React from "react";
import Transactions from "../Components/Transactions";

export default function Index({ transactionsArr }) {

  const totalAmount = () => {
    
    let total = 0
    for (let i = 0; i < transactionsArr.length; i++) {
     total += transactionsArr[i].amount
    }
    return total
  };
  return (
    <div>
      <h2>Index</h2>
      <h3>Total: ${totalAmount(transactionsArr)}</h3>
      <Transactions transactionsArr={transactionsArr} />
    </div>
  );
}
