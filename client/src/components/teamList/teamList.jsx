import TeamCard from "./TeamCard";
import "./teamlist.css"
export default function TeamList(){
    return (
        <div>
            <h2 className="title">Teams:</h2>
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
        </div>
        
    )
}