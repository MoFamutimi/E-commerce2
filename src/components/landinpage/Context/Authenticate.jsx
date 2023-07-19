import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"
import { Outlet, Navigate, useLocation } from "react-router-dom"

const Authenticate = () => {
    const location = useLocation();
    const { User } = useContext(ThemeContext);
    console.log("Authenticate", User);
    return (
        <>
            {
                User ? <Outlet />
                     :<Navigate to="/login" state={{ from: location }} replace />
                    
            }
        </>

    )
}

export default Authenticate;