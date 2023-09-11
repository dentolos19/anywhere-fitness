export type Workout = {
  name: string;
  category: string;
  url?: string;
  performance: {
    time: number;
    weight: number;
    reps: number;
    sets: number;
  };
};