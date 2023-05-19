import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {eachTeam} = props
  const {id, name, teamImageUrl} = eachTeam
  return (
    <Link to={`/matches/${id}`}>
      <li className="team-card">
        <img src={teamImageUrl} alt={name} className="team-logo" />
        <p>{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
