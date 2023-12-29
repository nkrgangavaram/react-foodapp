import React, { useEffect, useState } from "react";
import ReactDOM  from "react-dom/client";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { INITIAL_URL } from "../utils/constants";

const Body =()=>{

    const[listofrest,setlistofrest] = useState([]);
    const[filteredlistofrest,setfilteredlistofrest] = useState([]);
    const[searchtext,setsearchtext] = useState();

    const fetchData = async()=>{
      //  corsproxy == "https://corsproxy.io/""
        const data = await fetch(INITIAL_URL);
        const resp = await data.json();
        //console.log(resp.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
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
                    {filteredlistofrest.map(
                        (restaurant)=>
                       <Link key={restaurant.info.id} to={"restaurants/"+restaurant.info.id}> <RestaurantCard  respData={restaurant}/> </Link> 
                        )}               
            </div>
        </div>
        
    )

}

export default Body;