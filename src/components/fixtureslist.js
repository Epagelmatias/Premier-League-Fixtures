import React from "react"

class FixturesList extends React.Component {
    render(){
        return(
            <p>
                <span>
                    {this.props.team.homeTeam.name===this.props.selected ? <b>{this.props.team.homeTeam.name}</b> : this.props.team.homeTeam.name} vs {this.props.team.awayTeam.name===this.props.selected ? <b>{this.props.team.awayTeam.name}</b> : this.props.team.awayTeam.name} 
                    <b>{" || "}</b>UTC UK date: {this.props.team.utcDate} 
                    {" || "}Matchday: {this.props.team.matchday}
                </span>
            </p>
        )
    }}

export default FixturesList;