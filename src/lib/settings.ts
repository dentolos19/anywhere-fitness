import { Workout } from "./types";

class Settings {
  // theme
  get theme() {
    const value = localStorage.getItem("theme");
    if (!value) return "dark";
    return value;
  }
  set theme(value: string) {
    localStorage.setItem("theme", value);
  }
  // workouts
  get workouts() {
    const rawValue = localStorage.getItem("workouts");
    const value = JSON.parse(rawValue || "[]") as Workout[];
    if (!rawValue) return [];
    return value;
  }
  set workouts(value: Workout[]) {
    localStorage.setItem("workouts", JSON.stringify(value));
  }
}

const settings = new Settings();

export default settings;