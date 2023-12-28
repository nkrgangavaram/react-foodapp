import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_URL, MENU_URL_END } from '../utils/constants';

function RestaurentMenu() {

    const [resInfo,setresInfo] = useState(null);
    const {resid} = useParams();

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async()=>{
                    //&catalog_qa=undefined&submitAction=ENTER"  --menu url emding
        const data = await fetch(MENU_URL+resid+MENU_URL_END);
        const jsondata = await data.json();
       // console.log(jsondata.data);
        setresInfo(jsondata.data);
    };

    if(resInfo === null)
    { return <Shimmer/> };

    const {name,cuisines,avgRating} = resInfo?.cards[0]?.card?.card?.info;
   const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
   //console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards);
   //console.log(itemCards);

   // console.log(resInfo?.cards[0]?.card?.card?.info);



  return (
    <div>
      <h1>{name}</h1>
      <h2>
        <p>{cuisines.join(",")}</p>
      <p>{avgRating}</p>
      </h2>
      <h2>Menu</h2>
        <ul>{itemCards?.map((item)=>
             <li key={item.card.info.name}>
                {item.card.info.name}- {" "}
                {item.card.info.price/100 || item.card.info.defaultPrice/100}
            </li>
        )}
        </ul>
    </div>
  );
}

export default RestaurentMenu
