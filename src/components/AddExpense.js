import React, { useState, useContext } from 'react'
import "./AddExpense.css"
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4} from 'uuid';

const AddExpense = () => {

    const {dispatch} = useContext(AppContext)

    const [name, setName] = useState("");
    const [price, sertPrice] = useState("");

    const handleChange= (e) => {
        setName(e.target.value)
    }

    const handlePriceChange= (e) => {
        sertPrice(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const expense = {
            name:name,
            cost: parseInt(price),
            id: uuidv4()
        }

        dispatch({
            type: "ADD_EXPENSE",
            payload: expense});

        setName("")
        sertPrice("");

    }
    return (
        <div className='containerAdd'>
            <h3 className="AddTitle">
                Add Expense
            </h3>
            <form onSubmit={onSubmit}>
                <div className='formitem'>
                    <label
                        for="nom">
                        Nom
                    </label>
                    <input
                        type="text"
                        name="nom"
                        required="required"
                        value={name}
                        onChange={handleChange}
                    />
                </div>
                <div className='formitem'>
                    <label
                        for="prix">Prix</label>
                    <input
                        type="text"
                        name="prix"
                        required="required"
                        value={price}
                        onChange={handlePriceChange}
                    />
                </div>
                <button
                    className="addButton"
                    type="submit"
                >
                    Add
                </button>
            </form>
        </div>
    )
}

export default AddExpense