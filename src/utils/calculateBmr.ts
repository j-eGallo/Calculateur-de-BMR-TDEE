export function calculateBmr(
  poids: number,
  taille : number,
  age: number,
  gender: "male" | "female"
): number {
  if (gender === "male") {
    return (10 * poids) + (6.25 * taille) - (5 * age) + 5;
  }

  return (10 * poids) + (6.25 * taille) - (5 * age) - 161;

}