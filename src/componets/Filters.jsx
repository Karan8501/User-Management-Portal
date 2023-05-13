import React, { useState } from "react";

import "./Filter.css";

const Filters = ({ onSearchChange, onFilterChange, domains }) => {
  const UnqueDomains = new Set(domains);
  domains = Array.from(UnqueDomains);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    onFilterChange(name, value);
  };

  return (
    <div className="filters">
      <label htmlFor="text">
        <input
          type="text"
          placeholder="Enter the name"
          onChange={(e) => onSearchChange(e.target.value)}
          style={{ color: "black", padding: "5px" }}
        />
      </label>

      <label>
        Domain:
        <select name="domain" onChange={handleFilterChange}>
          <option value="">All</option>
          {domains?.map((domain, index) => {
            return (
              <option value={domain} key={index}>
                {domain}
              </option>
            );
          })}
          {/* Add more options for other domains */}
        </select>
      </label>

      <label>
        Gender:
        <select name="gender" onChange={handleFilterChange}>
          <option value="">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </label>

      <label>
        Availability:
        <select name="availability" onChange={handleFilterChange}>
          <option value="">All</option>
          <option value="available">Available</option>
          <option value="unavailable">Not Available</option>
        </select>
      </label>
    </div>
  );
};

export default Filters;
