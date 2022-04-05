import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../Context/Context';
import fetchSearch from '../services/fetchSearch';

function SearchBar() {
  const context = useContext(Context);
  // console.log('context', context);
  const { setFilterFoods, setFilterDrinks } = context;
  const [searchValues, setSearchValues] = useState({
    value: '',
    searchType: '',
  });
  const { location: { pathname }, push } = useHistory();

  const isFoodLocation = pathname.includes('food');
  const wichIngredient = isFoodLocation ? 'meals' : 'drinks';

  const type = isFoodLocation ? 'foods' : 'drinks';
  const objKey = isFoodLocation ? 'idMeal' : 'idDrink';

  const typeAPI = pathname.includes('food') ? 'themealdb' : 'thecocktaildb';

  const setContextSearch = isFoodLocation ? setFilterFoods : setFilterDrinks;

  const handleChange = ({ target }) => {
    setSearchValues({
      ...searchValues,
      [target.name]: target.value,
    });
  };
  const alertTooManyLetters = 'Your search must have only 1 (one) character';
  const alertNotFound = 'Sorry, we haven\'t found any recipes for these filters.';
  const handleSearchClick = () => {
    const { value, searchType } = searchValues;
    if (searchType === 'first-letter' && value.length > 1) {
      return global.alert(alertTooManyLetters);
    }
    fetchSearch(typeAPI, searchType, value, wichIngredient)
      .then((result) => {
        console.log('result', result);
        if (!result) {
          return global.alert(alertNotFound);
        }
        if (result.length === 1) {
          console.log('objKey', objKey);
          push(`/${type}/${result[0][objKey]}`);
        }
        setContextSearch(result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <input
        type="text"
        name="value"
        placeholder="digite aqui"
        value={ searchValues.value }
        onChange={ handleChange }
        data-testid="search-input"
      />
      <label htmlFor="ingredient">
        <input
          type="radio"
          name="searchType"
          id="ingredient"
          value="ingredient"
          onChange={ handleChange }
          data-testid="ingredient-search-radio"
        />
        Ingredient
      </label>
      <label htmlFor="name">
        <input
          type="radio"
          name="searchType"
          id="name"
          value="name"
          onChange={ handleChange }
          data-testid="name-search-radio"
        />
        Name
      </label>
      <label htmlFor="first-letter">
        <input
          type="radio"
          name="searchType"
          id="first-letter"
          value="first-letter"
          onChange={ handleChange }
          data-testid="first-letter-search-radio"
        />
        First Letter
      </label>
      <button
        type="button"
        onClick={ handleSearchClick }
        data-testid="exec-search-btn"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
