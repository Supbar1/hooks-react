import UseEffectComponent from "./components/useEffectComponent";
import UseStateComponent from "./components/useStateComponent";
import UserContextComponent from "./components/useContextComponent";
import UseReducerComponent from "./components/useReducer";
function App() {
  return (
    <div>
      <UseStateComponent />
      <UseEffectComponent />
      <UserContextComponent />
      <UseReducerComponent />
    </div>
  );
}

export default App;
