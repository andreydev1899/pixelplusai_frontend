import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { toast } from "react-hot-toast";
import { FaRegEnvelope } from "react-icons/fa6";

import FormControl from "@/components/common/FormControl";
import Logo from "@/components/common/Logo";
import Button from "@/components/forms/Button";

import classes from "./ForgotPassword.module.css";
import { useState } from "react";
import apiClient from "@/libs/api";
import { useAppDispatch } from "@/store";
import { setForgotEmail } from "@/store/slices";

function ForgotPassword() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState<string>("");

  const handleSubmitClick = () => {
    dispatch(setForgotEmail(email));
    apiClient.post("/auth/forgot/password", { email }).then(() => {
      toast.success(`Verification code sent to ${email}`);
      navigate("/auth/verification");
    });
  };

  return (
    <div className={classes.root}>
      <Logo className={classes.logo} />
      <div className={classes.form}>
        <div className={classes.intro}>
          <p>Forgot your password?</p>
          <span>
            Don’t worry, happens to all of us. Enter your email below to recover
            your password
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <Button onClick={handleSubmitClick}>Submit</Button>
            <p
              className={classes.backToPage}
              onClick={() => {
                navigate("/auth/forgot-password");
              }}
            >
              <span>
                <ChevronLeftIcon fontSize={12} />
              </span>
              Back to page
            </p>
          </div>
        </div>
      </div>
      <p className={classes.contact}>
        Need help? <span>Contact Support</span>
      </p>
    </div>
  );
}

export default ForgotPassword;
