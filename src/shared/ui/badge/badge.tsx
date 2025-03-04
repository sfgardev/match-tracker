import { ComponentPropsWithoutRef } from 'react'
import { cn } from '../../lib'

type Color = 'green' | 'red' | 'orange'
type Props = { color?: Color } & ComponentPropsWithoutRef<'span'>

export const Badge = ({
  className,
  children,
  color = 'green',
  ...props
}: Props) => {
  const colors: Record<Color, string> = {
    green: 'bg-clr-green-500',
    red: 'bg-clr-red-500',
    orange: 'bg-clr-orange-700',
  }

  return (
    <span
      className={cn(
        'inline-block text-center min-w-24 py-1.5 px-2 font-inter font-semibold text-xs text-white rounded-sm',
        colors[color],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
