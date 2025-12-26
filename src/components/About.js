import React, { useContext } from "react";
import { UserContext } from "./Frondpage";

const About = () => {
  const { sha } = useContext(UserContext);

  return (
    <div>
      <p>{sha.name}</p>
    </div>
  );
};

export default About;
