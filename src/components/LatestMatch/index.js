// Write your code here

const LatestMatch = props => {
  const {matchDetails} = props
  console.log(matchDetails)
  const {competingTeam, competingTeamLogo} = matchDetails
  return (
    <li>
      <div>
        <h1>{competingTeam}</h1>
      </div>
      <img src={competingTeamLogo} alt={competingTeam} />
    </li>
  )
}
export default LatestMatch
