import grid from "../images/airbnb-grid.png"

export default function Hero() {
    return (
        <section className="hero">
            <img className="hero--grid" src={grid} alt="people performing skills or hobbies"/>
            <h1 className="hero--title">Online Experiences</h1>
            <p className="hero--desc">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}