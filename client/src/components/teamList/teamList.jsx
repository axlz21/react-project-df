import { useEffect, useState } from "react";
import * as teamService from "../../services/teamService"
import RegisterTeam from "../register/RegisterTeam";
import Button from "./Button";
import TeamCard from "./TeamCard";
import "./teamlist.css"
import "../register/register.css"
export default function TeamList() {
    const [teams, setTeams] = useState([])
    useEffect(()=>{
        teamService.getAll()
        .then(result => setTeams(result))
    },[])

    console.log(teams)
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