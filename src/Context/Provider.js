import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import fetchAPI from '../services/fetchApi';

const indexSlice = 12;

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [searchFoods, setSearchFoods] = useState({
    searchFoods: {},
    setSearchFoods: '',
  });
  const [filterFoods, setFilterFoods] = useState('');

  useEffect(() => {
    const apiResult = async () => {
      const response = await fetchAPI();
      const result = await response.meals.slice(0, indexSlice);
      setData(result);
    };
    apiResult();
  }, []);

  const myContext = {
    data,
    searchFoods,
    setSearchFoods,
    filterFoods,
    setFilterFoods,
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
