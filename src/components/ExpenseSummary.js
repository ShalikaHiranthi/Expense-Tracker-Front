import React from 'react';

function ExpenseSummary({ expenses }) {
  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  return <h3>Total This Month: €{total.toFixed(2)}</h3>;
}

export default ExpenseSummary;
