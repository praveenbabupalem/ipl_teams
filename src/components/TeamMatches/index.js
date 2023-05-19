// Write your code here
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {matchesData: []}

  componentDidMount() {
    this.getTeamMatchDetails()
  }

  getTeamMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    const {latestMatchDetails, recentMatches} = updatedData

    const latestMatchDetailsCamel = {
      id: latestMatchDetails.id,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      umpires: latestMatchDetails.venue,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      matchStatus: latestMatchDetails.match_status,
    }

    const recentMatchesCamel = recentMatches.map(each => ({
      umpires: each.umpires,
      result: each.result,
      manOfTheMatch: each.man_of_the_match,
      id: each.id,
      date: each.date,
      venue: each.venue,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      firstInnings: each.first_innings,
      secondInnings: each.second_innings,
      matchStatus: each.match_status,
    }))
    const {teamBannerUrl} = updatedData
    const updatedDataCamel = {
      teamBannerUrl,
      latestMatchDetailsCamel,
      recentMatchesCamel,
    }

    this.setState({matchesData: updatedDataCamel})
  }

  render() {
    const backgroundColors = [
      '#1e293b',
      '#5755a7',
      '#d91c1f',
      '#a4261d',
      '#f7db00',
      '#da237b',
      '#13418b',
      '#f26d22',
    ]

    const randomColor =
      backgroundColors[Math.floor(Math.random() * backgroundColors.length)]
    const myStyle = {
      backgroundColor: randomColor,
      color: '#ffffff',
      fontWeight: 'bold',
    }

    const {matchesData} = this.state
    const {
      teamBannerUrl,
      latestMatchDetailsCamel,
      recentMatchesCamel,
    } = matchesData

    console.log(latestMatchDetailsCamel)

    return (
      <div className="" style={myStyle}>
        <img src={teamBannerUrl} alt="" />
        <h1>Latest Matches</h1>
        <LatestMatch matchDetails={latestMatchDetailsCamel} />
      </div>
    )
  }
}
export default TeamMatches
