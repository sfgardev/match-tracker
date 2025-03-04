import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { MatchTracker } from '../widgets/match-tracker'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-dvh p-10.5 bg-[#06080C]">
        <MatchTracker />
      </div>
    </QueryClientProvider>
  )
}

export default App
