import { useReducer } from "react";

const initialState = {
  counter: 100,
};

type ACTIONTYPES =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: number };

function counterReducer(state: typeof initialState, action: ACTIONTYPES) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case "decrement":
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    default:
      throw new Error("inapropriate action");
  }
}

export default function UseReducerComponent() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <br />
      <h1>useReducer</h1>
      <div>{state.counter}</div>
      <div>
        <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
          Increment 10
        </button>
        <button onClick={() => dispatch({ type: "decrement", payload: -5 })}>
          Decrement 5
        </button>
      </div>
    </div>
  );
}
