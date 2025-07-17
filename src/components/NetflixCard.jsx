
import seriesData from "../api/seriesData.json"
import { SeriesCard } from "./SeriesCard";

//this is a component as we start it with capital letter 
// NetflixCard -> "N" capital
const NetflixCard = ()=>{
    
    return(
      <ul className ="grid grid-three--cols">
        {seriesData.map((currElem) => {
          return(
            <SeriesCard key = {currElem.id} data = {currElem}/>
          );
        })}
      </ul>
    );
}
// const Footer = ()=>{
//     return  <p>CopyRight - Thapa Bhai</p>
// }

//Default Export
    export default NetflixCard;

  
//Named Export
  //export {NetflixCard , Footer};