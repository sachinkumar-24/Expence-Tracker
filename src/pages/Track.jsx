import React, { useEffect, useRef, useState } from "react";

const Track = () => {
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [timeFilter, setTimeFilter] = useState("Daily");
  const [expenses, setExpenses] = useState([]);
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  //fetching data from localstorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("expenses")) || [];
    setExpenses(saved);
  }, []);

  //logic for grouping data
  const groupByTime = (expenses, period) => {
    const grouped = {};

    expenses.forEach((exp) => {
      const date = new Date(exp.date);

      if (isNaN(date)) return;

      let key;
      if (period === "Daily") {
        key = date.toLocaleDateString("en-GB"); //12/09/2012
      } else if (period === "Weekly") {
        const week = Math.ceil(date.getDate() / 7); //15
        key = `${date.getMonth() + 1}-W${week}`;
      } else if (period === "Monthly") {
        key = `${date.getMonth() + 1}-${date.getFullYear()}`;
      }

if (!grouped[key]) grouped[key] = 0;

      grouped[key] += parseFloat(exp.amount);
    });
    return grouped;
  };

  //draw chart

  useEffect(() => {
    if (!window.Chart || !chartRef.current) {
      return;
    }

    const filterExpenses =
      categoryFilter === "All"
        ? expenses
        : expenses.filter((exp) => exp.category === categoryFilter);

    const groupedData = groupByTime(filterExpenses, timeFilter);

    const labels = Object.keys(groupedData);
    const values = Object.values(groupedData);

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    if (labels.length > 0) {
      const ctx = chartRef.current.getContext("2d");
      chartInstance.current = new window.Chart(ctx, {
        type: "bar",
        data: {
          labels,
          datasets: [
            {
              label: `Expenses (${timeFilter})`,
              data: values,
              backgroundColor: "lightgreen",
              borderRadius: 6,
            },
          ],
        },

        options: {
          responsive: true,
          plugins: {
            legend: {
              display: true,
              position: "top",
            },
            title: {
              display: true,
              text: `Expense Tarcking -${timeFilter}`,
            },
          },
        },
      });
    }
  }, [expenses, categoryFilter, timeFilter]);

  //category dropdown
  const category = ["All", ...new Set(expenses.map((exp) => exp.category))];

  return (
    <div className="p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold text-blue-500 mb-5">
        Track your expenses
      </h2>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
        >
          {category.map((cat, i) => (
            <option key={i} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <select
          value={timeFilter}
          onChange={(e) => setTimeFilter(e.target.value)}
          className="p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
        >
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
        </select>
      </div>

      {expenses.length === 0 ? (
        <p className="text-gray-500">No expenses to display.</p>
      ) : (
        <canvas ref={chartRef} height="100"></canvas>
      )}

    </div>
  );
};

export default Track;