import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Context from '../Context/Context';

const RecipesFilters = () => {
  const [doneRecipes, setDoneRecipes] = useState([]);
  const [filter, setFilter] = useState('all');
  const { setFilterRecipes } = useContext(Context);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  useEffect(() => {
    const doneRecipesLS = JSON.parse(localStorage.getItem('doneRecipes'));
    setDoneRecipes(doneRecipesLS);
  }, []);

  useEffect(() => {
    const filterValues = doneRecipes && doneRecipes.filter((recipe) => {
      if (filter === 'all') {
        return true;
      }
      return recipe.type === filter;
    });
    setFilterRecipes(filterValues);
  }, [filter, setFilterRecipes, doneRecipes]);

  return (
    <div className="d-flex justify-content-around fluid">
      <Button
        data-testid="filter-by-all-btn"
        onClick={ handleFilterChange }
        value="all"
      >
        All
      </Button>

      <Button
        data-testid="filter-by-food-btn"
        onClick={ handleFilterChange }
        value="food"
      >
        Foods
      </Button>
      <Button
        data-testid="filter-by-drink-btn"
        onClick={ handleFilterChange }
        value="drink"
      >
        Drinks
      </Button>
    </div>
  );
};

export default RecipesFilters;
