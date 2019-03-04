import React from "react"
import FixturesList from "./fixtureslist"
class Teamfixtures extends React.Component {
    render(){
        return(
            
              <div>  {this.props.selection ? 
                this.props.teamData[this.props.selection].map((team, id)=>
                <FixturesList team={team} key={team["id"]} selected={this.props.selection}/>)             
                : "Waiting for selection"}
            </div>
        )
    }}
    export default Teamfixtures;