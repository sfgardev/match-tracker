import { cn } from '../../lib'

export const Divider = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <span className="h-[1px] bg-[#13181F] flex-1"></span>
      <span className="font-inter font-semibold text-sm text-[#313A47]">
        VS
      </span>
      <span className="h-[1px] bg-[#13181F] flex-1"></span>
    </div>
  )
}
