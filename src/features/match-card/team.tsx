import { cn } from '../../shared/lib'
import { TeamBadge } from '../../shared/ui/icons'

type Props = {
  rowReverse?: boolean
}

export const Team = ({ rowReverse = false }: Props) => {
  return (
    <div
      className={cn('flex items-center gap-3.5', {
        'flex-row-reverse': rowReverse,
      })}
    >
      <TeamBadge />
      <p>Command №1</p>
    </div>
  )
}
