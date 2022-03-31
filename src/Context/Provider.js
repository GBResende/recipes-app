import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [dataFoods, setDataFoods] = useState([]);
  const [dataDrinks, setDataDrinks] = useState([]);
  const [searchFoods, setSearchFoods] = useState({});
  const [filterFoods, setFilterFoods] = useState([]);
  const [filterDrinks, setFilterDrinks] = useState([]);

  const myContext = {
    dataFoods,
    setDataFoods,
    dataDrinks,
    setDataDrinks,
    searchFoods,
    setSearchFoods,
    filterFoods,
    setFilterFoods,
    filterDrinks,
    setFilterDrinks,
  };

  return (
    <Context.Provider value={ myContext }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
