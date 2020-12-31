import React, { useState } from 'react'

export const AddTransactions = () => {

    const [text,setText]=useState("");
    const [amount,setAmount]=useState(0)


    return (
        <>

            <h3>Add a transaction</h3>
            <form id="form">                

                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={e=>setText(e.target.value)} placeholder="Please enter text ... "/>
                </div>

                <div className="form-control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" value={amount} onChange={e=>setAmount(e.target.value)} placeholder="Plase enter amount ... "/>
                </div>

            </form>            
            
        </>
    )
}
