import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("emgallego@uao.edu.co");
  const [password, setPassword] = useState("0987654321");
  const { loginUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("prosesando formulario:", email, " ", password);
    try {
      await loginUser(email, password);
      console.log("usurio logueado");
      navigate("/");
    } catch (error) {
      console.log(error.code);
    }
  };
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
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name=""
          id=""
          placeholder="ingrese email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name=""
          id=""
          placeholder="ingrese password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">login</button>
      </form>
    </>
  );
};

export default Login;
