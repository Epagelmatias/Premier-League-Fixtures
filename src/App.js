import React, { Component } from 'react';
import './App.css';
import {Tables, teams} from "./utils"
import Teamfixtures from "./components/teamfixtures"
import Images from "./components/images";

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      team: "", //gets the value from the team badge clicked
      teamData: {}, //holds all the matchdays from all the teams after api data manipulation
      fixturesLoaded: false}
    this.handleChange = this.handleChange.bind(this);}

  handleChange(event) {
    this.setState({
      team: event.target.alt //updates the this.state.team when the team image is clicked
    });}
  
    // using the componentdidmount to call the api only once
  componentDidMount() {
    Tables.load(teams)
      .then((result) => {if (result["Liverpool FC"]){
          this.setState({
            fixturesLoaded: true,
            teamData: result})};},
          (error) => {
          this.setState({
            fixturesLoaded: false});})}

  render() { 
    console.log("render")
    return (
      <div className="App">
        <center><h1 style={{color: "white"}}>Select a team to view scheduled matches in Premier League</h1></center>
        <Images teams={teams} onClick={this.handleChange}/>
        <div>{this.state.fixturesLoaded ? 
        <Teamfixtures selection={this.state.team} teamData={this.state.teamData}/>            
                      :<center><h2 style={{color: "white"}}>Fetching...</h2></center>}
        </div>        
      </div>
    );}}

export default App;
