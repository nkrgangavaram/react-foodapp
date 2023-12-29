import React, { useEffect, useState } from 'react'

function User({name}) {

    const[counter] = useState(0);
    useEffect(()=>{
        //api calls..
    },[])
  return (
    <div className='user-card'>
        <h1>count : {counter}</h1>
        <h2>Name: {name}</h2>
        <h3>Location : hyderabad</h3>
        <h3>Contact : reddynithin33@gmail.com</h3>
      
    </div>
  )
}

export default User
