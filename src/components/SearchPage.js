import { Avatar, Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import './SearchPage.css';
import { useStateValue } from './StateProvider';
import useZomatoSearch from './useZomatoSearch';
import CallIcon from '@material-ui/icons/Call';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import TableChartIcon from '@material-ui/icons/TableChart';
function SearchPage() {

    const [{ term }, dispatch] = useStateValue();
    const { data } = useZomatoSearch(term);
    console.log(data);

    

    return (
        <div className="zomato_searchPage">
            <div className="zomato_searchPageHeader">
                <img className="searchPage_zomatoLogo" src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" alt="" />
                <SearchBar hidebutton />
                <div className="zomato_avatar">
                    <Avatar />
                </div>
            </div>
            <div class="zomato_body">
                {data?.restaurants.map(item => (
                    <div className="results">
                        <div className="result_header">
                            <img className="featured_image" src={item.restaurant.featured_image} />
                            <div class="details">
                                <p className="restaurant_name">{item.restaurant.name}</p>
                                <p className="restaurant_rating">{item.restaurant.user_rating.aggregate_rating} <span>⭐</span></p>
                                <p className="restaurant_locality">{item.restaurant.location.locality}</p>
                                <p className="restaurant_address">{item.restaurant.location.address}</p>
                            </div>
                        </div>
                        <hr />
                        <div className="zomato_dishdetails">
                        <p>Cusines: {item.restaurant.cuisines}</p>
                        <p>Book for Two: ₹{item.restaurant.average_cost_for_two}</p>
                        <p>Hours: {item.restaurant.timings}</p>
                        </div>
                        <div className="resultButtons">
                            <a href={item.restaurant.book_url} target = "_blank"><TableChartIcon/>Book a Table</a>
                            <a href={item.restaurant.book_url} target = "_blank"><CallIcon/>Call</a>
                            <a href={item.restaurant.menu_url} target = "_blank"><RestaurantMenuIcon/>View Menu</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SearchPage
