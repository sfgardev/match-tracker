import { cn } from '../../shared/lib'
import { TeamBadge } from '../../shared/ui/icons'

type Props = {
  teamName: string
  rowReverse?: boolean
}

export const Team = ({ teamName, rowReverse = false }: Props) => {
  return (
    <div
      className={cn('flex items-center gap-3.5', {
        'flex-row-reverse': rowReverse,
      })}
    >
      <TeamBadge />
      <p>{teamName}</p>
    </div>
  )
}
