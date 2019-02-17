import React from 'react';

import "./DataBlock.scss";
import imageBack from "../../../assets/img/noimage.jpg";

const API_URL = "https://bogusz-blog.herokuapp.com/";

const dataBlock = (props) => {
    const style ={
        backgroundColor: props.bckColor,
    }
    let image = {};
    if(props.srcPicture)
    {
        image = API_URL + props.srcPicture;
    }
    else
    {
        image = imageBack;
    }
    return (  
        <div className="DataBlock">
            <h1 className="HeaderData">{props.title}</h1>
            <img className="ImageData" src={image} alt={props.title} style={style}/>
            <p className="DescData">{props.desc}</p> 
            <button className="button">Zobacz więcej</button>
        </div>
    );
}
 
export default dataBlock;