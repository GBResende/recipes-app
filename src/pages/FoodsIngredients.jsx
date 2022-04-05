import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Context from '../Context/Context';

const FoodsIngredients = () => {
  const { setFilterFoods } = useContext(Context);
  const [ingredients, setIngredients] = useState([]);
  const indexSlice = 12;
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://www.themealdb.com/api/json/v1/1/list.php?i=list',
      );
      const { meals } = await response.json();

      setIngredients(meals.slice(0, indexSlice));
    };
    fetchData();
  }, []);

  const fetchFilteredFoods = async (ingredient) => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`,
    );
    const results = await response.json();
    console.log(results);
    setFilterFoods(results.meals.slice(0, indexSlice));
  };

  return (
    <>
      <Header title="Explore Ingredients" />
      <div className="explore-body">
        {ingredients
          && ingredients.map((ingredient, index) => (

            <Link
              to="/foods"
              key={ index }
              onClick={ () => fetchFilteredFoods(ingredient.strIngredient) }
            >
              <div className="card" data-testid={ `${index}-ingredient-card` }>
                <img
                  className="card-img"
                  src={ `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png` }
                  alt={ ingredient.strIngredient }
                  data-testid={ `${index}-card-img` }
                />
                <p data-testid={ `${index}-card-name` }>
                  {ingredient.strIngredient}
                </p>
              </div>
            </Link>
          ))}
      </div>
      <Footer />
    </>
  );
};
export default FoodsIngredients;
