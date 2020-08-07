import React from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import "./Header.css";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }] = useStateValue();
  console.log("basket is");
  console.log(basket);
  return (
    <nav className="header">
      <div className="header_left">
        <MenuIcon className="header_menuIcon" fontSize="large" />
        <Link to="/">
          <img
            className="header_logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
        </Link>
      </div>
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link className="header_link" to="/login">
          <div className="header_option">
            <span className="header_optionLineOne">Hello</span>
            <span className="header_optionLineTwo">Sign In</span>
          </div>
        </Link>
        <Link className="header_link" to="/">
          <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link className="header_link" to="/">
          <div className="header_option">
            <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Prime</span>
          </div>
        </Link>
      </div>
      <Link to="/checkout" className="header_link">
        <div className="header_optionBasket">
          <ShoppingCartIcon />
          <span className="header_optionLineTwo header_basketCount">
            {basket?.length}
          </span>
        </div>
      </Link>
    </nav>
  );
}

export default Header;
