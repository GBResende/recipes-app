import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

const Footer = () => {
  const history = useHistory();

  return (
    <footer
      data-testid="footer"
      className="container fluid fixed-bottom d-flex justify-content-between"
    >
      <Button
        variant="link"
        onClick={ () => history.push('/drinks') }

      >
        <img src={ drinkIcon } alt="" data-testid="drinks-bottom-btn" />
      </Button>
      <Button
        variant="link"
        onClick={ () => history.push('/explore') }

      >
        <img src={ exploreIcon } alt="" data-testid="explore-bottom-btn" />
      </Button>
      <Button
        variant="link"
        onClick={ () => history.push('/foods') }

      >
        <img src={ mealIcon } alt="" data-testid="food-bottom-btn" />
      </Button>
    </footer>
  );
};

export default Footer;
