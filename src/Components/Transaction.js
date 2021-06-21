import { Link } from "react-router-dom";

import React from 'react'

export default function Transaction({transaction, index}) {
    console.log(transaction)
    return (
        <div>
            <p>NAME - DATE - AMOUNT</p>
            <Link to={`/transactions/${index}`}>{`${transaction.name}   -   ${transaction.date}   -   $${transaction.amount}`}</Link>
        </div>
    )
}
