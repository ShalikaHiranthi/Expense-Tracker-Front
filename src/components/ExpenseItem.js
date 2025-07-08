import React from 'react';

function ExpenseItem({ expense, onDelete }) {
  return (
    <li>
      {expense.date} - {expense.description} : €{expense.amount.toFixed(2)}
      <button onClick={() => onDelete(expense.id)}>Delete</button>
    </li>
  );
}

export default ExpenseItem;
