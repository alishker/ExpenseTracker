import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';



export const AddTransaction = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

    const { addTransaction } = useContext(GlobalContext)
    const handleSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100),
            text,
            amount: +amount

        }
        addTransaction(newTransaction);
    }
    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label value='text' htmlFor="text">Text</label>
                    <input onChange={(e) => setText(e.target.value)} type="text" value={text} id="text" placeholder="Enter text..." />
                </div>
                <div lassName="form-control">
                    <label htmlFor="amount" value='amount'
                    >Amount <br />
            (negative - expense, positive - income)</label
                    >
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}
