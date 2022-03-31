import React, { useState, useContext, useEffect } from 'react';
import CardProducts from '../components/CardProducts';
import Footer from '../components/Footer';
import Header from '../components/Header';
import CategoryButtons from '../components/CategoryButtons';
import fetchApi from '../services/fetchApi';
import SearchBar from '../components/SearchBar';
import Context from '../Context/Context';

const Foods = () => {
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
  const context = useContext(Context);
  const { setDataFoods, dataFoods } = context;

  useEffect(() => {
    const fetchFoods = () => {
      fetchApi('meals', 'https://www.themealdb.com/api/json/v1/1/search.php?s=')
        .then((result) => {
          setDataFoods(result);
        })
        .catch((err) => console.log(err));
    };
    fetchFoods();
  }, [setDataFoods]);

  return (
    dataFoods
      ? (
        <>
          <Header
            title="Foods"
            showSearchButton
            setIsSearchBarVisible={ setIsSearchBarVisible }
            isSearchBarVisible={ isSearchBarVisible }
          />
          {isSearchBarVisible ? <SearchBar /> : <CategoryButtons /> }
          <CardProducts source="food" />
          <Footer />
        </>
      )
      : (
        <p>Loading...</p>
      )
  );
};

export default Foods;
