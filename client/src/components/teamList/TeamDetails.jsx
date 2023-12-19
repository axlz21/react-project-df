import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
import * as teamService from "../../services/teamService"
import "./teamlist.css"
export default function TeamDetails() {
    const navigate = useNavigate()
    const deleteButtonHandler = async () => {
        const hasConfirmed = confirm(`Are you sure you want to delete this team?`)

        if(hasConfirmed){
           await teamService.remove(teamId)
           navigate('/teams')
        }
    }
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
                <div className="button">
                    <Link to="/:teamId/edit" className="join-btn">Edit</Link>
                    <button onClick={deleteButtonHandler} className="join-btn">Delete</button>
                </div>
            </div>
        </>
    )
}