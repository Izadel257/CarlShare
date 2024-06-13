import React from "react";
import "./Send.css"

function Send(){
    return (
        <div id = "send">
            <div>
                <div id = "name">
                    <p id="send-to">Send $$ to</p>
                    <input type="text" id = "recipient"></input>
                </div>

                <div id = "money">
                    <p id="enter-amount">Enter Amount</p>
                    <input type="number" id = "sum-sent"></input>
                </div>
            </div>

            <button type="submit" id="okay">
                OK
            </button>
            <button type = "button" id = "cancel">
                Cancel
            </button>   
        </div>
    )
}
export default Send