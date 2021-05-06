import React from "react";
import Charts from "../Charts/Charts";

const ExpensesChart = (props) => {
  const expenseDatapoints = [
    { lable: "Jan", value: 0 },
    { lable: "Feb", value: 0 },
    { lable: "Mar", value: 0 },
    { lable: "Apr", value: 0 },
    { lable: "May", value: 0 },
    { lable: "Jun", value: 0 },
    { lable: "Jul", value: 0 },
    { lable: "Aug", value: 0 },
    { lable: "Sep", value: 0 },
    { lable: "Oct", value: 0 },
    { lable: "Nov", value: 0 },
    { lable: "Dec", value: 0 },
  ];
  for (const expense of props.expenses) {
    const month = expense.date.getMonth();
    expenseDatapoints[month].value += expense.amount;
  }
  return (
    <div>
      <Charts datapoints={expenseDatapoints} />
    </div>
  );
};

export default ExpensesChart;
