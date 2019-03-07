let schedules;
let teamMatches={};

//gets all scheduled premier league mathes.
let Tables= {
 load(teams){return fetch("https://api.football-data.org/v2/competitions/PL/matches?status=SCHEDULED", {
  headers: { 'X-Auth-Token': 'fe9f4a51bc81416095b2feca2a732fd6'},})
  .then(function (response) {
    return response.json();})
  .then(function (myJson) {
  //returns an object containing an array for each team
  //Each array contains the matchday info of the team
    schedules=myJson;
    teams.map((team)=>teamMatches[team]=[]);
    schedules.matches.map(match => {
    teamMatches[match.homeTeam.name].push(match);
    teamMatches[match.awayTeam.name].push(match)});
    return teamMatches;})
    //console.log(teamMatches["Liverpool FC"])
    // console.log(JSON.stringify(myJson));
  .catch(error => console.error('Error:', error));}}

  //The team names as provided by the api
const teams = ["Tottenham Hotspur FC", "Arsenal FC", "Wolverhampton Wanderers FC",
  "Cardiff City FC", "Manchester United FC", "Southampton FC",
  "Burnley FC", "Crystal Palace FC", "Brighton & Hove Albion FC",
  "Huddersfield Town AFC", "AFC Bournemouth", "Manchester City FC",
  "Newcastle United FC", "West Ham United FC", "Watford FC",
  "Leicester City FC", "Fulham FC", "Chelsea FC", "Everton FC",
  "Liverpool FC",]

  //Pairs the api team names with more commonly used names
const betterTeams = {"Tottenham Hotspur FC": "Tottenham", "Arsenal FC": "Arsenal", "Wolverhampton Wanderers FC": "Wolves",
"Cardiff City FC": "Cardiff", "Manchester United FC": "Manchester United", "Southampton FC": "Southampton",
"Burnley FC": "Burnley", "Crystal Palace FC": "Crystal Palace", "Brighton & Hove Albion FC": "Brighton",
"Huddersfield Town AFC": "Huddersfield", "AFC Bournemouth": "Bournemouth", "Manchester City FC": "Manchester City",
"Newcastle United FC": "Newcastle", "West Ham United FC": "Westham", "Watford FC": "Watford",
"Leicester City FC": "Leicester", "Fulham FC": "Fulham", "Chelsea FC": "Chelsea", "Everton FC": "Everton",
"Liverpool FC": "Liverpool"}

export {Tables, betterTeams, teams}
