import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {

    const { transactions } = useContext(GlobalContext);

    //getting amounts
    const amounts = transactions.map(transaction => transaction.amount);

    //getting total
    const total = amounts.reduce((acc,item) => (acc += item),0).toFixed(2);

    return (
        <div>
            <h4>Current Balance</h4>
            <h1>${total}</h1>
        </div>
    )
}
