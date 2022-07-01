import React, {useContext, useEffect, useState} from 'react'
import { AppContext } from '../context/AppContext'

const Expense = () => {

  const { expenses } = useContext(AppContext);
  const [spent,setSpent] = useState(0)

  useEffect(() => {
    let exp = 0;
    expenses.map(ex => {
      exp = exp + ex.cost;
      return true;
    })
    setSpent(exp)
  },[expenses])
  return (
    <div className='budget blue'>
        <div className='amount'>
            <span>Spent so far : {spent} €</span>
        </div>
    </div>
  )
}

export default Expense