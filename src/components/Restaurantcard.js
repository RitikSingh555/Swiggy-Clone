import { CDN_URL } from "../utils/constant";

const Restaurantcard=(props)=>{
    const {resData}=props;
  
    const {
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      costForTwo,
      deliveryTime,
    }=resData?.info;
    return(
      <div className="res-card" style={{backgroundColor:"#f0f0f0f0"}}>
      <img className="res-logo"
      alt="res-logo" src={CDN_URL+resData.info.cloudinaryImageId}  />
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>{resData.info.avgRating}</h4> 
      <h4>{resData.info.costForTwo}</h4>
      <h4>{resData.info.sla.deliveryTime}</h4>
  
      </div>
  
    );
  };

  export default Restaurantcard;