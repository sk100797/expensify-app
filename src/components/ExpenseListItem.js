//Export a stateless fucntion component
// description, amount, createdAts
import React from 'react'
import { Link } from 'react-router-dom'



 const ExpenseListItem = ({id,description,amount,createdAt}) => (
    <div>
        <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
        </Link>
        <p>{amount} - {createdAt}</p>
    </div>
)

export default ExpenseListItem;