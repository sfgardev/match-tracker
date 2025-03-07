import { Player, Team } from '../../entities/match/model'
import { cn } from '../../shared/lib'
import { PlayerInfo } from './player-info'
import { Statistic } from './statistic'

type Props = {
  players: Player[]
  place: Team['place']
  points: Team['points']
  total_kills: Team['total_kills']
  className?: string
}

export const Details = ({
  players,
  place,
  points,
  total_kills,
  className,
}: Props) => {
  return (
    <div className={cn('pt-8', className)}>
      <div className="grid grid-cols-3 gap-2">
        {players.map((player, index) => (
          <PlayerInfo key={index} {...player} />
        ))}

        <div className="grid grid-cols-3 bg-[#101318] rounded-sm px-6 py-3.5 col-span-full justify-items-center max-sm:px-0">
          <Statistic label="Points">+{points}</Statistic>
          <Statistic label="Место">{place}</Statistic>
          <Statistic label="Всего убийств">{total_kills}</Statistic>
        </div>
      </div>
    </div>
  )
}
