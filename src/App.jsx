import NetflixCard from "./components/NetflixCard";
import './components/Netflix.css'
import "./components/Netflix.module.css";
export const App = () =>{
  return (
  <section className="container">
    <h1 className="card-heading">List of Best Netflix series</h1>
    <NetflixCard/>
    {/* <NetflixCard/>
    <NetflixCard/>
    <NetflixCard/>
    <NetflixCard/> */}
  
  </section>
  );
};

