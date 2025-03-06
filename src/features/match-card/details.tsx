import { Player, Team } from '../../entities/match/model'
import { PlayerInfo } from './player-info'
import { Statistic } from './statistic'

type Props = {
  players: Player[]
  place: Team['place']
  points: Team['points']
  total_kills: Team['total_kills']
}

export const Details = ({ players, place, points, total_kills }: Props) => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-2">
        {players.map((player, index) => (
          <PlayerInfo key={index} {...player} />
        ))}

        <div className="grid grid-cols-3 bg-[#101318] rounded-sm px-6 py-3.5 col-span-full justify-items-center">
          <Statistic label="Points">+{points}</Statistic>
          <Statistic label="Место">{place}</Statistic>
          <Statistic label="Всего убийств">{total_kills}</Statistic>
        </div>
      </div>
    </div>
  )
}
