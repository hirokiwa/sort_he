import React from 'react';
import './Result.css';
import { Link } from "react-router-dom";

interface result_type{
    point:number
}

const Result = (props:result_type):JSX.Element => {
  return (
    <div className="Result">
        <div>score {props.point}</div>
      <Link to={`/`}>ホームへもどる</Link>
    </div>
  );
}

export default Result;
