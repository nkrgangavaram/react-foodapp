import React, { useEffect, useState } from "react";
import ReactDOM  from "react-dom/client";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body =()=>{

    const[listofrest,setlistofrest] = useState([]);

    const fetchData = async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const resp = await data.json();
        console.log(resp.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setlistofrest(resp?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); //optional chaining...
    }

    useEffect(()=>{
        fetchData();
    },[]);

    if(listofrest.length === 0){
        return <Shimmer/>
    }

   

    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    const filterlist = listofrest.filter(
                        (rest)=>rest.info.avgRating>4.3);
                    setlistofrest(filterlist);
                }}
                >Top Rated Restaurants</button>
            </div>
                <div className="res-container">
                    {listofrest.map((restaurant)=><RestaurantCard key={restaurant.info.id} respData={restaurant}/>)}               
            </div>
        </div>
    )

}

export default Body;