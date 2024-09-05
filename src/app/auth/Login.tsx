import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegEnvelope, FaMicrosoft, FaGoogle } from "react-icons/fa6";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { MdOutlineLock } from "react-icons/md";

import FormControl from "@/components/common/FormControl";
import Logo from "@/components/common/Logo";
import Button from "@/components/forms/Button";
import Checkbox from "@/components/forms/Checkbox";

import classes from "./Login.module.css";

function Login() {
  const navigate = useNavigate();

  const [isPassShown, setIsPassShown] = useState<boolean>(false);

  return (
    <div className={classes.root}>
      <Logo className={classes.logo} />
      <div className={classes.form}>
        <div className={classes.intro}>
          <p>Welcome Back!</p>
          <span>
            Unlock the power of AI-driven advertising with PixelPlus – where
            innovation meets automation.
          </span>
        </div>
        <div className={classes.main}>
          <div className={classes.credentials}>
            <div className={classes.elements}>
              <FormControl
                type="email"
                label="Email"
                placeholder="john.doe@gmail.com"
                startAdornment={
                  <FaRegEnvelope size={14} className="text-primary-text" />
                }
              />
              <FormControl
                type={isPassShown ? "text" : "password"}
                label="Password"
                defaultValue="123456"
                startAdornment={
                  <MdOutlineLock size={16} className="text-primary-text" />
                }
                endAdornment={
                  !isPassShown ? (
                    <FaRegEyeSlash
                      onClick={() => {
                        setIsPassShown(true);
                      }}
                      className="text-primary-text"
                    />
                  ) : (
                    <FaRegEye
                      onClick={() => {
                        setIsPassShown(false);
                      }}
                      className="text-primary-text"
                    />
                  )
                }
              />
              <div className={classes.remember}>
                <Checkbox label="Remember me" />
                <p
                  onClick={() => {
                    navigate("/auth/forgot-password");
                  }}
                >
                  Forgot password?
                </p>
              </div>
            </div>
            <Button>Login</Button>
            <p className={classes.signup}>
              Don't have an account?{" "}
              <span
                onClick={() => {
                  navigate("/auth/sign-up");
                }}
              >
                Sign up
              </span>
            </p>
          </div>

          <p className={classes.divider}>OR</p>
          <div className={classes.buttons}>
            <Button variant="outlined">
              <span>
                <FaMicrosoft size={24} />
              </span>
              Continue with Microsoft
            </Button>
            <Button variant="outlined">
              <span>
                <FaGoogle size={24} />
              </span>
              Continue with Google
            </Button>
          </div>
        </div>
      </div>
      <p className={classes.contact}>
        Need help? <span>Contact Support</span>
      </p>
    </div>
  );
}

export default Login;
