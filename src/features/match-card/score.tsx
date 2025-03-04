import { Status } from '../../entities/match/model'
import { Badge, BadgeColor } from '../../shared/ui/badge'

type Props = {
  homeScore: number
  awayScore: number
  status: Status
}

const badgePropsByStatus: Record<Status, { color: BadgeColor; label: string }> =
  {
    [Status.Ongoing]: {
      color: 'green',
      label: 'Live',
    },
    [Status.Finished]: {
      color: 'red',
      label: 'Finished',
    },
    [Status.Scheduled]: {
      color: 'orange',
      label: 'Match preparing',
    },
  }

export const Score = ({ homeScore, awayScore, status }: Props) => {
  const { color, label } = badgePropsByStatus[status] || {}

  return (
    <div className="flex flex-col items-center gap-1">
      <p className="text-xl">
        {homeScore} : {awayScore}
      </p>
      <Badge color={color}>{label}</Badge>
    </div>
  )
}
