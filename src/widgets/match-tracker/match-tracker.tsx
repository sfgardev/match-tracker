import { useQuery } from '@tanstack/react-query'
import { matchesApi } from '../../entities/match/api'
import { MatchCard } from '../../features/match-card'
import { ButtonWithError } from './button-with-error'

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

  return (
    <>
      <header className="pb-5 flex justify-between">
        <h2 className="font-tactic text-[2rem] text-white">Match Tracker</h2>
        {isError && (
          <ButtonWithError isLoading={isFetching} onRefresh={refetch} />
        )}
      </header>
      <div className="flex flex-col gap-3">
        {isPending && <div className="text-white">Loading...</div>}
        {matches?.map((match) => <MatchCard key={match.title} match={match} />)}
      </div>
    </>
  )
}
