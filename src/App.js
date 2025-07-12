import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import AppNavbar from "./components/AppNavbar";
import MonthlySummary from "./components/MonthlySummary";
import HomePage from "./components/HomePage";

function App() {
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await axios.get("http://localhost:5000/api/expenses");
    setExpenses(res.data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async (expense) => {
    const res = await axios.post("http://localhost:5000/api/expenses", expense);
    setExpenses([...expenses, res.data]);
  };

  const deleteExpense = async (id) => {
    await axios.delete(`http://localhost:5000/api/expenses/${id}`);
    setExpenses(expenses.filter((exp) => exp._id !== id));
  };

  return (
    <Router>
      <AppNavbar />
      <div className="container mt-4">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                expenses={expenses}
                onAdd={addExpense}
                onDelete={deleteExpense}
              />
            }
          />
          <Route path="/summary" element={<MonthlySummary />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
