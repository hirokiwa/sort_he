import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";

interface home_type{
  setPoint:React.Dispatch<React.SetStateAction<number>>
}

const Home = (props:home_type):JSX.Element => {
  props.setPoint(0)
  return (
    <div className="Home">
      <Link to={`/game`}>start</Link>
    </div>
  );
}

export default Home;
