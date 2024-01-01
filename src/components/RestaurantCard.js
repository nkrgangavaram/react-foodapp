import React, { useState,useContext } from "react";
import ReactDOM  from "react-dom/client";
import { CDN_URL } from "../utils/constants"; 
import UserContext from "../utils/UserContext";

const RestaurantCard =(props)=>{

    const {loggedInUser} = useContext(UserContext);
    const{respData} = props;

    const{cloudinaryImageId,name,cuisines,avgRating,sla} = respData?.info;
    return(
        <div className="m-4 p-4 w-48 rounded-lg bg-gray-100 hover:bg-gray-200">
            <img className="res-logo w-72 rounded-lg"
            alt="res-logo" src={CDN_URL+cloudinaryImageId}>

            </img>
            <h4 className="font-bold py-4 text-lg">{name}</h4>
            <h4 className="cuisines break-words overflow-auto">{cuisines.join(",")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla.deliveryTime} minutes</h4>
            <h4>{loggedInUser}</h4>

        </div>
    );
}


//Higher Order function..
export const withPromotedLabel = (RestaurantCard)=>{
    return (props)=>{
        return (
            <div>
                <label className="opened-label">Opened..</label>
                <RestaurantCard {...props}/> 
            </div>
        );
    };
}

export default RestaurantCard;