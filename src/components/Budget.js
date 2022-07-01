import React, { useContext, useState } from 'react'
import "./Budget.css"
import { AppContext } from '../context/AppContext'

const Budget = () => {

  const [edit, setEdit] = useState(false);
  const [val, setVal] = useState("");

  const { budget, dispatch } = useContext(AppContext);

  const handleClick = () => {
    setEdit(!edit)
  }
  
  const handleEdit = () => {
    if (!isNaN(val) && val !== "") {
      console.log("on passe")
      dispatch({
        type: "EDIT_BUDGET",
        payload: val
      });
    }

    setVal("");
    setEdit(false);
  }

  return (
    <div className='budget red flex'>

      <div className='amount'>
        {edit === false ?
          (
            <span>Budget : {budget}€</span>
          ) :
          (
            <>
              <input
                type="text"

                className='editField'
                value={val}
                onChange={(e) => setVal(e.target.value)}
              />
              <button
                className='editButton'
                onClick={handleEdit}
              >
                V
              </button>
            </>
          )
        }
      </div>

      <button className='editBtn' onClick={handleClick}> Edit</button>
    </div>
  )
}

export default Budget