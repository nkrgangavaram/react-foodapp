import React, { useState } from "react";
import ReactDOM  from "react-dom/client";
import { LOGO_URL } from "../utils/constants";

const Header=()=>{

    const[btnname,setbtnname] = useState("login");
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>                    
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
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