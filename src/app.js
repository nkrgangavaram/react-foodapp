import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contactus from "./components/Contactus";
import Error from "./components/Error";
import FetchComponent from "../fetchcomponent";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import RestaurentMenu from "./components/RestaurentMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import './style.css'; // Import your styles
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

//import Grocery from "./components/Grocery";

//lazy loading...
const Grocery = lazy(()=>import("./components/Grocery"));

const AppLayout =()=>{

  const [loginName,setLoginName] = useState();

  useEffect(()=>{
    const data = {
      name: "Nithin Reddy",
    }
    setLoginName(data.name);
  },[])

    return(
      <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser:loginName , setLoginName}}>
         <div>
         <UserContext.Provider value={{loggedInUser:"nkr"}}>

                <Header/>
                </UserContext.Provider>

                <Outlet/>
        </div>
      </UserContext.Provider>
      </Provider>
    );     
};

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
        element:
       <Contactus/>
    
      },
      {
        path:"/cart",
        element:
       <Cart/>
    
      },
      {
        //laz loading.... for bundle seperation.....
        path:"/grocery",
        element: (
          <Suspense fallback={<h1>loading......</h1>}></Suspense>
        )
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
