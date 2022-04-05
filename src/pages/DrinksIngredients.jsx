import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Context from '../Context/Context';

const DrinksIngredients = () => {
  const { setFilterDrinks } = useContext(Context);
  const [ingredients, setIngredients] = useState([]);
  const indexSlice = 12;
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list',
      );
      const { drinks } = await response.json();

      setIngredients(drinks.slice(0, indexSlice));
    };
    fetchData();
  }, []);

  const fetchFilteredDrinks = async (ingredient) => {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`,
    );
    const results = await response.json();
    setFilterDrinks(results.drinks.slice(0, indexSlice));
  };

  return (
    <>
      <Header title="Explore Ingredients" />
      <div className="explore-body">
        {ingredients
          && ingredients.map((ingredient, index) => {
            console.log(ingredient);
            return (
              <Link
                to="/drinks"
                key={ index }
                onClick={ () => fetchFilteredDrinks(ingredient.strIngredient1) }
              >
                <div className="card" data-testid={ `${index}-ingredient-card` }>
                  <img
                    className="card-img"
                    src={ `https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-Small.png` }
                    alt={ ingredient.strIngredient1 }
                    data-testid={ `${index}-card-img` }
                  />
                  <p data-testid={ `${index}-card-name` }>
                    {ingredient.strIngredient1}
                  </p>
                </div>
              </Link>
            );
          })}
      </div>
      <Footer />
    </>
  );
};

export default DrinksIngredients;
