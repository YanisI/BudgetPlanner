import React, {useContext} from 'react'
import "./Budget.css"
import { AppContext } from '../context/AppContext'

const Budget = () => {

  const {budget} = useContext(AppContext);
  return (
    <div className='budget red flex'>
        <div className='amount'>
            <span>Budget : </span> {budget} <span>€</span>
        </div>
            <button className='editBtn'> Edit</button>
    </div>
  )
}

export default Budget