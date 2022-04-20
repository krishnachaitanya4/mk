import React from "react";
import '../App.css';
export default function Card(props){
    var image="rajasthan.jpg"
    return(
        <div className="card-class">
                <img src={require(`../images/${props.image}`)}/>
                <div className="description-class">
                    <div className="place-dis">
                        <img src={require(`../images/location.png`)} className="location-class"/>
                        <span><strong>{props.place}</strong>, {props.place_des}</span>
                    </div>
                    <h1>{props.area}</h1>
                    <p>{props.description}</p>
                 </div>
        </div>
    )
}