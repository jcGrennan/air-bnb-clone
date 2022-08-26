// importing airBnb logo
import logo from "../images/airbnb-logo.png"

// composing and exporting the Navbar. Very small but composed separately for practice
export default function Navbar() {
    return (

        <nav>

            <img src={logo} alt="logo"/>
            
        </nav>
    )
}