import "./ExpenseDate.css";

function ExpenseDate(props) {
  const date = new Date(props.date);
  const month = date.toLocaleDateString("en-US", { month: "long" });
  const year = date.toLocaleDateString("en-US", { year: "numeric" });
  const day = date.toLocaleDateString("en-US", { day: "numeric" });

  return (
    <div className="expenseItem__Date">
      <div className="expenseDate_month"> {month} </div>
      <div className="expenseDate_year"> {year} </div>
      <div className="expenseDate_day"> {day} </div>
    </div>
  );
}

export default ExpenseDate;
