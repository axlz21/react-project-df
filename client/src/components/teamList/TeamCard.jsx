import { Link } from "react-router-dom"
import "./teamlist.css"

export default function TeamCard({
    _id,
    teamName,
    imageUrl,
    city,
    phone,
    description,
}) {
    return (
        <>
            <div className="card">
                <img className="card-image" alt="logo" src={imageUrl}></img>
                <h2 className="card-title">{teamName}</h2>
                <p className="card-description">{description}</p>
                <Link to={`/teams/${_id}`} className="details-btn">More info</Link>
            </div>
        </>
    )
}