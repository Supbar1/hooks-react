import { useEffect, useState, useRef } from "react";

export default function UseRefComponent() {
  const [name, setName] = useState<string>("");
  const prevString = useRef<string>("");
  const renderCount = useRef<number>(0);
  useEffect(() => {
    prevString.current = name;
    renderCount.current = renderCount.current + 1;
  }, [name]);
  return (
    <>
      <br />
      <h1>useRef</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div>My input is {name}</div>
      <div> and it used to be {prevString.current}</div>
      <div>I render: {renderCount.current} times </div>
    </>
  );
}
