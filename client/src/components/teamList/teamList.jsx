import RegisterTeam from "../register/RegisterTeam";
import Button from "./Button";
import TeamCard from "./TeamCard";
import "./teamlist.css"
import "../register/register.css"
export default function TeamList() {
    return (
        <div>
            
            <h2 className="title">Teams: <Button /> </h2>
            <div>
                <TeamCard />
                <TeamCard />
                <TeamCard />
                <TeamCard />
                <TeamCard />
                <RegisterTeam />
            </div>
        </div>

    )
}