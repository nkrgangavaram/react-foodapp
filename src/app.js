import React, { useState } from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contactus from "./components/Contactus";
import Error from "./components/Error";
import FetchComponent from "../fetchcomponent";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import RestaurentMenu from "./components/RestaurentMenu";


const restobj = {
    "type" : "restauarent",
    "info": {
        "id": "25251",
        "name": "Meridian Restaurant",
        "cloudinaryImageId": "cxvuxxwpkicbqo3nkqiy",
        "locality": "Panjagutta",
        "areaName": "Panjagutta",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Biryani",
          "Chinese",
          "North Indian",
          "Kebabs"
        ],
        "avgRating": 4.3,
        "parentId": "19276",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 19,
          "lastMileTravel": 4.2,
          "serviceability": "SERVICEABLE",
          "slaString": "19 mins",
          "lastMileTravelString": "4.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-12-26 23:50:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/meridian-restaurant-panjagutta-hyderabad-25251",
        "type": "WEBLINK"
      }
    }



const AppLayout =()=>{
    return(
        <div>
                <Header/>
                <Outlet/>
        </div>
);
}

const AppRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout/>,
    children:[ //child routing....
      {
        path:"/",
        element:<Body/>
    
      },
      {
        path:"/about",
        element:<About/>
    
      },
      {
        path:"/contact",
        element:<Contactus/>
    
      },
      {
        path:"/restaurants/:resid",
        element:<RestaurentMenu/>
    
      }
    ],
    errorElement:<Error/>
  },

  //individual routing
  {
    path:"/about",
    element:<About/>

  },
  {
    path:"/contact",
    element:<Contactus/>

  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter}/>);
