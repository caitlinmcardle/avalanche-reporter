import React from "react";

export default function AreaDropdown({ areas, handleInput }) {
  return (
    <>
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
    </>
  );
}
