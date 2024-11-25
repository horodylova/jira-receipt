import React from 'react'

export const ReceiptForm = ({onSubmit}) => {
const handleSubmit =(e) => {
    e.preventDefault()
    const boardName = e.target.boardName.value;
    const userName = e.target.userName.value;
    onSubmit(boardName, userName)
}
  return (
    <form onSubmit={handleSubmit}>
        <h1>Jira Receipt</h1>
        <p>Generate a receipt-style summary of your Jira Board activity</p>
        <p>Made by Svitlana Horodylova</p>
        <div>
            <label>
                Board Name:
                <input type="text" name="boardName" required />
            </label>
        </div>
        <div>
            <label>
                User Name:
                <input type="text" name="userName" required />
            </label>
        </div>
        <button type="submit">
            Generate
        </button>
    </form>
  )
}
