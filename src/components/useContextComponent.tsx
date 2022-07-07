import { useState, useContext } from "react";

import UserContext, { UserState } from "./store";
function ConsumerContext() {
  const user = useContext(UserContext);
  return (
    <div>
      <br />
      <h1>useContext</h1>
      <div>First name: {user.first}</div>
      <div>Last name: {user.last}</div>
    </div>
  );
}

export default function UserContextComponent() {
  const [user, setUser] = useState<UserState>({
    first: "Jonan",
    last: "Smith",
  });
  return (
    <UserContext.Provider value={user}>
      <ConsumerContext />
      <button
        onClick={() =>
          setUser({
            first: "Tom",
            last: "Hanks",
          })
        }
      >
        Change name
      </button>
    </UserContext.Provider>
  );
}
