import React, { useEffect, useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseSummary from './components/ExpenseSummary';
import axios from 'axios';

function App() {
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await axios.get('http://localhost:5000/api/expenses');
    setExpenses(res.data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async (expense) => {
    const res = await axios.post('http://localhost:5000/api/expenses', expense);
    setExpenses([...expenses, res.data]);
  };

  const deleteExpense = async (id) => {
    await axios.delete(`http://localhost:5000/api/expenses/${id}`);
    setExpenses(expenses.filter(exp => exp._id !== id));
  };

  return (
    <div className="container">
      <h1>Monthly Expense Tracker</h1>
      <ExpenseForm onAdd={addExpense} />
      <ExpenseSummary expenses={expenses} />
      <ExpenseList expenses={expenses} onDelete={deleteExpense} />
    </div>
  );
}

export default App;
