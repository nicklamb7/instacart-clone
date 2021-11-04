import React from 'react';
import './Header.css';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import PlaceRoundedIcon from '@material-ui/icons/PlaceRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';

function Header() {
    return (
        <header className="header">
            <MenuRoundedIcon />
            <div className="logo-container">
                <img className="logo" src="https://d2d8wwwkmhfcva.cloudfront.net/240x48/d2guulkeunn7d8.cloudfront.net/assets/beetstrap/brand/instacart-logo-color%403x-586fdf73b07dc9ca4b2c9a57f85f82c46f35debd4fd1887227b83f68e41d4f87.png" alt="" />
            </div>
            <div className="search-container">
                <input className="search" type="text" placeholder="Search products and stores" id="search" name="search-bar" />
                <SearchRoundedIcon />
            </div>
            <div className="zip-code">
                <PlaceRoundedIcon />
                10001
            </div>
            <div className="basket">
                <ShoppingCartRoundedIcon />
                0
            </div>
        </header>
    )
}

export default Header;
