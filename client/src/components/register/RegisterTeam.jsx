export default function RegisterTeam() {
    const registerTeamHandler = (e) => {
        e.preventDefault()
        const teamData = Object.fromEntries(new FormData(e.currentTarget));
        
    }

    return (
        <div className="center-container">
            <form id="registerTeam" onSubmit={registerTeamHandler}>
                <div className="cover">
                    <h1>Register team</h1>
                    <input type="text" name="teamName" placeholder="Team name"></input>
                    <input type="text" name="city" placeholder="City"></input>
                    <input type="text" name="phone" placeholder="Phone number"></input>
                    <input type="text" name="logo" placeholder="Logo URL"></input>
                    <input type="text-area" name="description" placeholder="Team description"></input>
                    <input className="join-btn" type="submit" value="Join"></input>
                </div>
            </form>
        </div>
    )
}