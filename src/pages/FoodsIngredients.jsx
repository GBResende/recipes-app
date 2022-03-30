import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const FoodsIngredients = () => {
  const [ingredients, setIngredients] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
      const { meals } = await response.json();

      const limit = 12;
      setIngredients(meals.slice(0, limit));
    };
    fetchData();
  }, []);

  return (
    <>
      <Header title="Food Ingredients" />
      <div className="explore-body">
        {ingredients && ingredients.map((ingredient, index) => (
          <Link to="/drinks" key={ index }>
            <div
              className="card"
              data-testid={ `${index}-ingredient-card` }
            >
              <img
                className="card-img"
                src={ `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png` }
                alt={ ingredient.strIngredient }
                data-testid={ `${index}-card-img` }
              />
              <p data-testid={ `${index}-card-name` }>{ingredient.strIngredient}</p>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </>
  );
};
export default FoodsIngredients;
