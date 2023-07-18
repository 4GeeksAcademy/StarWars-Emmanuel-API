import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { store, actions } = useContext(Context);
  let navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    // console.log(email,password);
    //    boolean   <=
    let register = await actions.signup(email, password);
    console.log(register);
    if (register) {
      //true
      navigate("/");
    }
  }


  return (
    <div>
    <h1 style={{ fontSize: '2rem' }}>Show the force inside you</h1>
    <form
      className="card w-75 mx-auto"
      onSubmit={handleSubmit}
    >
      <div className="m-3 ">
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
          <h5>Password</h5>
        </label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <button style={{ cursor: 'pointer' }} type="submit" className="btn">
        <h5>Create account</h5>
      </button>
    </form>
    </div>
  );
};

export default Signup;