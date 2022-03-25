import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const filteredArray = props.content.filter(
    (item) => item.date.slice(0, 4) === props.year
  );

  return (
    <div>
      <ExpensesList items={filteredArray} />
    </div>
  );
}

export default Expenses;
