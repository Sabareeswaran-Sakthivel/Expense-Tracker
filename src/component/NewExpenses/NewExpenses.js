import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css";

function NewExpenses(props) {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString(),
    };
    props.onEnteredData(expenseData);
    setIsEditing(false);
  };

  const stopEditHandler = () => {
    setIsEditing(false);
  };

  const startEditHandler = () => {
    setIsEditing(true);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button type="button" onClick={startEditHandler}>
          Add New Expense
        </button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditHandler}
        />
      )}
    </div>
  );
}

export default NewExpenses;
