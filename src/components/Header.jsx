import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header({ title, showSearchButton, setIsSearchBarVisible, isSearchBarVisible }) {
  // const history = useHistory();
  // const { location: { pathname } } = history;
  // const haveToshow = ['/foods', '/drinks'];
  // // const showSearch = haveToshow.includes(pathname);

  //   const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
  return (
    <header>
      <Link to="/profile">
        <img src={ profileIcon } alt="" />
      </Link>
      <h1>{title}</h1>
      {showSearchButton && (
        <Button
          variant="link"
          onClick={ () => setIsSearchBarVisible(!isSearchBarVisible) }
        >
          <img src={ searchIcon } alt="" />
        </Button>
      )}
    </header>
  );
}
Header.defaultProp = {
  showSearchButton: false,
  isSearchBarVisible: false,
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  showSearchButton: PropTypes.bool.isRequired,
  isSearchBarVisible: PropTypes.bool.isRequired,
  setIsSearchBarVisible: PropTypes.func.isRequired,
};
export default Header;
