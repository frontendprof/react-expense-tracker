import React from 'react'

export const AddTransactions = () => {
    return (
        <>

            <h3>Add a transaction</h3>
            <form id="form">                

                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" id="text" placeholder="Please enter text ... "/>
                </div>

                <div className="form-control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" id="amount" placeholder="Plase enter amount ... "/>
                </div>

            </form>            
            
        </>
    )
}
