import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Explorer = () => {
  const history = useHistory();

  return (
    <>
      <Header title="Explore" />
      <div className="explore-body">
        <Button
          data-testid="explore-foods"
          onClick={ () => history.push('/explore/foods') }
        >
          Explore Foods

        </Button>
        <Button
          data-testid="explore-drinks"
          onClick={ () => history.push('/explore/drinks') }
        >
          Explore Drinks

        </Button>
      </div>
      <Footer />
    </>

  );
};

export default Explorer;
