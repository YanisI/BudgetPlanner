import React, { useContext } from 'react'
import "./ExpenseList.css"
import { AppContext } from '../context/AppContext'

const ExpenseList = ({filter, setFilter}) => {

    const { expenses,dispatch } = useContext(AppContext);

    const handleDelete = (id) => {

        dispatch({
            type: "RMV_EXPENSE",
            payload: id});
    }

    return (
        <ul className='expenseList'>
            {expenses.filter((exp) => exp.name.toLowerCase().includes(filter.toLowerCase()))
            .map((item, index) => {
                return (
                    <li key={index} className="expense-item">
                        <span>{item.name}</span>
                        <button
                            className='supprBtn'
                            onClick={() => handleDelete(item.id)}
                        >
                            {item.cost}
                            X
                        </button>
                    </li>
                )
            })}
        </ul>
    )
}

export default ExpenseList