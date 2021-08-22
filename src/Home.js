import React, { useState } from "react";
import Search from "./Search";
import CocktailList from "./CocktailList";
import useFetch from "./hooks/useState";

const Home = () => {
  const url = "http://localhost:8000/drinks";
  const { data: cocktails, isPending, error } = useFetch(url);
  const [filteredCocktails, setFilteredCocktails] = useState(cocktails);

  const handleQueryChange = query => {
    setFilteredCocktails(
      cocktails.filter(c => c.name.toLowerCase().includes(query.toLowerCase()))
    );
  };

  return (
    <div>
      <Search onQueryChanged={handleQueryChange} />
      {error && <p>Whoops, we couldn't fetch you any cocktails.</p>}
      {isPending && <p>Let's get you a drink...</p>}
      {cocktails && (
        <CocktailList
          cocktails={filteredCocktails ? filteredCocktails : cocktails}
        />
      )}
    </div>
  );
};

export default Home;
