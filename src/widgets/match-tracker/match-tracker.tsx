import { useQuery } from '@tanstack/react-query'
import { matchesApi } from '../../entities/match/api'
import { AlertMessage } from '../../features/alert-message'
import { FilterMatches, useFilterMatches } from '../../features/filter-matches'
import { MatchCard } from '../../features/match-card'
import { Button } from '../../shared/ui/button'
import { Refresh } from '../../shared/ui/icons'

export const MatchTracker = () => {
  const {
    data: matches,
    isPending,
    isError,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ['matches'],
    queryFn: matchesApi.getMatches,
  })

  const { filter, filteredMatches, handleChangeFilter } =
    useFilterMatches(matches)

  return (
    <>
      <header className="pb-5 flex justify-between">
        <div className="flex gap-2 items-center">
          <h2 className="font-tactic text-[2rem] text-white">Match Tracker</h2>
          <FilterMatches filter={filter} onChangeFilter={handleChangeFilter} />
        </div>

        {isError && (
          <AlertMessage className="ml-auto">
            Ошибка: не удалось загрузить информацию
          </AlertMessage>
        )}
        <Button disabled={isFetching} onClick={() => refetch()}>
          <span>Обновить</span>
          <Refresh />
        </Button>
      </header>
      <div className="flex flex-col gap-3">
        {isPending && <div className="text-white">Loading...</div>}
        {filteredMatches?.map((match) => (
          <MatchCard key={match.title} match={match} />
        ))}
      </div>
    </>
  )
}
