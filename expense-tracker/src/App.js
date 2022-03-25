import Expenses from "./components/Expenses/Expenses";
import Card from "./components/UI/Card";
import NewExpense from "./components/NewExpense/NewExpense";
import "./App.css";
import React, { useState } from "react";
import ExpensesFilter from "./components/Expenses/ExpenseFilter";
import ExpensesChart from "./components/Expenses/ExpensesChart";

function App() {
  const [expenseArray, setExpenseArray] = useState([]);
  const addExpenseArrayItem = (newExpense) => {
    setExpenseArray((prevExpenses) => {
      return [newExpense, ...prevExpenses];
    });
  };

  const [year, setYear] = useState("2022");
  const filterChangeHandler = (selectedYear) => {
    setYear(selectedYear);
  };
  return (
    <div className="App">
      <header className="App-header">
        <NewExpense onAdd={addExpenseArrayItem} />
        <Card className="expenses">
          <ExpensesFilter
            selected={year}
            onChangeFilter={filterChangeHandler}
          />

          <Expenses year={year} content={expenseArray} />
        </Card>
      </header>
    </div>
  );
}

export default App;
