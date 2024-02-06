import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export function OpenRoute ({children}){
    const {token} = useSelector((state) => state.auth);

    if(token == null) {
        return children
    } else {
        <Navigate to={"/dashboard/my-profile"}/>
    }
}