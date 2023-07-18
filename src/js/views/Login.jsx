import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { store, actions } = useContext(Context);
  let navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    let isLogged = await actions.login(email, password);
    console.log(isLogged);
    if (isLogged) {
      //true
      navigate("/home");
    }
  }

  const handleRedirect = () => {
    navigate('/signup');
  };


  return (
    <div>
    <h1 style={{ fontSize: '2rem' }}>Welcome to the Force</h1>
    <form
      className="card w-75 mx-auto"
      onSubmit={handleSubmit}
    >
      <div className="m-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          <h5>Email address</h5>
        </label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="m-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
        <h5>Password </h5>
        </label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <button type="submit" className="btn">
        <h5>Enter</h5>
      </button>
    </form>
    <h5 className="mt-3" style={{ cursor: 'pointer' }}  onClick={handleRedirect}>You haven't account? Click Here to Register!</h5>
    </div>
  );
};
export default Login;