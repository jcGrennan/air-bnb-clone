// importing the star img for the rating

import star from "../images/star.png"

// exporting the reusable Card component, made reusable using props.

export default function Card(props) {

    /* setting up an if/else statement for the card badges 
    to determine whether or not the experience is sold out or online. */
    
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    // composing the reusable card

    return (
        <div className="card">
            
            {
                // using conditional rendering to display a badge if badgeText is truthy.
                badgeText && 
                <div className="card--badge">{badgeText}</div>
            }

            <img className="card--photo" src={props.coverImg} alt={props.alt}/>

            <div className="card--rating">
                <img src={star} alt="star"/>
                <p>{props.stats.rating} <span>({props.stats.reviewCount}) · {props.location}</span></p>
            </div>

            <p>{props.title}</p>
            <p><b>from €{props.price}</b> / per person</p>
            
        </div>
    )
}