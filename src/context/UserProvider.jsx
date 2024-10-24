import React, { useState } from "react";
import { createContext } from "react";
import PropTypes from "prop-types"; // Importamos prop-types
export const UserContext = createContext();

const UserProvider = (props) => {
  const [user, setUser] = useState(false);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
// Validación de las props
UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;
