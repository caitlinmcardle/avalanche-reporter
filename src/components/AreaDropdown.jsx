import React from "react";

export default function AreaDropdown({ areas, handleInput }) {
  return (
    <>
      <p className="p-choose-area">Choose an area:</p>
      <select className="dropdown-areas" name="area" onChange={handleInput}>
        {areas.map((area) => {
          return (
            <option
              className="dropdown-areas-content"
              key={area.id}
              value={area.id}
            >
              {area.Name}
            </option>
          );
        })}
      </select>
    </>
  );
}
