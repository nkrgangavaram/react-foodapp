import React, { useEffect, useState } from "react";
import ReactDOM  from "react-dom/client";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { INITIAL_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body =()=>{

    const[listofrest,setlistofrest] = useState([]);
    const[filteredlistofrest,setfilteredlistofrest] = useState([]);
    const[searchtext,setsearchtext] = useState();

    const RestauarantCardPromoted = withPromotedLabel(RestaurantCard); //Higher order component format...

    const fetchData = async()=>{
      //  corsproxy == "https://corsproxy.io/""
        const data = await fetch(INITIAL_URL);
        const resp = await data.json();
        console.log(resp.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setlistofrest(resp?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredlistofrest(resp?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); //optional chaining...
        //optional chaining...
    }

    useEffect(()=>{
        fetchData();
    },[]); 

    const onlineStatus = useOnlineStatus(); //custome hook..
    if(onlineStatus === false) return <h1> Looks like you are offline....plz check internet</h1>
    

    return listofrest.length === 0?(<Shimmer/>):
        (<div className="body">
            <div className="filter flex">
            <div className="search m-4 p-4">
                <input type="text"
                 className="border border-solid border-black" value={searchtext} 
                onChange={(e)=>{
                setsearchtext(e.target.value);
                }}/>
                <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={()=>{
                    const filteredrest = listofrest.filter((resp)=>              
                        resp.info.name.toLowerCase().includes(searchtext.toLowerCase())
                    );
                    setfilteredlistofrest(filteredrest);
                }}
                >Search</button>
            </div>
                <div className="filter m-4 p-4 flex items-center">
                <button className="filter-btn px-4 py-2 bg-gray-100 rounded-lg" onClick={()=>{
                    const filterlist = listofrest.filter(
                        (rest)=>rest.info.avgRating>4.3);
                    setlistofrest(filterlist);
                }}
                >Top Rated Restaurants
                </button>
                </div>
             
            </div>
                <div className="res-container flex flex-wrap">
                    {filteredlistofrest.map(
                        (restaurant)=>
                       <Link key={restaurant.info.id} to={"restaurants/"+restaurant.info.id}>
                        {restaurant.info.isOpen? (<RestauarantCardPromoted respData={restaurant}/>):
                        ( <RestaurantCard  respData={restaurant}/>)
                        } </Link> 
                        )}               
            </div>
        </div>
        
    )

}

export default Body;