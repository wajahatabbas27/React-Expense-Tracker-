import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'


export const AccountSummary = () => {

    const { transactions } = useContext(GlobalContext);

    //getting amounts
    const amounts = transactions.map(transaction => transaction.amount);

    //getting income
    const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);

    //getting expense
    const expense = amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <div className="income-expense-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">${income}</p>
            </div>

            <div>
                <h4>Expense</h4>
                <p className="money minus">${expense}</p>
            </div>

        </div>
    )
}
