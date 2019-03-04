let schedules;
let teamMatches={};
const teams = [
    "Tottenham Hotspur FC", "Arsenal FC", "Wolverhampton Wanderers FC",
    "Cardiff City FC", "Manchester United FC", "Southampton FC",
    "Burnley FC", "Crystal Palace FC", "Brighton & Hove Albion FC",
    "Huddersfield Town AFC", "AFC Bournemouth", "Manchester City FC",
    "Newcastle United FC", "West Ham United FC", "Watford FC",
    "Leicester City FC", "Fulham FC", "Chelsea FC", "Everton FC",
    "Liverpool FC",
  ]
//gets all scheduled premier league mathes.
let Tables= {
 load(teams){return fetch("https://api.football-data.org/v2/competitions/PL/matches?status=SCHEDULED", {
  headers: { 'X-Auth-Token': 'fe9f4a51bc81416095b2feca2a732fd6'},})
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
    schedules=myJson;
    teams.map((team)=>teamMatches[team]=[]);
    schedules.matches.map(match => {
    teamMatches[match.homeTeam.name].push(match);
    teamMatches[match.awayTeam.name].push(match)});
    return teamMatches;
    //console.log(teamMatches["Liverpool FC"])
    // console.log(JSON.stringify(myJson));
  })
  .catch(error => console.error('Error:', error));
 }}
//let X = Tables.load(teams);

  export default Tables;
