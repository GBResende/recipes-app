/* eslint-disable import/no-unresolved */
import React from 'react';
import { Button } from 'react-bootstrap';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  return (
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
}

export default Footer;
