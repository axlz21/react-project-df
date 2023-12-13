import Button from "./Button";
import TeamCard from "./TeamCard";
import "./teamlist.css"
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
                
            </div>
        </div>

    )
}