import { ComponentPropsWithoutRef } from 'react'
import { cn } from '../../lib'

type Variant = 'primary'
type Props = {
  variant?: Variant
} & ComponentPropsWithoutRef<'button'>

export const Button = ({
  className,
  children,
  variant = 'primary',
  ...props
}: Props) => {
  const variants: Record<Variant, string> = {
    primary: 'bg-clr-red-500',
  }

  return (
    <button
      className={cn(
        'flex items-center gap-2.5 font-inter text-white text-lg font-semibold py-4 px-10 rounded-sm',
        variants[variant],
        'active:bg-clr-red-700',
        'disabled:bg-clr-red-800 disabled:text-clr-gray-500',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
