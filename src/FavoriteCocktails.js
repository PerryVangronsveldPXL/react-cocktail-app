import React from "react";
import CocktailList from "./CocktailList";
import useFetch from "./hooks/useState";

const FavoriteCocktails = () => {
  const favoritesJSON = localStorage.getItem("favorites");
  let favorites = favoritesJSON ? JSON.parse(favoritesJSON) : [];
  const url = "http://localhost:8000/drinks";
  const { data: cocktails, isPending, error } = useFetch(url);
  return (
    <div>
      {error && <p>You haven't added any favorite cocktails yet.</p>}
      {isPending && <p>Getting your favorite drinks...</p>}
      {cocktails && (
        <CocktailList
          cocktails={cocktails.filter(c => favorites.includes(c.id))}
        />
      )}
    </div>
  );
};
export default FavoriteCocktails;
