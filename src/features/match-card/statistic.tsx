import { PropsWithChildren } from 'react'

type Props = {
  label: string
}

export const Statistic = ({ label, children }: PropsWithChildren<Props>) => {
  return (
    <div>
      <span className="font-medium text-sm text-[#FAFAFA]/40 max-sm:text-xs">
        {label}:
      </span>{' '}
      <span className="max-sm:text-xs">{children}</span>
    </div>
  )
}
