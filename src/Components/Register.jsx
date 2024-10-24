import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";

const Register = () => {
  const [email, setEmail] = useState("emgallego@uao.edu.co");
  const [password, setPassword] = useState("0987654321");
  const { registerUser } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("prosesando formulario:", email, " ", password);
    try {
      await registerUser(email, password);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>
        <h1>Register</h1>
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
          <button type="submit">Resgister</button>
        </form>
      </div>
    </>
  );
};

export default Register;
