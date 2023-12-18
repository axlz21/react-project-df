import { Link } from "react-router-dom";
import "./teamlist.css"
export default function Button(){

    return(<Link to={'/registerTeam'} className="join-btn">Join league</Link>);
}