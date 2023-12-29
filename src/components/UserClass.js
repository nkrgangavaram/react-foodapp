import React from 'react'

export class UserClass extends React.Component {

    constructor(props){
        super(props);
       // console.log(this.props.name+"child constructor");

        this.state = {
            count:0,
            userInfo:{
            login :0,
            avatar_url:"",
            }
        }
    }

    async componentDidMount(){
    //api calls...
   // console.log(this.props.name+"child componentdidmount");
    console.log("componentdidmount");

   const data = await fetch("https://api.github.com/users/nkrgangavaram");
   const json = await data.json();
   //console.log(json);
   this.setState({
    userInfo: json,
   })
    }

    componentDidUpdate()
    {
        console.log("component Didupdate");
    }

    componentWillUnmount(){
        console.log("component willunmoubt");
    }

  render() {
    const {namefromparent} = this.props;
    const {count,userInfo} = this.state;
    const {login,avatar_url} = this.state.userInfo;


   // console.log(this.props.name+"child render");


    return (
        <div className='user-card'>
            <h1>Count : {count}</h1>
            <button onClick={()=>{
                this.setState(
                    {
                        count : this.state.count + 1,
                    }
                )
                
            }}>increment count</button>
            <img src={avatar_url}></img>
        <h2>Name: {login}</h2>
        <h3>Location : hyderabad</h3>
        <h3>Contact : reddynithin33@gmail.com</h3>
      
    </div>
    )
  }
}

export default UserClass
