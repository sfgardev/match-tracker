import { Player } from '../../entities/match/model'
import avatar from './avatar.png'

type Props = {
  kills: Player['kills']
  username: Player['username']
}

export const PlayerInfo = ({ kills, username }: Props) => {
  return (
    <div className="bg-[#101318] py-2 px-6 rounded-sm flex items-center justify-between flex-wrap">
      <div className="flex items-center gap-2">
        <img src={avatar} alt={`User ${username}`} />
        <span className="text-[#FAFAFA]">{username}</span>
      </div>
      <div>
        <span className="font-medium text-sm text-[#FAFAFA]/40">Убийств:</span>{' '}
        <span> {kills}</span>
      </div>
    </div>
  )
}
