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
  const { setDataDrinks, dataDrinks } = context;

  useEffect(() => {
    const fetchDrinks = () => {
      fetchApi('drinks', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
        .then((result) => {
          setDataDrinks(result);
        })
        .catch((err) => console.log(err));
    };
    fetchDrinks();
  }, [setDataDrinks]);

  return (
    dataDrinks
      ? (
        <>
          <Header
            title="Drinks"
            showSearchButton
            setIsSearchBarVisible={ setIsSearchBarVisible }
            isSearchBarVisible={ isSearchBarVisible }
          />
          {isSearchBarVisible ? <SearchBar /> : <CategoryButtons /> }
          <CardProducts source="drink" />
          <Footer />
        </>
      )
      : (
        <p>Loading...</p>
      )
  );
};

export default Foods;
