import { Link } from "react-router-dom";
import { useState } from "react";

import Input from "../../../shared/components/UI-components/Input";
import Button from "../../../shared/components/UI-components/Button";

import classes from "./Auth.module.css";

const Login = () => {
  const [isSigningUp, setIsSigningUp] = useState(false);

  const handleLoginMode = () => {
    setIsSigningUp(!isSigningUp);
  };

  return (
    <div className={classes["auth-wrapper"]}>
      <div className={classes["form-header"]}>
        <h1>{!isSigningUp ? "Login" : "Sign Up"}</h1>
        <p>
          By loging in you accept the terms of usage{" "}
          <p>
            that can be found <Link to="/terms">here</Link>
          </p>
        </p>
      </div>
      <form>
        <Input name="Email" type="email" />
        <Input name="Password" type="password" />
        {isSigningUp && <Input name="Confirm Password" type="password" />}
      </form>
      <div className={classes["form-footer"]}>
        <p>Any problems? Contact us here:</p>
        <p>email@email.com</p>
        <div>
          <p></p>
          <Button className="small" onClick={handleLoginMode}>
            {!isSigningUp ? "Sign Up" : "Login"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
