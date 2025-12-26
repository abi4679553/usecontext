import React, { createContext } from "react";

// 1️⃣ Context outside component
export const UserContext = createContext();

const Frondpage = (props) => {

  // 2️⃣ Data in SAME scope
  const sha = {
    name: "abi",
    age: 20,
  };

  const information = {
    name: "sara",
    age: 21,
    gender: "male",
  };

  return (
    <div>
      <UserContext.Provider value={{ sha, information }}>
        {props.children}
      </UserContext.Provider>
    </div>
  );
};

export default Frondpage;
