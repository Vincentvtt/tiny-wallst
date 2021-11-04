export interface Score {
  id: number;
  date_generated: Date;
  dividend: number;
  future: number;
  health: number;
  management: number;
  past: number;
  value: number;
  misc: number;
  total: number;
  sentence: string;
}

export default Score;