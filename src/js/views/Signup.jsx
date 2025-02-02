import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../component/navbar.js";
import { Footer } from "../component/footer.js";


const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [adress, setAddress] = useState("");

  const { store, actions } = useContext(Context);
  let navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    // console.log(email,password);
    //    boolean   <=
    let register = await actions.signup(email, password , username , name ,phone , adress);
    console.log(register);
    if (register) {
      //true
      navigate("/");
    }else {
      return alert("User already exist")
    }
  }
  function redirectToLogin() {
    setTimeout(() => {
      window.location.href = '/login';
    }, 1000); 
  }

  return (
    <div className="back">
      <Navbar />
    <h1 style={{ fontSize: '2rem' }}>Welcome to the dark side</h1>
    <form
      className="card w-75 mx-auto mb-5"
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
      <div className="m-3 ">
        <label htmlFor="exampleInputEmail1" className="form-label">
          <h5>Name</h5>
        </label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="m-3 ">
        <label htmlFor="exampleInputEmail1" className="form-label">
          <h5>Username</h5>
        </label>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="m-3 ">
        <label htmlFor="exampleInputEmail1" className="form-label">
          <h5>Phone</h5>
        </label>
        <input
          type="text"
          onChange={(e) => setPhone(e.target.value)}
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="m-3 ">
        <label htmlFor="exampleInputEmail1" className="form-label">
          <h5>Address</h5>
        </label>
        <input
          type="text"
          onChange={(e) => setAddress(e.target.value)}
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <button onClick={redirectToLogin} style={{ cursor: 'pointer' }} type="submit" className="btn btn-warning  mx-auto m-3">
        Create account
      </button>
    </form>
    <Footer />

    </div>
  );
};

export default Signup;