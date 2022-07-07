import { useState, useEffect } from "react";

export default function UseEffectComponent() {
  const [value, setValue] = useState<number>(1);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setValue((v) => v + 1);
    }, 2000);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <h1>useEffect</h1>
      <span>timer:</span>
      <div>{value}</div>
    </>
  );
}
