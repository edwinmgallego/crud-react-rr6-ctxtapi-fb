import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <div>
        {user ? (
          <>
            <NavLink to="/">inicio</NavLink>
            <button onClick={() => setUser(false)}>logout</button>
          </>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
        navbar
      </div>
    </>
  );
};

export default Navbar;
