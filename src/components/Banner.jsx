import React from "react";
import '../App.css';
const Banner = ({backgroundImage, title, subtitle}) => {
    return <>
    <div className="banner" style={{ backgroundImage: `url(${backgroundImage})`}}>
      <div className="banner-overlay">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </div>
    </>;
}
 
export default Banner;