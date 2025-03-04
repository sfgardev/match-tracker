import { Score } from './score'
import { Team } from './team'

export const MatchCard = () => {
  return (
    <div className="bg-[#0B0E12] font-inter text-base font-semibold text-white p-4 rounded-sm flex justify-between">
      <Team />
      <Score />
      <Team rowReverse />
    </div>
  )
}
