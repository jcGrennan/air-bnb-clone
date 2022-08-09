import star from "../images/star.png"

export default function Card(props) {

    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {
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