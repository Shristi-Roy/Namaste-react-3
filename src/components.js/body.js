import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";

const Body = () => {
    return (
    <div className='body'>
        <div className='search'>Search</div>
        <div className='res-container'>
        <RestaurantCard resData = {resObj.restaurants} />
        </div>
    </div>
    );
};

export default Body;