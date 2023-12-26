import React from "react";
import  ReactDOM  from "react-dom";
import { useState } from "react";

const FetchComponent =()=>{
    const [post,setpost] = useState([]);


    const url = "https://jsonplaceholder.typicode.com/posts"

    const data = async ()=>{
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const response  = await res.json();
        setpost(response);
        console.log(response);

    }
    return(
        <div className="app">
           
            <button onClick={data}> Select</button>
            <div>
            {post && post.map((res)=>{

            return (<ul>
                <li>
                {res.title};
                </li>
            </ul>)
            
            })
        }
            </div>
        </div>
    )
}

export default FetchComponent;