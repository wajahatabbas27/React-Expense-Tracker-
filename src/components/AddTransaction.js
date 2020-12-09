import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {

    const [text, setText] = useState('');
    const [amount, SetAmount] = useState();

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
    }

    return (
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}> 
                <div className="form-control">
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        id="description"
                        placeholder="Enter details of Description"
                        value={text}
                        onChange={(e) => { setText(e.target.value) }} />
                </div>

                <div className="form-control">
                    <label htmlFor="transactionAmount">TransactionAmount</label>
                    <input
                        type="number"
                        id="transactionAmount"
                        placeholder="Enter amount of transaction"
                        value={amount}
                        onChange={(e) => { SetAmount(e.target.value) }} />
                </div>

                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}
