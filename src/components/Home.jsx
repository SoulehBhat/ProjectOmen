import { Link } from "react-router-dom"
function Home() {


  return (
   <div className="head">
                <Link to="/">Main</Link>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <br></br>
                <h1>This is the HomePage!</h1>
            </div>
  )
}

export default Home