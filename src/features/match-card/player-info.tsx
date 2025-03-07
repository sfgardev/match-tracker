import { Player } from '../../entities/match/model'
import avatar from './avatar.png'

type Props = {
  kills: Player['kills']
  username: Player['username']
}

export const PlayerInfo = ({ kills, username }: Props) => {
  return (
    <div className="bg-[#101318] py-2 px-6 rounded-sm flex items-center justify-between flex-wrap max-sm:justify-center max-sm:py-1.5 max-sm:px-2">
      <div className="flex items-center gap-2 max-sm:gap-1">
        <img
          className="max-sm:w-6 max-sm:h-6"
          src={avatar}
          alt={`User ${username}`}
        />
        <span
          title={username}
          className="text-[#FAFAFA] overflow-hidden truncate max-sm:text-xs"
        >
          {username}
        </span>
      </div>
      <div>
        <span className="font-medium text-sm text-[#FAFAFA]/40 max-sm:text-xs">
          Убийств:
        </span>{' '}
        <span className="max-sm:text-xs"> {kills}</span>
      </div>
    </div>
  )
}
