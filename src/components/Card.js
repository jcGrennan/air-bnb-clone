import weightlifting from "../images/alana-grose-weightlifting.jpg"
import star from "../images/star.png"

export default function Card() {
    return (
        <section className="card">
            <img className="card--photo" src={weightlifting} alt="althetic woman with barbell"/>
            <div className="card--rating">
                <img src={star} alt="star"/>
                <p>5.0 <span>(32) · Ireland</span></p>
            </div>
            <p>Weightlifting with Alana Grose</p>
            <p><b>from €50</b> / per person</p>
        </section>
    )
}