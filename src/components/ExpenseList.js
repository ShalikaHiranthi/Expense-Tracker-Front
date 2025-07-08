import React from 'react';
import ExpenseItem from './ExpenseItem';

function ExpenseList({ expenses, onDelete }) {
  return (
    <div>
      <h2>Expenses</h2>
      {expenses.length === 0 ? <p>No expenses yet</p> : (
        <ul>
          {expenses.map(exp => (
            <ExpenseItem key={exp.id} expense={exp} onDelete={onDelete} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExpenseList;
