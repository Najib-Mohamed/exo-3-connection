import { useSelector, useDispatch } from "react-redux";
import { ajouter } from "./features/formulaire/formulaireSlice.js";
import { deconnecter } from "./features/connection/connectionSlice.js";
import React from "react";

export default function Welcom() {
  const tableau = useSelector((state) => state.formulaire.value);

  const dispatch = useDispatch();

  function parcoursTab(params) {
    const monobjet = {
      nom: params[0].value,
      prenom: params[1].value,
      age: params[2].value,
    };
    dispatch(ajouter(monobjet));
  }
  console.log(tableau);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          parcoursTab(e.target);
        }}
        action=""
      >
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <button type="submit">valider</button>
      </form>

      <table className="table-auto">
        <thead>
          <tr>
            <th>nom</th>
            <th>prenom</th>
            <th>age</th>
          </tr>
        </thead>
        <tbody>
          {tableau.map((element) => {
            return (
              <tr>
                <td>{element.nom}</td>
                <td>{element.prenom}</td>
                <td>{element.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <button onClick={(()=>{dispatch(deconnecter())})}>deco</button>
    </div>
  );
}
