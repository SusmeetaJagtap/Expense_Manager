import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [isFromVisible, setIsFromVisible] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsFromVisible(false);
  };
  const handleFormVisibility = () => {
    setIsFromVisible(true);
  };
  return (
    <div className="new-expense">
      {!isFromVisible && (
        <button onClick={handleFormVisibility}>Add New Expense</button>
      )}
      {isFromVisible && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          removeForm={() => {
            setIsFromVisible(false);
          }}
        />
      )}
    </div>
  );
};
export default NewExpense;
