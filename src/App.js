import React, { Component } from 'react';
import logo from './football.png';
import './App.css';
import Rbuttons from "./components/rbuttons"
import Tables from "./apitables"
import Teamfixtures from "./components/teamfixtures"


const teams = [
  "Tottenham Hotspur FC", "Arsenal FC", "Wolverhampton Wanderers FC",
  "Cardiff City FC", "Manchester United FC", "Southampton FC",
  "Burnley FC", "Crystal Palace FC", "Brighton & Hove Albion FC",
  "Huddersfield Town AFC", "AFC Bournemouth", "Manchester City FC",
  "Newcastle United FC", "West Ham United FC", "Watford FC",
  "Leicester City FC", "Fulham FC", "Chelsea FC", "Everton FC",
  "Liverpool FC",
]
//let tables; 
//let tablesLoaded=false;
//Tables.load(teams).then((res)=>{tables=res; tablesLoaded=true})

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      team: "",
      teamData: {},
      fixturesLoaded: false
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      team: event.target.value
    });
  }
  
  componentDidMount() {
    Tables.load(teams)
      .then(
        (result) => {
          this.setState({
            fixturesLoaded: true,
            teamData: result
          });
        },
        (error) => {
          this.setState({
            fixturesLoaded: true,
            error
          });
        }
      )
  }


  render() {
    
    console.log("render")
    return (
      <div className="App">
        <center><h1>Select a team to view scheduled matches in Premier League</h1></center>
        <div><Rbuttons teams={teams} onChange={this.handleChange}/></div>
        <div>{this.state.fixturesLoaded ? 
        <Teamfixtures selection={this.state.team} teamData={this.state.teamData}/>            
                      :"Fetching..."}
        </div>        
      </div>
    );
  }
}
//this.state.teamData[this.state.team][0].id
export default App;
