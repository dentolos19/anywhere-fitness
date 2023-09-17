export type Workout = {
  name: string;
  category?: string;
  notes?: string;
  reps?: number;
  sets?: number;
  startTime?: string;
  endTime?: string;
};

export type Goal = {
  title: string;
  description?: string;
  due?: string;
}