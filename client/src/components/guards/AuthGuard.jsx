import { useContext } from "react"
import AuthContext from "../../context/authContext"
import { Navigate, Outlet, useNavigate } from "react-router-dom"

export default function AuthGuard(){
    const { isAuthenticated } = useContext(AuthContext)
    const navigate = useNavigate();
    
    if(!isAuthenticated){
        return <Navigate to="/login" />
    }
    return (
        <Outlet />
    )
}