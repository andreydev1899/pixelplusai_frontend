import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaRegEnvelope,
  FaRegBuilding,
  FaMicrosoft,
  FaGoogle,
} from "react-icons/fa6";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { MdOutlineLock } from "react-icons/md";

import FormControl from "@/components/common/FormControl";
import Logo from "@/components/common/Logo";
import Button from "@/components/forms/Button";
import Checkbox from "@/components/forms/Checkbox";

import classes from "./Register.module.css";

function Register() {
  const navigate = useNavigate();

  const [isPassShown, setIsPassShown] = useState<boolean>(false);

  return (
    <div className={classes.root}>
      <Logo className={classes.logo} />
      <div className={classes.form}>
        <div className={classes.intro}>
          <p>Start using PixelPlusAI today!</p>
          <span>
            Join PIXELPLUS AI and effortlessly create high-impact ads with just
            a few clicks.
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
                  <FaRegEnvelope size={16} className="text-primary-text" />
                }
              />
              <FormControl
                type="text"
                label="Organization Name"
                placeholder="BuzzBuild"
                startAdornment={
                  <FaRegBuilding size={16} className="text-primary-text" />
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
                  isPassShown ? (
                    <FaRegEyeSlash
                      onClick={() => {
                        setIsPassShown(false);
                      }}
                      className="text-primary-text"
                    />
                  ) : (
                    <FaRegEye
                      onClick={() => {
                        setIsPassShown(true);
                      }}
                      className="text-primary-text"
                    />
                  )
                }
              />
              <div className={classes.tos}>
                <Checkbox
                  label={
                    <>
                      I agree to all the <span>Terms</span> and{" "}
                      <span>Privacy Policies</span>
                    </>
                  }
                />
              </div>
            </div>
            <Button>Create Account</Button>
            <p className={classes.login}>
              Already have an account?{" "}
              <span
                onClick={() => {
                  navigate("/auth/login");
                }}
              >
                Login
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

export default Register;
