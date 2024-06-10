import React from "react"
import "./Profile.css"
import {User} from "../../assets/data.js"
const Profile = () => {
    console.log("have been clicked")
    return (
        < div id = "profile">
            <div class = "personalInfo">
                <div id = "LastName">
                    <div id = "identifier">Last Name: </div>
                    <div id = "entered_value">{User.lastName}</div>
                </div>

                <div id = "firstName">
                    <div id = "identifier">First Name: </div>
                    <div id = "entered_value">{User.firstName}</div>
                </div>

                <div id = "email">
                    <div id = "identifier">Email: </div>
                    <div id = "entered_value">{User.email}</div>  
                </div>
            </div>

            <div class = "MoneyInfo">
                <div id = "diningDollars">
                    <div id = "identifier">Dining Dollars: </div>
                    <div id = "entered_value"> $ {User.diningDollars}</div> 
                </div>

                <div id = "shcillers">
                    <div id = "identifier">Schillers: </div>
                    <div id = "entered_value"> $ {User.schillars}</div> 
                </div>

                <div id = "meals">
                    <div id = "identifier">Meal Swipe Exchange: </div>
                    <div id = "entered_value">  {User.mealSwipeExchange ? "Yes" : "No"}</div>
                    
                </div>
            </div>
            
            {/* <div class = "term">
                <div id = "term">
                    <div id = "identifier">Term: </div>
                    <div id = "entered_value">{User.term}</div> 
                </div>
            </div> */}

        </div>
    )
}
export default Profile