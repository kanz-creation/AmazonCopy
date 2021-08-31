import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
function Header() {
  return (
    <div className="header">
      {/* logo goes on the left -> img */}
      <Link to="/">
        <img
          className="header-logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="bitches"
        ></img>
      </Link>
      {/*  search box*/}
      <div className="header-search">
        <input type="text" className="header-searchInput" />
        <SearchIcon className="header-searchIcon"></SearchIcon>
      </div>
      {/* awesome 3 nav links */}
      {/* basket icon with number */}
    </div>
  );
}

export default Header;
