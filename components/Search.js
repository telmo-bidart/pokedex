import { useState } from "react";

export const SearchBox = () => {
  const [value, setValue] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="flex">
        <input
          type="text"
          placeholder="Search pokemon"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">search</button>
      </div>
    </form>
  );
};
