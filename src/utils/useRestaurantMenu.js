import React, { useEffect,useState } from 'react';
import { MENU_URL, MENU_URL_END } from '../utils/constants';


function useRestaurantMenu(resid) {

    const [resInfo,setresInfo] = useState(null);


    useEffect(()=>{
        fetchData();
        },[]);

        const fetchData = async()=>{

            const data = await fetch(MENU_URL+resid+MENU_URL_END);
            const jsondata = await data.json();   
            setresInfo(jsondata.data);       
        }

  return resInfo;
  
}

export default useRestaurantMenu
