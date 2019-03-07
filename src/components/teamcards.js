//The premier league cards with matchday info
import React from "react"
import {betterTeams} from "../utils"
import "./teamcards.css"

class TeamCards extends React.Component {
    render(){
        return(
            <div className="card">
            <img style={{width: "100%"}} src={process.env.PUBLIC_URL + `/images/premierleague.jpg`} alt="premierleague"/>
            <p className="title">{this.props.team.utcDate.slice(0,10)}</p>
            <h2 className="teams">{betterTeams[this.props.team.homeTeam.name]}<br/>vs<br/>{betterTeams[this.props.team.awayTeam.name]}</h2>
            <p className="time">UK time: {this.props.team.utcDate.slice(11,16)}</p>
            <p><button>Matchday {this.props.team.matchday}</button></p>
          </div>
        )}}
export default TeamCards;