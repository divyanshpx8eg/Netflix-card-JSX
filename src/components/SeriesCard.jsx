import styles from "./Netflix.module.css"
import styled from "styled-components"
const ButtonTh = styled.button`
    padding: 1.2rem 2.4rem;
    border: none;
    font-size: 1.6rem;
    background-color: ${({ rating }) => (rating >= 8.5 ? "#7dcea0" : "#f7dc6f")};
    color: var(--btn-color);
    font-weight: bold;
    cursor: pointer;
`;

const Rating = styled.h3`
    font-size: 1.6rem;
    color: #7dcea0;
    text-transform: capitalize;
`;
export const SeriesCard = ({data}) => {
   const {id , img_url , name , rating , description , cast , genre , watch_url} = data;

   
   const ratingClass = rating>=8.5 ? styles.super_hit:styles.average;
    return(
        <li key = {id} className={styles.card}>
            <div>
            <img src={img_url} alt="props.currElem.img_url" width="40%" height = "40%" />
            </div>
            <div className="flex flex-col gap-6 px-[1.2rem] py-[3.2rem]">
            <h2>Name : {name}</h2 >
            <Rating>Rating : <span className= {`${styles.rating} ${ratingClass}`}> {rating}</span></Rating>
            <p className="text-3xl font-bold underline">Summary :{description}</p>
            <p>Genre : {genre}</p>
            <p>Cast : {cast}</p>
            <a href={watch_url} target = "_blank">
                <ButtonTh>Watch Now</ButtonTh>
            </a>
            </div>
        </li>
    );
}