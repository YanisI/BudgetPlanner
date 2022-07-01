import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'

const Remaining = () => {
  const { budget, expenses } = useContext(AppContext);
  const [rem, setRem] = useState(0);

    useEffect(() => {
      const val = []
      expenses.map(ex => {
        console.log(ex + " - " + ex.cost)
        val.push(ex.cost)
        return true;
      })
      let sum =0;
      for (let i = 0; i < val.length; i++) {
        sum += val[i];
      }
      setRem(budget-sum);
    }, [budget, expenses])

    
  return (
    <div className='budget green'>
      <div className='amount'>
        <span>Remaining : </span> {rem} <span>€</span>
      </div>
    </div>
  )
}

export default Remaining