import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
=======

const ExploreDrinks = () => {
  const history = useHistory();

  const [surprise, setSurprise] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
      const { drinks } = await response.json();
      const { idDrink } = drinks[0];
      setSurprise(idDrink);
    };
    fetchData();
  }, []);
  return (
    <>
      <Header title="Explore Drinks" />
      <div className="explore-body">
        <Button
          variant="primary"
          data-testid="explore-by-ingredient"
          onClick={ () => history.push('/explore/drinks/ingredients') }
        >
          By Ingredient
        </Button>
        <Button
          data-testid="explore-surprise"
          onClick={ () => history.push(`/drinks/${surprise}`) }
        >
          Surprise me!
        </Button>
      </div>
      <Footer />
    </>

  );
};

export default ExploreDrinks;
