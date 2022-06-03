import ExpenseDate from "../ExpenseItem/ExpenseDate";

const TestExpenseItem = (props) => {
    return (
        <div className="expense-item">
            <ExpenseDate date = {props.items[0].date} />
            <div className="expense-item__description">
                <h2>{props.items[0].title}</h2>
                <div className="expense-item__price">${props.items[0].amount}</div>
            </div>
        </div>
    );
};

export default TestExpenseItem;