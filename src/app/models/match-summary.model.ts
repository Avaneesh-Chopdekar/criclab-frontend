export interface MatchSummary {
  id: number;
  teamHeading: string;
  matchNumberVenue: string;
  battingTeam: string;
  battingTeamScore: string;
  bowlingTeam: string;
  bowlingTeamScore: string;
  liveText: string;
  matchLink: string;
  textComplete: string;
  status: MatchStatus;
  date: Date;
}

export enum MatchStatus {
  LIVE = 'LIVE',
  COMPLETED = 'COMPLETED',
}
