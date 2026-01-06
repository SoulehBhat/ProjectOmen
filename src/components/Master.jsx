import { Link } from "react-router-dom"
import "../components/styles.css"

function Master() {
    return (
        <>
            <div className="head">
                <Link to="/">Main</Link>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <button>
                    <Link to="/contact">Contact</Link>
                </button>
                <br></br>
                <h1>This is the main page u know!!!!</h1>
            </div>
        </>
    )
}

export default Master