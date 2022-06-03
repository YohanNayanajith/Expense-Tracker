import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/ExpenseItem/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummyExpenses = [
  {id:'e1',title:'New Desk',amount:450,date: new Date(2020,4,4)},
  {id:'e2',title:'New Chair',amount:500,date: new Date(2022,4,10)},
  {id:'e3',title:'New Document Stuff',amount:600,date: new Date(2022,4,22)},
  {id:'e4',title:'New Window',amount:200,date: new Date(2022,4,30)},
]

function App() {
  
  const [expense,setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = expense => {
    console.log(expense);
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  }

  return (
    
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />

      <Expenses items = {expense}/>
      {/* <TestExpenseItem items={expense} /> */}
    </div>
  );
}

export default App;
