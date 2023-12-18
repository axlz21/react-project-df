import "./teamlist.css"

export default function TeamCard({
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
                <button>More info...</button>
            </div>
        </>
    )
}