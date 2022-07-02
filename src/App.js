import './App.css';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import Expense from './components/Expense'
import ExpenseList from './components/ExpenseList';
import AddExpense from './components/AddExpense';
import { AppProvider } from './context/AppContext';
import React, {useState} from 'react';

function App() {

  const [filter,setFilter] = useState("");

  return (
    <AppProvider>
      <div>
        <div className="App">
          <h1 className='title'>My Budget Planner</h1>
          <div className='container'>
            <div className='app-budget'>
              <Budget />
              <Remaining />
              <Expense />
            </div>
          </div>
        </div>
        <div className="Exp">
          <h3 className='ExpTitle'> Expenses</h3>
          <div className='ExpContainer'>
            <input
              className='input'
              type="text"
              placeholder='Type to search...'
              value={filter} 
              onChange={(e) => setFilter(e.target.value)}
            />
            <ExpenseList filter={filter} setFilter={setFilter}/>
          </div>
        </div>
        <div className='Add'>
          <AddExpense />
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
