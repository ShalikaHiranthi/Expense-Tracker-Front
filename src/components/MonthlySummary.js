import React, { useEffect, useState } from "react";
import axios from "axios";

function MonthlySummary() {
  const [summary, setSummary] = useState([]);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/expenses/monthly-summary"
        );
        setSummary(res.data);
      } catch (err) {
        console.error("Failed to load monthly summary:", err);
      }
    };

    fetchSummary();
  }, []);

  const monthName = (m) =>
    new Date(0, m - 1).toLocaleString("default", { month: "long" });

  return (
    <div className="mt-4">
      <h5>Monthly Totals</h5>
      <ul className="list-group">
        {summary.map((item, idx) => (
          <li
            key={idx}
            className="list-group-item d-flex justify-content-between"
          >
            <span>
              {monthName(item._id.month)} {item._id.year}
            </span>
            <span>€{item.total.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MonthlySummary;
