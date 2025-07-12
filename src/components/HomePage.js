import React from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import ExpenseSummary from "../components/ExpenseSummary";

function HomePage({ expenses, onAdd, onDelete }) {
  return (
    <>
      <h1>Monthly Expense Tracker</h1>
      <ExpenseForm onAdd={onAdd} />
      <ExpenseSummary expenses={expenses} />
      <ExpenseList expenses={expenses} onDelete={onDelete} />
    </>
  );
}

export default HomePage;
