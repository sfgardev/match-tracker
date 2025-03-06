import { useState } from 'react'
import { MatchModel } from '../../entities/match/model'
import { Score } from './score'
import { Team } from './team'
import { ChevronDown } from '../../shared/ui/icons'
import { cn } from '../../shared/lib'
import { Details } from './details'

type Props = {
  match: MatchModel
}

export const MatchCard = ({ match }: Props) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)

  const { homeTeam, awayTeam, homeScore, awayScore, status } = match

  return (
    <div className="bg-[#0B0E12] font-inter text-base font-semibold text-white p-4 rounded-sm flex flex-col gap-8">
      <div
        onClick={() => setIsDetailsOpen((open) => !open)}
        className=" flex justify-between"
      >
        <Team teamName={homeTeam.name} />
        <Score homeScore={homeScore} awayScore={awayScore} status={status} />
        <div className="flex items-center gap-3">
          <Team teamName={awayTeam.name} rowReverse />
          <ChevronDown
            className={cn(
              'transition-transform cursor-pointer',
              isDetailsOpen && 'rotate-180'
            )}
          />
        </div>
      </div>

      <div
        className={cn('grid grid-rows-[0fr] transition-all', {
          'grid-rows-[1fr]': isDetailsOpen,
        })}
      >
        <div className="grid grid-cols-2 gap-8 overflow-hidden">
          <Details {...homeTeam} />
          <Details {...awayTeam} />
        </div>
      </div>
    </div>
  )
}
