import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

const Footer = () => {
  const history = useHistory();

  return (
    <div className="explore-bar">
      <Button variant="link" onClick={ () => history.push('/explore/drinks') }>
        <img src={ drinkIcon } alt="" />
      </Button>
      <Button variant="link" onClick={ () => history.push('/explore') }>
        <img src={ exploreIcon } alt="" />
      </Button>
      <Button variant="link" onClick={ () => history.push('/explore/foods') }>
        <img src={ mealIcon } alt="" />
      </Button>
    </div>
  );
};

export default Footer;
