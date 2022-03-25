import "./ExpensesList.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesChart from "./ExpensesChart";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2>Found no Expenses</h2>;
  }
  
  return (
    <div>
      <ExpensesChart expenses={props.items}/>

      <ul className="expenses-list">
        {props.items.map((item) => (
          <div key={item.key}>
            <Card className="card">
              <ExpenseItem
                date={item.date}
                title={item.title}
                amount={item.amount}
                key={item.key}
                id={item.id}
              />
            </Card>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ExpensesList;
