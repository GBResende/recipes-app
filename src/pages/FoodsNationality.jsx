import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const FoodsNationality = () => {
  const [selectedOption, setSelectedOption] = useState('All');
  const [nationalities, setNationalities] = useState([]);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://www.themealdb.com/api/json/v1/1/list.php?a=list',
      );
      const data = await response.json();
      setNationalities(data.meals);
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchFilteredFoods = async () => {
      if (selectedOption === 'All') {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        const data = await response.json();
        const indexSlice = 12;
        setFoods(data.meals.slice(0, indexSlice));
      } else {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${selectedOption}`);
        const data = await response.json();
        const indexSlice = 12;
        setFoods(data.meals.slice(0, indexSlice));
      }
    };
    fetchFilteredFoods();
  }, [selectedOption]);

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <>
      <Header />
      <select
        data-testid="explore-by-nationality-dropdown"
        onChange={ handleSelectChange }
        value={ selectedOption }
      >
        <option value="All" data-testid="All-option">All</option>
        {nationalities.map((nationality, index) => (
          <option
            data-testid={ `${nationality.strArea}-option` }
            key={ index }
            value={ nationality.strArea }
          >
            {nationality.strArea}
          </option>
        ))}
      </select>
      {foods
        && foods.map((food, index) => (
          <Link to={ `/foods/${food.idMeal}` } key={ index }>
            <div data-testid={ `${index}-recipe-card` }>
              <img
                data-testid={ `${index}-card-img` }
                src={ food.strMealThumb }
                alt={ food.strMeal }
              />
              <p data-testid={ `${index}-card-name` }>{food.strMeal}</p>
            </div>
          </Link>
        ))}
      <Footer />
    </>
  );
};

export default FoodsNationality;
