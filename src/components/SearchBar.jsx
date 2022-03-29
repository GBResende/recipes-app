import React, { useState } from 'react';

function SearchBar() {
  const [filterValue, setFilterValue] = useState([]);

  const handleClick = () => {
    console.log('buscar');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="digite aqui"
        value={ filterValue }
        onChange={ ({ target }) => setFilterValue(target.value) }
      />
      <label htmlFor="ingredient">
        <input
          type="radio"
          name="search-type"
          id="ingredient"
          value="ingredient"
        />
        Ingredient
      </label>
      <label htmlFor="name">
        <input
          type="radio"
          name="search-type"
          id="name"
          value="name"
        />
        Name
      </label>
      <label htmlFor="first-letter">
        <input
          type="radio"
          name="search-type"
          id="first-letter"
          value="first-letter"
        />
        First Letter
      </label>
      <button type="button" onClick={ handleClick }>Search</button>
    </div>
  );
}

export default SearchBar;
