import React from 'react';
import { Button } from 'react-bootstrap';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

const Footer = () => (
  <div>
    <Button variant="link">
      <img src={ drinkIcon } alt="" />
    </Button>
    <Button variant="link">
      <img src={ exploreIcon } alt="" />
    </Button>
    <Button variant="link">
      <img src={ mealIcon } alt="" />
    </Button>
  </div>
);

export default Footer;
