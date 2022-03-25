import "./Card.css";
// import Expenses from '../Expenses/Expenses';

function Card(props) {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
