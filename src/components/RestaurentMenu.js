import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

function RestaurentMenu() {

    const {resid} = useParams();
   const resInfo = useRestaurantMenu(resid); ///custom hook....

   const[showIndex,setshowIndex] = useState(null);

    if(resInfo === null)
    { return <Shimmer/> };

    const {name,cuisines,avgRating} = resInfo?.cards[0]?.card?.card?.info;
   //const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
   //console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards);
   //console.log(itemCards);

   const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c)=> c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
   );
  // console.log(categories);

   // console.log(resInfo?.cards[0]?.card?.card?.info);



  return (
    <div className='text-center'>
      <h1 className='font-bold my-6 text-2xl'>{name}</h1>
        <p className='font-bold text-lg'>{cuisines.join(",")}</p>
      <p>{avgRating}</p>
      {categories?.map((category,index)=>{
      //controled component parent is controlling the whethe rto show accordon ..
        return (<RestaurantCategory
         key={category?.card?.card?.title} 
         data={category?.card?.card}
         showItems = {index === showIndex ? true:false}
         getIndex={ ()=>{setshowIndex(index)} }
        />)}
        
      )}    
    </div>
  );
};

export default RestaurentMenu;
