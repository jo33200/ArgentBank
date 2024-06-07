import "./login.scss";
import React from "react";
import Button from "../../components/Button/Button"; 


const Login = () => {

  return (
    <main className="main bg-dark">
      <div className="container-sign-in">
       <section className="sign-in-content">
          <i className="fa fa-user-circle "></i>
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label><input type="text" id="username" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label><input type="password" id="password" />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
            </div>
            <Button className="button-sign" to="/user" >
              Sign In
            </Button>
          </form>
        </section>  
      </div>
    </main>
  );
};

export default Login;