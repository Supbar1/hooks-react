import { useState } from "react";

export default function UseStateComponent() {
  const [array, setArray] = useState<number[]>([]);
  const [name, setName] = useState<string | null>(null);

  return (
    <>
      <h1>useState</h1>
      <button onClick={() => setArray([...array, array.length + 1])}>
        Increment array
      </button>
      {JSON.stringify(array)}
      <div>
        <button onClick={() => setName("Hey!")}>Say hey!</button>
        {name}
      </div>
    </>
  );
}
