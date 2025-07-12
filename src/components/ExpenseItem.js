import React from "react";

function ExpenseItem({ expense, onDelete }) {
  return (
    <ul className="list-group">
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {new Date(expense.date).toLocaleDateString("en-GB")} -{" "}
        {expense.description} : €{expense.amount.toFixed(2)}
        <button
          className="btn btn-danger"
          onClick={() => {
            if (
              window.confirm("Are you sure you want to delete this expense?")
            ) {
              onDelete(expense._id);
            }
          }}
        >
          Delete
        </button>
      </li>
    </ul>
  );
}

export default ExpenseItem;
