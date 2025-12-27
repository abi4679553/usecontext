import React, { createContext } from "react";


export const UserContext = createContext();

const Frondpage = (props) => {

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
