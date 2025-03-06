export type MatchModel = {
  awayScore: number
  awayTeam: Team
  homeScore: number
  homeTeam: Team
  status: Status
  time: Date
  title: string
}

export enum Status {
  Finished = 'Finished',
  Ongoing = 'Ongoing',
  Scheduled = 'Scheduled',
}

export type Team = {
  name: string
  place: number
  players: Player[]
  points: number
  total_kills: number
}

export type Player = {
  kills: number
  username: string
}
