import { useState } from "react";
import "./NewExpenseForm.css";
import uuid from "react-uuid";
import "./ExpenseButton.css";

const NewExpenseForm = (props) => {
  const [expense, setExpense] = useState({
    title: "",
    amount: "",
    date: "",
    key: uuid(),
    id: uuid(),
  });
  const expenseChangeHandler = (event) => {
    const { name, value } = event.target;
    setExpense((prevItems) => {
      return {
        ...prevItems,
        [name]: value,
      };
    });
  };
  const submitExpense = (event) => {
    props.onSaveExpenseData(expense);
    event.preventDefault();
    setExpense({ title: "", amount: "", date: "", key: uuid(), id: uuid() });
  };

  return (
    <form onSubmit={submitExpense} className="new-expense__form">
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>
            Title
            <input
              type="text"
              name="title"
              onChange={expenseChangeHandler}
              value={expense.title}
            />
          </label>
        </div>
        <div className="new-expense__control">
          <label>
            Amount
            <input
              type="number"
              name="amount"
              min=".01"
              step="0.01"
              onChange={expenseChangeHandler}
              value={expense.amount}
            />
          </label>
        </div>
        <div className="new-expense__control">
          <label>
            Date
            <input
              type="date"
              name="date"
              min="2021-01-01"
              max="2022-12-31"
              onChange={expenseChangeHandler}
              value={expense.date}
            />
          </label>
        </div>
        <div className="new-expense__actions">
          <button onClick={props.handleShown}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default NewExpenseForm;
