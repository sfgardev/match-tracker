import { MatchModel } from '../../entities/match/model'
import { Score } from './score'
import { Team } from './team'

type Props = {
  match: MatchModel
}

export const MatchCard = ({ match }: Props) => {
  const { homeTeam, awayTeam, homeScore, awayScore, status } = match

  return (
    <div className="bg-[#0B0E12] font-inter text-base font-semibold text-white p-4 rounded-sm flex justify-between">
      <Team teamName={homeTeam.name} />
      <Score homeScore={homeScore} awayScore={awayScore} status={status} />
      <Team teamName={awayTeam.name} rowReverse />
    </div>
  )
}
