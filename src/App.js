import { useSelector, useDispatch } from "react-redux";
import { valider } from "./features/connection/connectionSlice.js";
import Welcom from "./Welcom.js";
import Error from "./Error.js";

function App() {
const connecter = useSelector((state)=> state.connection.value)
const dispatch = useDispatch();
function estValide(params) {
  const monobjet = {
    adress: params[0].value,
    pswd: params[1].value,
  };
  dispatch(valider(monobjet));
}
console.log(connecter);
  return (
    <div className="App">
    <form
        onSubmit={(e) => {
          e.preventDefault();
          estValide(e.target);
        }}
        action=""
      >
        <input type="text" />
        <input type="text" />
        <button type="submit">valider</button>
      </form>
      {connecter ? <Welcom/> : <Error/>}
    </div>
  );
}
export default App;
