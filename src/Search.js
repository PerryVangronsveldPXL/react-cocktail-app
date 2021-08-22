import React from "react";

const Search = ({ onQueryChanged }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search cocktail..."
        name="s"
        onChange={event => onQueryChanged(event.target.value)}
      />
    </div>
  );
};

export default Search;
