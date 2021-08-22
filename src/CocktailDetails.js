import React from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./hooks/useState";

const CocktailDetails = () => {
  const { id } = useParams();
  const url = `http://localhost:8000/drinks/${id}`;
  const { data: cocktail, error, isPending } = useFetch(url);
  let history = useHistory();

  return (
    <div>
      <p className="back-button" onClick={() => history.goBack()}>
        Back
      </p>
      {error && <p>Huh? That cocktail couldn't be found.</p>}
      {isPending && <p>Coming up...</p>}
      {cocktail && (
        <div className="cocktail-details clearfix">
          <img src={cocktail.drinkThumb} alt={cocktail.name} />
          <h2>{cocktail.name}</h2>
          <p>{cocktail.description}</p>
          <h3>Recipe</h3>
          <ul>
            {cocktail.ingredients.map(ingredient => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
          <p>{cocktail.instructions}</p>
        </div>
      )}
    </div>
  );
};

export default CocktailDetails;
