import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";

// const About =()=>{
//     return(
//         <div>
//             <h2>welcome to food order app</h2>
//             <User name= {"Nithin Reddy--functional"}/>
//             <UserClass name= {"Nithin Reddy--class"}/>
//         </div>
//     )
// };

import React, { Component } from 'react'

export class About extends Component {

    constructor(props){
        super(props)
      //  console.log("parent constructor");
    }

    componentDidMount()
    {
        //    console.log("paremt component didmount");
    }

  render() {
    //console.log("parent render");

    return (
      <div>
          <h2>welcome to food order app</h2>
          <div>
            LoggedIn User:
            <UserContext.Consumer>
              {({loggedInUser}) =>(
                <h1 className="text-lg font-bold">{loggedInUser}</h1>
              )}
            </UserContext.Consumer>
          </div>
            <UserClass name= {"first--class"}/>
            <UserClass name= {"second--class"}/>
           

      </div>
    )
  }
}

export default About;

