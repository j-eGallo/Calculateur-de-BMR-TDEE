export type ActivityLvl =
  | "sedentary"
  | "light"
  | "moderate"
  | "intense";

export function calculateTdee(
  bmr: number,
  activty: ActivityLvl
): number {
  const activityMap = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  intense: 1.725
  };
  return bmr * activityMap[activty];
}