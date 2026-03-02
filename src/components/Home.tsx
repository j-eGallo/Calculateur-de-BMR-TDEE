import { useState } from "react";
import "./home.css"
import { calculateBmr } from "../utils/calculateBmr";
import { calculateTdee, type ActivityLvl } from "../utils/calculateTdee";




export default function Tdee() {

  const [poids, setPoids] = useState<number | null>(null);
  const [taille, setTaille] = useState<number | null>(null);
  const [age, setAge] = useState<number | null>(null);
  const [gender, setGender] = useState<"male" | "female" | null>(null);
  const [resultBmr, setResultBmr] = useState(0);
  const [resultTdee, setResultTdee] = useState(0);
  const [activity, setActivity] = useState<ActivityLvl | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);






const isFormValid =
  poids !== null &&
  taille !== null &&
  age !== null &&
  activity !== null &&
  gender !== null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

if (!isFormValid) return;


const value = calculateBmr(poids!, taille!, age!, gender!);
setResultBmr(value);
const tdee = calculateTdee(value, activity!);setResultTdee(tdee);

setHasSubmitted(true);
}

 
  
  return (
    <div className="tdeebox">
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="radio" name="gender" checked={gender === "male"} onChange={() => setGender("male")} />
          <label htmlFor="">Homme</label>
          <input type="radio" name="gender" checked={gender === "female"} onChange={() => setGender("female")} />
          <label htmlFor="">Femme</label>
        </div>
        <div>

        </div>
        <div className="values">
          <div className="myinputs">
            <h1>Poids</h1>
            <input type="number" value={poids ?? ""} onChange={(e) => setPoids(Number(e.target.value))} placeholder="Sélectionnez votre poids"/>
          </div>
          <div className="myinputs">
            <h1>Taille</h1>
            <input type="number" value={taille ?? ""} onChange={(e) => setTaille(Number(e.target.value))} placeholder="Sélectionnez votre taille"/>
          </div>
          <div className="myinputs">
            <h1>Âge</h1>
            <input type="number" value={age ?? ""} onChange={(e) => setAge(Number(e.target.value))} placeholder="Sélectionnez votre taille"/>
          <div className="myinputs">
            <h1>Votre niveau d'activité</h1>
              <select
                value={activity ?? ""}
                onChange={(e) => setActivity(e.target.value as ActivityLvl)}
                style={{ height: "39px", width: "339px"}}
              >
                <option value="">Choisir activité</option>
                <option value="sedentary">Sédentaire</option>
                <option value="light">Léger</option>
                <option value="moderate">Modéré</option>
                <option value="intense">Intense</option>
              </select>
          </div>
        </div>
        </div>
        <button className="submit" type="submit" disabled={!isFormValid}>Soumettre</button>
      </form>
      {hasSubmitted && (
      <>
            <h1 className="result">
              Votre BMR est de : {resultBmr} calories
            </h1>
            <h1 className="result">
              Et votre TDEE est de : {resultTdee} calories
            </h1>
      </>
      )}
    </div>
  )
}