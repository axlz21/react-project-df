export default function RegisterTeam(){
    return(
        <div className="center-container">
        <div className="cover">
            <h1>Register team</h1>
            <input type="text" placeholder="Team name"></input>
            <input type="text" placeholder="Country"></input>
            <input type="text" placeholder="City"></input>
            <input type="text" placeholder="Phone number"></input>
            <input type="text" placeholder="Logo URL"></input>
            <input type="text-area" placeholder="Team description"></input>
            <div className="join-btn">Join</div>

        </div>
        </div>
    )
}