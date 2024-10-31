import { useContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./routes/Login";
import Home from "./routes/Home";
import Navbar from "./Components/navbar";
import RequireAuth from "./Components/RequireAuth";
import "./App.css";
import Register from "./Components/Register";
import { UserContext } from "./context/UserProvider";
import LayoutContainerForm from "./Components/LayoutContainerForm";

function App() {
  const { user } = useContext(UserContext);

  if (user === false) {
    return <p>loading user............</p>;
  }

  return (
    <>
      <Navbar />
      <h1>APP</h1>

      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        ></Route>
        <Route path={"/"} element={<LayoutContainerForm />}>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
