import React, { useState } from "react";
// import { Calendar } from "react-calendar";
import "./FiltreBar.css";

function FilterBar() {
  const [category, setCategory] = useState(null);
  const [location, setLocation] = useState(null);
  //   const [date, setDate] = useState(null);

  return (
    <div className="filtre_subnav">
      <form className="form_filtre">
        <label>
          Category :
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">--</option>
            <option value="confort">Confort</option>
            <option value="casual">Casual</option>
          </select>
        </label>
        <label>
          Localisation :
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">All</option>
            <option value="lyon">Lyon</option>
            <option value="bordeaux">Bordeaux</option>
            <option value="paris">Paris</option>
            <option value="other">Autres</option>
          </select>
        </label>
      </form>
    </div>
  );
}

export default FilterBar;
