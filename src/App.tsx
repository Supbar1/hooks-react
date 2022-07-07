import UseEffectComponent from "./components/useEffectComponent";
import UseStateComponent from "./components/useStateComponent";
import UserContextComponent from "./components/useContextComponent";
import UseReducerComponent from "./components/useReducer";
import UseRefComponent from "./components/useRefComponent";
function App() {
  return (
    <div>
      <UseStateComponent />
      <UseEffectComponent />
      <UserContextComponent />
      <UseReducerComponent />
      <UseRefComponent />
      
    </div>
  );
}

export default App;
