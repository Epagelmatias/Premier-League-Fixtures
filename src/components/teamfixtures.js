/*When the team name in the App state updates (via images component)
the corresponding team's matchday cards will be rendered */
import React from "react"
import TeamCards from "./teamcards"
import "./cardlist.css"

class Teamfixtures extends React.Component {
    render(){
        return(
              <span className="cardlist">  {this.props.selection ? 
                this.props.teamData[this.props.selection].map((team, id)=>
                    <TeamCards team={team} key={team["id"]} selected={this.props.selection}/>)
                : <h2 style={{color: "white", textAlign: "center"}}>"Waiting for selection"</h2>}
            </span>
        )}}
    export default Teamfixtures;