import { ComponentPropsWithoutRef } from 'react'
import { cn } from '../../shared/lib'
import { Alert } from '../../shared/ui/icons'

type Props = {} & ComponentPropsWithoutRef<'div'>

export const AlertMessage = ({ className, children, ...props }: Props) => {
  return (
    <div
      className={cn(
        'flex items-center gap-2.5 bg-[#0F1318] px-6 py-4 rounded-sm',
        className
      )}
      {...props}
    >
      <Alert />
      <p className="font-inter text-lg font-semibold text-white">{children}</p>
    </div>
  )
}
