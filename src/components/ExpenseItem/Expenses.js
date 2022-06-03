import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpenseFilter from "../NewExpense/ExpenseFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  //   const expense = props.items;

  

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpenseList items = {filteredExpenses}/>

      {/* {filteredExpenses.length === 0 ? (
        <div>No expenses found</div>
      ) : (
        filteredExpenses.map((expen) => (
          <ExpenseItem
            key={expen.id}
            title={expen.title}
            amount={expen.amount}
            date={expen.date}
          />
        ))
      )} */}

      {/* <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
      />
      <ExpenseItem
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date}
      />
      <ExpenseItem
        title={expense[3].title}
        amount={expense[3].amount}
        date={expense[3].date}
      /> */}

      {/* <TestExpenseItem items={expense} /> */}
    </Card>
  );
};

export default Expenses;
