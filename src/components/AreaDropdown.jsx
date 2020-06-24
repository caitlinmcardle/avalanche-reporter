import React from "react";

export default function AreaDropdown({ areas, handleSubmit, handleInput }) {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <p>Choose an area:</p>
      <select name="area" onChange={handleInput}>
        {areas.map((area) => {
          return (
            <option key={area.id} value={area.id}>
              {area.Name}
            </option>
          );
        })}
      </select>
      <button>Go</button>
    </form>
  );
}
