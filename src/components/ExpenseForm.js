import React, { useState } from 'react';

function ExpenseForm({ onAdd }) {
  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    date: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    setFormData({ description: '', amount: '', date: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <label className="form-label">Description</label>
        <input
          type="text"
          name="description"
          className="form-control"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Amount</label>
        <input
          type="number"
          name="amount"
          className="form-control"
          value={formData.amount}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Date</label>
        <input
          type="date"
          name="date"
          className="form-control"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
