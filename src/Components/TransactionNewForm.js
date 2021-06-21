import React, { useState } from "react";
import { withRouter } from "react-router-dom";

function TransactionNewForm({ postTransaction, history }) {
  const [transaction, setTransaction] = useState({
    from: "",
    date: "",
    name: "",
    amount: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    debugger;
    console.log(transaction);
    postTransaction(transaction);
    history.push("/transactions")
  };

  const handleChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  return (
    <div>
      <h2>New Transaction Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="from">
          From:
          <input
            id="from"
            onChange={handleChange}
            value={transaction.from}
            placeholder="From"
          />
        </label>
        <label htmlFor="date">
          Date:
          <input
            id="date"
            onChange={handleChange}
            value={transaction.date}
            placeholder="mm/dd/yy"
          />
        </label>
        <label htmlFor="name">
          Name:
          <input
            id="name"
            onChange={handleChange}
            value={transaction.name}
            placeholder="Name"
          />
        </label>
        <label htmlFor="amount">
          Amount:
          <input
            id="amount"
            onChange={handleChange}
            value={transaction.amount}
            placeholder="Amount"
          />
        </label>
        <button>SUBMIT</button>
      </form>
    </div>
  );
}

export default withRouter(TransactionNewForm);
