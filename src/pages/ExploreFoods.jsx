import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ExploreFoods = () => {
  const history = useHistory();

  const [surprise, setSurprise] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
      const { meals } = await response.json();
      const { idMeal } = meals[0];
      setSurprise(idMeal);
    };
    fetchData();
  }, []);
  return (
    <>
      <Header title="Explore Foods" />
      <div className="explore-body">
        <Button
          data-testid="explore-by-ingredient"
          onClick={ () => history.push('/explore/foods/ingredients') }
        >
          By Ingredient
        </Button>
        <Button
          data-testid="explore-by-nationality"
          onClick={ () => history.push('/explore/foods/nationalities') }
        >
          By Nationality
        </Button>
        <Button
          data-testid="explore-surprise"
          onClick={ () => history.push(`/foods/${surprise}`) }
        >
          Surprise me!
        </Button>
      </div>
      <Footer />
    </>

  );
};

export default ExploreFoods;
