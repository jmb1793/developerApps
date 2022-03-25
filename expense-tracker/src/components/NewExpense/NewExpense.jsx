import NewExpenseForm from "./NewExpenseForm";
import { useState } from "react";
import "./NewExpense.css";
import "./ExpenseButton.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
    };
    props.onAdd(expenseData);
  };

  const [shown, toggleShown] = useState(false);
  function shownHandler(e) {
    shown ? toggleShown(false) : toggleShown(true);
  }

  if (!shown) {
    return (
      <div className="new-expense">
        <div className="button-show">
          <button onClick={shownHandler}>Add New Expense</button>
        </div>
      </div>
    );
  }
  return (
    <div className="new-expense">
      <NewExpenseForm
        handleShown={shownHandler}
        onSaveExpenseData={saveExpenseDataHandler}
      />
    </div>
  );
};

export default NewExpense;
