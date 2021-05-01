import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseItem
          date={props.item[0].date}
          title={props.item[0].title}
          amount={props.item[0].amount}
        />
        <ExpenseItem
          date={props.item[1].date}
          title={props.item[1].title}
          amount={props.item[1].amount}
        />
        <ExpenseItem
          date={props.item[2].date}
          title={props.item[2].title}
          amount={props.item[2].amount}
        />
        <ExpenseItem
          date={props.item[3].date}
          title={props.item[3].title}
          amount={props.item[3].amount}
        />
      </Card>
    </div>
  );
};
export default Expenses;
