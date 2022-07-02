import React from "react";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    { id:"e1", title: 'Car Insurance', amount: 294.67, date: new Date(2022, 6, 2) },
    { id:"e2", title: 'Dream', amount: 123.7, date: new Date(2022, 3, 28) },
    { id:"e3", title: 'Toilet', amount: 7, date: new Date(2022, 4, 5) },
    { id:"e4", title: 'Choice', amount: 500, date: new Date(2022, 3, 5) },
  ]

  // return React.createElement(
  //   'div', {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { expenses: expenses })
  // )
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
