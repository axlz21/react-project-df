import { useRef } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import "./styles/nav.css"

export default function Navbar(){

    const navRef = useRef();
    const showNav = () => {
        navRef.current.classList.toggle('responsiveNav');
    }
    return (
        <header>
        <img src="/images/logo_1.png"></img>
        <nav ref={navRef}>
            <a href="/#">Home</a>
            <a href="/#">About us</a>
            <a href="/#">Teams</a>
            <a href="/#">League</a>
            <a href="/#">Register</a>
            <a href="/#">Login</a>
            <a href="/#">Logout</a>
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