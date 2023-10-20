import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { context_siatos } from "../Providers/Context";


const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(context_siatos)
    const location =useLocation()
    console.log(location)
    if(loading){
        return <span className="loading loading-infinity loading-lg"></span>

    }
    if (user){
        return children
    }
    return <Navigate state={location.pathname} to ='/login'></Navigate>
};

export default PrivateRoutes;