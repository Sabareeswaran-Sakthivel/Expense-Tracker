import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseChart from "./ExpenseChart";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filteredYear, setfilteredYear] = useState("2021");

  const expensesYearFilterHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };

  const displayFilteredYear = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          defaultYear={filteredYear}
          onYearFilter={expensesYearFilterHandler}
        />
        <ExpenseChart expenses={displayFilteredYear}/>
        <ExpensesList items={displayFilteredYear} />
      </Card>
    </div>
  );
}

export default Expenses;
