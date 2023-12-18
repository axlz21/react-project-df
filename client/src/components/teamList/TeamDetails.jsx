import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import * as teamService from "../../services/teamService"
import "./teamlist.css"
export default function TeamDetails() {
    const { teamId } = useParams();
    const [team, setTeam] = useState({})
    useEffect(() => {
      teamService.getOne(teamId)
      .then(setTeam)
    }, [teamId])
    return(
        <>
            <div className="card">
                <img className="card-image" alt="logo" src={team.imageUrl}></img>
                <h2 className="card-title">{team.teamName}</h2>
                <h3 className="card-title">City:{team.city}</h3>
                <h4 className="card-title">Phone number:{team.phone}</h4>
                <p className="card-description">{team.description}</p>
            </div>
        </>
    )
}