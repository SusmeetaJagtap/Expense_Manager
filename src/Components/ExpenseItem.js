import "./ExpenseItem.css";
function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div>25 March 2021</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">5000</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
