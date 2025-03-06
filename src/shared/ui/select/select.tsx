import { ComponentPropsWithoutRef } from 'react'
import { cn } from '../../lib'
import { ChevronDown } from './chevron-down'

type Props = {
  options: { label: string; value: string }[]
} & ComponentPropsWithoutRef<'select'>

export const Select = ({ options, className, ...props }: Props) => {
  return (
    <div
      className={cn(
        'relative bg-[#0B0E12] text-base font-inter font-medium text-[#B4B5B6] rounded-sm pr-9',
        className
      )}
    >
      <select className="appearance-none w-full outline-0 p-4" {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown
        className={cn(
          'absolute top-1/2 right-4 -translate-y-1/2 transition-transform'
        )}
      />
    </div>
  )
}
