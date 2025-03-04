import { Badge } from '../../shared/ui/badge'

export const Score = () => {
  return (
    <div className="flex flex-col items-center gap-1">
      <p className="text-xl">1 : 1</p>
      <Badge>Live</Badge>
    </div>
  )
}
