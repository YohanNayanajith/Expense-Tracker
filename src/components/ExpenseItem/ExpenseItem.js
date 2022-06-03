import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // const expenseDate = new Date(2021, 2, 28);
  // const expenseTitle = 'Car Insuarance';
  // const expenseAmount = 294.67;
  // const [title,setTitle] = useState(props.title);

  // const clickHandler = () => {
  //     setTitle("Updated!");
  // };

  return (
    <li>
      <Card className="expense-item">
        {/* <div>{props.date.toISOString()}</div> */}
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={()=>{console.log("Clicked")}}>Change Title</button> */}
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
