import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import SearchBar from './SearchBar';

function Header({ title }) {
  const history = useHistory();
  const { location: { pathname } } = history;
  const haveToshow = ['/foods', '/drinks'];
  const showSearch = haveToshow.includes(pathname);
  return (
    <header>
      <h1>{title}</h1>
      {
        showSearch
        && <SearchBar />
      }
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
