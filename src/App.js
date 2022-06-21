import React, { useState } from "react";
import Expenses from "./component/Expenses/Expenses";
import NewExpenses from "./component/NewExpenses/NewExpenses";

function App() {
  const DUMMY_EXPENSES = [
    {
      id: 'ed1',
      title: "New Mobile",
      amount: 250,
      date: new Date(2021, 8, 15),
    },
    {
      id: 'ed2',
      title: "Laptop",
      amount: 250,
      date: new Date(2021, 8, 15),
    },
    {
      id: 'ed3',
      title: "tv",
      amount: 250,
      date: new Date(2021, 8, 15),
    },
  ];

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const enteredDataHandler = (enteredData) => {
    setExpenses((prevExpenses) => {
      return [enteredData, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpenses onEnteredData={enteredDataHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
