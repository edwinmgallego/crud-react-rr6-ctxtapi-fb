/*
Este código implementa un formulario de registro de usuario en React que utiliza varias librerías y técnicas para la gestión de formularios, validación de datos, y manejo de errores. Te explico cada sección del código:

Importaciones:

useContext, useState, useNavigate, useForm y otros hooks de React se importan para gestionar el estado y la navegación.
UserContext: se obtiene del contexto de la aplicación (importado desde "../context/UserProvider"), el cual provee el método registerUser para registrar usuarios.
useNavigate: es una función de React Router utilizada para navegar a otra página tras el registro.
useForm: es un hook de react-hook-form que facilita la gestión de formularios en React.
erroresFirebase y formValidate: son funciones de validación y manejo de errores personalizadas importadas de utilidades propias.
FormError y FormInput: son componentes personalizados para mostrar errores y campos de entrada en el formulario.
Componente Register:

Define el formulario de registro.
navegate: se usa para redirigir a la página principal (/) después de que el usuario se registre exitosamente.
registerUser: es la función que se obtiene desde el contexto UserContext y permite crear un usuario con un correo y contraseña.
formValidate(): se desestructura para obtener las reglas de validación (required, patternEmail, etc.) utilizadas en los campos del formulario.
useForm(): permite manejar el formulario con validación y manejo de errores. Este hook devuelve:
register: para registrar cada campo de entrada.
handleSubmit: se usa en el onSubmit para procesar el envío del formulario.
formState.errors: contiene los errores de validación.
getValues: obtiene los valores de los campos para validar.
setError: establece errores personalizados, como los de Firebase.
Función onSubmit:

Se ejecuta cuando el usuario envía el formulario.
Intenta registrar un usuario con registerUser(email, password). Si el registro es exitoso, navega a la página principal (/).
Si hay un error, se invoca erroresFirebase(error.code) para traducir el código de error y se muestra usando setError en el formulario.
Renderizado del formulario:

FormError: muestra el error si el campo errors.firebase contiene algún mensaje de error.
<form onSubmit={handleSubmit(onSubmit)}>: el formulario se envía al presionar el botón de registro, y handleSubmit asegura que se maneje correctamente.
Campos de entrada (FormInput):
Cada uno de estos campos utiliza register con validaciones:
email: se valida que sea requerido y tenga el formato de email.
password: se valida que cumpla con una longitud mínima y no contenga espacios al inicio y al final.
repassword: es el campo de confirmación de contraseña, que se valida con validateEquals para asegurarse de que coincida con password.
Botón Register:

Al hacer clic en "Register", se dispara el envío del formulario, que invoca onSubmit.
Este enfoque garantiza una interfaz intuitiva, validación de datos y manejo efectivo de errores para registrar usuarios en una aplicación React.*/


import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { erroresFirebase } from "../utils/erroresfirebase";
import FormError from "./FormError";
import { formValidate } from "../utils/formValidate";
import FormInput from "./FormImput";
const Register = () => {
  //const [email, setEmail] = useState("emgallego@uao.edu.co");
  // const [password, setPassword] = useState("0987654321");
  const navegate = useNavigate();
  const { registerUser } = useContext(UserContext);
  const { required, patternEmail, minLength, validateTrim, validateEquals } =
    formValidate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setError,
  } = useForm();

  const onSubmit = async ({ email, password }) => {
    console.log("prosesando formulario:", email, " ", password);
    try {
      await registerUser(email, password);
      console.log("usuario creado--> ");
      navegate("/");
    } catch (error) {
      console.log(error);
      setError("firebase", {
        message: erroresFirebase(error.code),
      });
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
      <h1>User Register</h1>
      <FormError error={errors.firebase} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type="email"
          placeholder="Ingrese email"
          {...register("email", {
            required,
            pattern: patternEmail,
          })}
        >
          <FormError error={errors.email} />
        </FormInput>

        <FormInput
          type="password"
          placeholder="Ingrese Password"
          {...register("password", {
            minLength,
            validate: validateTrim,
          })}
        >
          <FormError error={errors.password} />
        </FormInput>

        <FormInput
          type="password"
          placeholder="Ingrese Password"
          {...register("repassword", {
            validate: validateEquals(getValues),
          })}
        >
          <FormError error={errors.repassword} />
        </FormInput>
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;
