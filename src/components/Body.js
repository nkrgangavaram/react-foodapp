import React, { useEffect, useState } from "react";
import ReactDOM  from "react-dom/client";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body =()=>{

    const[listofrest,setlistofrest] = useState([]);
    const[filteredlistofrest,setfilteredlistofrest] = useState([]);
    const[searchtext,setsearchtext] = useState();

    const fetchData = async()=>{
      //  corsproxy == "https://corsproxy.io/""
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const resp = await data.json();
        console.log(resp.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setlistofrest(resp?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredlistofrest(resp?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); //optional chaining...
        //optional chaining...
    }

    useEffect(()=>{
        fetchData();
    },[]); 

    return listofrest.length === 0?(<Shimmer/>):
        (<div className="body">
            <div className="filter">
            <div className="search">
                <input type="text" className="search-box" value={searchtext} 
                onChange={(e)=>{
                setsearchtext(e.target.value);
                }}/>
                <button className="btn-search" onClick={()=>{
                    const filteredrest = listofrest.filter((resp)=>              
                        resp.info.name.toLowerCase().includes(searchtext.toLowerCase())
                    );
                    setfilteredlistofrest(filteredrest);
                }}
                >Search</button>
            </div>

                <button className="filter-btn" onClick={()=>{
                    const filterlist = listofrest.filter(
                        (rest)=>rest.info.avgRating>4.3);
                    setlistofrest(filterlist);
                }}
                >Top Rated Restaurants</button>
            </div>
                <div className="res-container">
                    {filteredlistofrest.map((restaurant)=><RestaurantCard key={restaurant.info.id} respData={restaurant}/>)}               
            </div>
        </div>
        
    )

}

export default Body;