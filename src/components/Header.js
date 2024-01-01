import React, { useContext, useState } from "react";
import ReactDOM  from "react-dom/client";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header=()=>{

    const[btnname,setbtnname] = useState("login");
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);

    return(
        <div className="flex justify-between bg-pink-100 shadow-lg">
            <div className="logo-container">
                <img className="w-56" src={LOGO_URL}/>                    
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-2">
                    <li className="px-4">
                        Online Status : {onlineStatus?"Online":"Offline"}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link></li>
                    <li className="px-4">
                        <Link to="/about"> About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4">Cart</li>
                    <button className="loginbtn" onClick={()=>{
                        btnname === "login"?setbtnname("logout"):setbtnname("login")
                    }
                    }>{btnname}</button>
                     <li className="px-4">{loggedInUser}</li>


                </ul>
            </div>
        </div>
    )
}

export default Header;