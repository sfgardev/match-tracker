import { cn } from '../../shared/lib'
import { TeamBadge } from '../../shared/ui/icons'

type Props = {
  teamName: string
  rowReverse?: boolean
}

export const Team = ({ teamName, rowReverse = false }: Props) => {
  return (
    <div
      className={cn('flex items-center gap-3.5 max-sm:gap-1', {
        'flex-row-reverse': rowReverse,
      })}
    >
      <TeamBadge className="max-sm:w-7 max-sm:h-7" />
      <p>{teamName}</p>
    </div>
  )
}
