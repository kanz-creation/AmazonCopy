import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';

function Header() {
  const [{ basket }] = useStateValue();

  console.log(basket);
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
      <div className="header-nav">
        {/* 1 st Link  */}
        <Link to="/login" className="header-link">
          <div className="header-option">
            <span className="header-optionLineOne">Hello Kaneez</span>
            <span className="header-optionLineTwo"> Sign In</span>
          </div>
        </Link>
        {/* Second Link */}
        <Link to="/" className="header-link">
          <div className="header-option">
            <span className="header-optionLineOne">Returns</span>
            <span className="header-optionLineTwo"> Orders</span>
          </div>
        </Link>
        {/*  Third link */}
        <Link to="/" className="header-link">
          <div className="header-option">
            <span className="header-optionLineOne">Your</span>
            <span className="header-optionLineTwo"> Prime</span>
          </div>
        </Link>
        {/* Fourth Link */}
        <Link to="/checkout" className="header-link">
          <div className="header-optionBasket"></div>
          {/* Shopping basket icon */}
          <ShoppingBasketIcon />
          {/*  Number of items in basket */}
          <span className="header-optionLineTwo header-basketCount">
            {basket.length}
          </span>
        </Link>
      </div>
      {/* basket icon with number */}
    </div>
  );
}

export default Header;
