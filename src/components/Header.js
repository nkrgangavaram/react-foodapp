import React, { useState } from "react";
import ReactDOM  from "react-dom/client";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header=()=>{

    const[btnname,setbtnname] = useState("login");
    const onlineStatus = useOnlineStatus();

    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>                    
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        Online Status : {onlineStatus?"Online":"Offline"}
                    </li>
                    <li>
                        <Link to="/">Home</Link></li>
                    <li>
                        <Link to="/about"> About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <button className="loginbtn" onClick={()=>{
                        btnname === "login"?setbtnname("logout"):setbtnname("login")
                    }
                    }>{btnname}</button>

                </ul>
            </div>
        </div>
    )
}

export default Header;