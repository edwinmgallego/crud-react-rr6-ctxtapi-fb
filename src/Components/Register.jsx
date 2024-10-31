import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = () => {
  //const [email, setEmail] = useState("emgallego@uao.edu.co");
 // const [password, setPassword] = useState("0987654321");
  const navegate = useNavigate();
  const { registerUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = async ({ email, password }) => {
    console.log("prosesando formulario:", email, " ", password);
    try {
      await registerUser(email, password);
      console.log("usuario creado--> ");
      navegate("/");
    } catch (error) {
      console.log(error);
    }
  };
  /* const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("prosesando formulario:", email, " ", password);
    try {
      await registerUser(email, password);
      console.log("usuario creado--> ");
      navegate("/");
    } catch (error) {
      console.log(error);
    }
  };*/
  return (
    <>
      <div>
        <h1>Register</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            name=""
            id=""
            placeholder="ingrese email"
            /*value={email}
            onChange={(e) => setEmail(e.target.value)}*/
            {...register("email", {
              required: { value: true, message: "campo obligatorio" },
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "formato de email incorrecto",
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
          <input
            type="password"
            name=""
            id=""
            placeholder="ingrese password"
            /* value={password}
            onChange={(e) => setPassword(e.target.value)}*/
            {...register("password", {
              required: "La contraseña es obligatoria",
              minLength: {
                value: 8,
                message: "La contraseña debe tener al menos 8 caracteres",
              },
              validate: {
                trim: (v) => {
                  if (!v.trim()) {
                    return "no seas 🤬, escribe algo";
                  }
                  return true;
                },
              },
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
          <input
            type="password"
            name=""
            id=""
            placeholder="ingrese password"
            /* value={password}
            onChange={(e) => setPassword(e.target.value)}*/
            {...register("password2", {
              required: "La contraseña es obligatoria",
              validate: {
                equals: (v) =>
                  v === getValues("password") || "no coinciden las contraseñas",
              },
            })}
          />
          {errors.password2 && <p>{errors.password2.message}</p>}
          <button type="submit">Resgister</button>
        </form>
      </div>
    </>
  );
};

export default Register;
