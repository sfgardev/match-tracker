import { Status } from '../../entities/match/model'
import { Select } from '../../shared/ui/select'
import { Filter } from './model'

type Props = {
  filter: Filter
  onChangeFilter: (value: Filter) => void
}

export const FilterMatches = ({ filter, onChangeFilter }: Props) => {
  return (
    <Select
      className="w-full sm:w-auto"
      value={filter}
      options={[
        { label: 'Все статусы', value: 'All' },
        { label: 'Live', value: Status.Ongoing },
        { label: 'Finished', value: Status.Finished },
        { label: 'Match preparing', value: Status.Scheduled },
      ]}
      onChange={(event) => onChangeFilter(event.target.value as Filter)}
    />
  )
}
