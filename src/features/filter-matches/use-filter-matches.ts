import { useState } from 'react'
import { Filter } from './model'
import { MatchModel } from '../../entities/match/model'

export const useFilterMatches = (matches: MatchModel[] | undefined) => {
  const [filter, setFilter] = useState<Filter>('All')

  const handleChangeFilter = (newFilter: Filter) => {
    setFilter(newFilter)
  }

  const filterMatches = (matches: MatchModel[] | undefined) => {
    if (!matches) return []

    if (filter === 'All') return matches

    return matches.filter((match) => match.status === filter)
  }

  const filteredMatches = filterMatches(matches)

  return { filter, filteredMatches, handleChangeFilter }
}
