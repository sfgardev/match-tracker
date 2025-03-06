import { PropsWithChildren } from 'react'

type Props = {
  label: string
}

export const Statistic = ({ label, children }: PropsWithChildren<Props>) => {
  return (
    <div>
      <span className="font-medium text-sm text-[#FAFAFA]/40">{label}:</span>{' '}
      <span>{children}</span>
    </div>
  )
}
