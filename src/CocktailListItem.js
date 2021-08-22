import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";

const CocktailListItem = ({ cocktail }) => {
  const history = useHistory();

  const redirectRoute = id => {
    history.push(`/cocktails/${id}`);
  };

  const getFavorites = () => {
    const favoritesJSON = localStorage.getItem("favorites");
    return favoritesJSON ? JSON.parse(favoritesJSON) : [];
  };

  const isFavoriteCocktail = () => {
    const favorites = getFavorites();
    const index = favorites.indexOf(cocktail.id);
    return index > -1;
  };

  const [isFavorite, setIsFavorite] = useState(isFavoriteCocktail);

  const handleToggledFavorite = () => {
    setIsFavorite(previous => !previous);
    let favorites = getFavorites();
    const index = favorites.indexOf(cocktail.id);
    if (isFavoriteCocktail()) {
      favorites.splice(index, 1);
    } else {
      favorites.push(cocktail.id);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  return (
    <div className="cocktail-list-item">
      <img
        onClick={() => redirectRoute(cocktail.id)}
        src={cocktail.drinkThumb}
        alt={cocktail.name}
      />
      {cocktail && (
        <div>
          <h4 onClick={() => redirectRoute(cocktail.id)}>{cocktail.name}</h4>
          <p>{cocktail.description}</p>
        </div>
      )}
      <FavoriteButton
        toggledFavorite={handleToggledFavorite}
        isFavorite={isFavorite}
      />
    </div>
  );
};

export default CocktailListItem;
