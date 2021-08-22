import React from "react";
import CocktailListItem from "./CocktailListItem";

const CocktailList = ({ cocktails }) => {
  return (
    <div>
      {cocktails.length === 0 && (
        <p className="error-message">Whoops, no cocktails found...</p>
      )}
      <div className="grid">
        {cocktails &&
          cocktails.map(cocktail => (
            <CocktailListItem
              key={cocktails.indexOf(cocktail)}
              cocktail={cocktail}
            />
          ))}
      </div>
    </div>
  );
};

export default CocktailList;
