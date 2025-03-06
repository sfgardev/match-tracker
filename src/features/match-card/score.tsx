import { Status } from '../../entities/match/model'
import { Badge, BadgeColor } from '../../shared/ui/badge'
import { motion } from 'framer-motion'

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
        <motion.span
          key={`home-${homeScore}`}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {homeScore}{' '}
        </motion.span>
        :
        <motion.span
          key={`away-${awayScore}`}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {' '}
          {awayScore}
        </motion.span>
      </p>
      <Badge color={color}>{label}</Badge>
    </div>
  )
}
