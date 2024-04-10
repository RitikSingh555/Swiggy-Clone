//import { LOGO_URL } from "../utils/constant";
import { COMP_LOGO, LOGO_URL } from "../utils/constant";
import { useEffect, useState } from "react";


  const Header=()=>{
    let btnName="login";
    const[btnnNameReact,setbtnnNameReact]=useState("login");
    console.log("Header render");
    //If no  dependency array=>useEffect is called on every render 
    //If  dependency array is empty=[]=>useEffect is called initial render  
    useEffect(()=>{
   console.log("useEffect Called")
    },[]);

    return (
      <div className="header">
  
          <div className="logo-container">
            <img className="logo" src={LOGO_URL}/>
          </div>

          <div className="name">
            <img className="company-name" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSw35osNAUS2QpiK_ixey133RQIA51w25o7A&usqp=CAU" />
          </div>
  
          <div className="nav-items">
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Conact</li>
              <li>cart</li>
              <button className="login" onClick={()=>{
              btnnNameReact =="login"?
              setbtnnNameReact("Logout")
             :setbtnnNameReact("login");
              }}>
              {btnnNameReact}
              </button> 
            </ul>
          </div>
      </div>
   );
  };

  export default Header;