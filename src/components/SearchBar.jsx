import React, { useState, useContext } from 'react';
import Context from '../Context/Context';

function SearchBar() {
  const context = useContext(Context);
  console.log('context', context);
  const { searchFoods, setSearchFoods } = context;
  const [searchValues, setSearchValues] = useState({
    value: '',
    searchType: '',
  });

  const handleChange = ({ target }) => {
    console.log('searchFoods', searchFoods);
    setSearchValues({
      ...searchValues,
      [target.name]: target.value,
    });
  };

  const handleSearchClick = () => {
    setSearchFoods([
      searchValues,
    ]);
  };

  return (
    <div>
      <input
        type="text"
        name="value"
        placeholder="digite aqui"
        value={ searchValues.value }
        onChange={ handleChange }
      />
      <label htmlFor="ingredient">
        <input
          type="radio"
          name="searchType"
          id="ingredient"
          value="ingredient"
          onChange={ handleChange }
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
        />
        First Letter
      </label>
      <button type="button" onClick={ handleSearchClick }>Search</button>
    </div>
  );
}

export default SearchBar;
