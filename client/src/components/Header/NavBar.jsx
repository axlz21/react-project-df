import { useContext, useRef } from "react"
import { Link } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"
import "./styles/nav.css"
import AuthContext from "../../context/authContext"

export default function Navbar() {
    const { isAuthtenticated, username } = useContext(AuthContext)
    const navRef = useRef();
    const showNav = () => {
        navRef.current.classList.toggle('responsiveNav');
    }

    return (
        <header>
            <img src="/images/logo_1.png"></img>
            <nav ref={navRef}>
                <Link to="/">Home</Link>
                <Link to="/aboutus">About us</Link>
                <Link to="/teams">Teams</Link>
                <Link to="/league">League</Link>


                {!isAuthtenticated && (
                    <>
                        <Link to="/register">Register</Link>
                        <Link to="/login">Login</Link>
                    </>
                )}

                {isAuthtenticated && (
                    <>
                        
                        <Link to="/logout">Logout</Link>
                        <span>| {username} </span>
                    </>

                )}

                <button className="nav-btn nav-close-button" onClick={showNav}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNav}>
                <FaBars />
            </button>
        </header>
    )
}