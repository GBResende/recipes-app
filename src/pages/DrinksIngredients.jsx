import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const DrinksIngredients = () => {
  const [ingredients, setIngredients] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list',
      );
      const { drinks } = await response.json();

      const limit = 12;
      setIngredients(drinks.slice(0, limit));
    };
    fetchData();
  }, []);

  return (
    <>
      <Header title="Drinks Ingredients" />
      <div className="explore-body">
        {ingredients
          && ingredients.map((ingredient, index) => (
            <Link to="/foods" key={ index }>
              <div
                className="card"
                data-testid={ `${index}-ingredient-card` }
              >
                <img
                  className="card-img"
                  src={ `https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-Small.png` }
                  alt={ ingredient.strIngredient1 }
                  data-testid={ `${index}-card-img` }
                />
                <p data-testid={ `${index}-card-name` }>{ingredient.strIngredient1}</p>
              </div>
            </Link>
          ))}
      </div>
      <Footer />
    </>
  );
};

export default DrinksIngredients;
