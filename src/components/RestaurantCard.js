import React, { useState } from "react";
import ReactDOM  from "react-dom/client";
import { CDN_URL } from "../utils/constants"; 

const RestaurantCard =(props)=>{
    const{respData} = props;
    const{cloudinaryImageId,name,cuisines,avgRating,sla} = respData?.info;
    return(
        <div className="res-card">
            <img className="res-logo"
            alt="res-logo" src={CDN_URL+cloudinaryImageId}>

            </img>
            <h4>{name}</h4>
            <h4 className="cuisines">{cuisines.join(",")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla.deliveryTime} minutes</h4>

        </div>
    );
}

export default RestaurantCard;