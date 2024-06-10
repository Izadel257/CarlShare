import React from "react"
import Profile_placeholder from "./user_placeholdeer.jpeg"
import appLogo from "./appLogo.jpeg"
import { Navigate, Link} from 'react-router-dom';
import "./Navigation.css"

function Navigation (){
    const goToProfile = () => {
        // Navigate to the '/profile'
        <Navigate to="/profile" />;
    };
    return (
        <div id = "navigation">
            <div id = "logo">
                <button type="Submit">
                    <Link to = "/">
                    <img src= {appLogo} alt = "This is the app logo."></img>  
                    </Link>
                </button> 
            </div>
            <div id = "carlshare">
                <Link to = "/">
                    CarlShare
                </Link>
            </div>
            <div id = "user">
                <button type="Submit">
                    <Link to = "/profile">
                    <img src= {Profile_placeholder} alt = "This is the user profile"></img>  
                    </Link>
                </button> 
            </div>
        </div>
    )
}

export default Navigation