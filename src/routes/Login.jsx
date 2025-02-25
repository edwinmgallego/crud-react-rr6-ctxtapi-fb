import React, { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const handleClickLogin = () => {
    setUser(true);
    navigate("/");
  };
  return (
    <>
      <div>
        <h2>Login</h2>
      </div>
      <hr />
      <h3>{user ? "online" : "offline"}</h3>
      <button onClick={handleClickLogin}>Acceder</button>
    </>
  );
};

export default Login;
