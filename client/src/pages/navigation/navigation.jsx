import Profile_placeholder from "./user_placeholdeer.jpeg"
import Profile from "../userProfile/profile"
function Navigation (){
    return (
        <div>
            <div id = "logo">
                app logo
            </div>
            
            <div id = "user" onClick={Profile}>
                <img src= {Profile_placeholder} alt = "This is the user profile"></img>   
            </div>
        </div>
    )
}

export default Navigation