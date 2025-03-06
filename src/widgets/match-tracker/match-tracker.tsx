import { useState } from 'react'
import { AlertMessage } from '../../features/alert-message'
import { FilterMatches, useFilterMatches } from '../../features/filter-matches'
import { MatchCard } from '../../features/match-card'
import { useWebsocket } from '../../shared/lib'
import { MatchModel } from '../../entities/match/model'

export const MatchTracker = () => {
  const [matches, setMatches] = useState<MatchModel[]>([])

  const { isConnected, isError } = useWebsocket<MatchModel[]>({
    url: 'wss://app.ftoyd.com/fronttemp-service/ws',
    onMessage: ({ data }) => setMatches(data),
    onOpen: () => console.log('WebSocket connected'),
    onClose: () => console.log('WebSocket disconnected'),
    onError: (event) => console.error('WebSocket error:', event),
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
      </header>

      <div className="flex flex-col gap-3">
        {!isConnected && !isError && (
          <div className="text-white">Loading...</div>
        )}
        {filteredMatches?.map((match) => (
          <MatchCard key={match.title} match={match} />
        ))}
      </div>
    </>
  )
}
