import { useState } from 'react'
import { MatchModel } from '../../entities/match/model'
import { Score } from './score'
import { Team } from './team'
import { ChevronDown } from '../../shared/ui/icons'
import { cn } from '../../shared/lib'
import { Details } from './details'
import { Divider } from '../../shared/ui/divider'

type Props = {
  match: MatchModel
}

export const MatchCard = ({ match }: Props) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)

  const { homeTeam, awayTeam, homeScore, awayScore, status } = match

  return (
    <div
      className={cn(
        'bg-[#0B0E12] font-inter text-base font-semibold text-white p-4 rounded-sm max-sm:text-sm max-sm:p-2'
      )}
    >
      <div
        onClick={() => setIsDetailsOpen((open) => !open)}
        className="flex justify-between items-center gap-2 max-sm:block"
      >
        <div className="flex justify-between flex-1 max-sm:mb-2 max-sm:gap-1">
          <Team teamName={homeTeam.name} />
          <Score homeScore={homeScore} awayScore={awayScore} status={status} />
          <Team teamName={awayTeam.name} rowReverse />
        </div>
        <ChevronDown
          className={cn(
            'transition-transform cursor-pointer max-sm:mx-auto',
            isDetailsOpen && 'rotate-180'
          )}
        />
      </div>

      <div
        className={cn('grid grid-rows-[0fr] transition-all', {
          'grid-rows-[1fr]': isDetailsOpen,
        })}
      >
        <div className="grid grid-cols-2 gap-8 overflow-hidden max-xl:grid-cols-1 max-xl:gap-2">
          <Details {...homeTeam} />
          <Divider className="hidden max-xl:flex" />
          <Details className="max-xl:p-0" {...awayTeam} />
        </div>
      </div>
    </div>
  )
}
