import React, { useState } from 'react';
import './Home.css';
import SearchBar from './SearchBar';
function Home() {
    
     
    return (
        <div className="home_zomato">
            <img src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" alt="" className="zomato_logo"/>
            <SearchBar hidebutton/>
        </div>
    )
}

export default Home
