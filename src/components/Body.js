import Restaurantcard from "./Restaurantcard";
import{useEffect, useState}from "react";
import React from "react";
  import Shimmer from "./Shimmer";
//import resList from "../utils/mockData";

const Body=()=>{
  const[listofRestaurants,setListofRestaurants]=useState([]);
  const [SearchText,setSearchText]=useState([])
  const[ filteredRestaurant,setFilteredRestaurant]=useState([]);
  console.log("Body render");
  
//const arr =useState(resList);
//const[listofRestaurants,setlistofRestaurant]=arr;
//const listofRestaurants=arr[0];
//const setlistofRestaurant=[1];
useEffect(()=>{
  fetchData();
}, []);
const fetchData= async()=>{
  const data= await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json=await data.json();
    console.log(json);
    //optinal chaining
     setListofRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.id?.restaurants);
     setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.id?.restaurants)
  };

    return listofRestaurants.length===0? (
    <Shimmer/> 
    ) : (
      <div  className="body">
       <div className="filter">
       <div className="Search">
       <input type="text"className="Search-box"
        value={SearchText} 
        onChange={(e)=>{
           setSearchText(e.target.value);
        }}
       />
       <button 
        onClick={()=>{
         const filteredRestaurant=listofRestaurants.filter(
          (res)=>res.info.name.toLowerCase().include(SearchText.toLowerCase())
         );
         setFilteredRestaurant(filteredRestaurant);
       }}
       
        
      >Search
         </button>
         </div>
         <button className="filter-btn"
          onClick={() =>{
        const filteredlist=listofRestaurants.filter(
            (res)=>res.info.avgRating>4.2
          );
           setListofRestaurants(filteredlist);
         }}
         
    
        >
           Top Rated Restaurants
         </button>
       </div>
       <div className="res-container">
         {filteredRestaurant.map((restaurant) =>(
             <Restaurantcard key={restaurant.info.id} resData={restaurant} />
         ))}
         </div>
     </div>
    );
    };
  
export default Body;