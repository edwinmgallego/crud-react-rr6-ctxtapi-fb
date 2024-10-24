import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

const Navbar = () => {
  const { user, signOutUser } = useContext(UserContext);

  const handleClicklogOut = async () => {
    try {
      await signOutUser();
    } catch (error) {
      console.log(error.code);
    }
  };

  return (
    <>
      <div>
        {user ? (
          <>
            <NavLink to="/"> | inicio |</NavLink>
            <button onClick={handleClicklogOut}>| logout |</button>
          </>
        ) : (
          <>
            <NavLink to="/login">Login | </NavLink>
            <NavLink to="/register">register | </NavLink>
          </>
        )}
        navbar
      </div>
    </>
  );
};

export default Navbar;
