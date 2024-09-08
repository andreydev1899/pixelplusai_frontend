import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import FormControl from "@/components/common/FormControl";
import Logo from "@/components/common/Logo";
import Button from "@/components/forms/Button";
import { useAppSelector } from "@/store";

import classes from "./ForgotPassword.module.css";
import apiClient from "@/libs/api";

function UpdatePassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState<string>("");
  const [confirm, setConfirm] = useState<string>("");
  const forgotEmail = useAppSelector((state) => state.auth.forgotEmail);

  useEffect(() => {
    if (!forgotEmail) {
      navigate("/auth/forgot-password");
    }
  }, [forgotEmail]);

  const handleSubmitClick = () => {
    if (password !== confirm) {
      return toast.error("Password does not match.");
    }
    apiClient
      .post("/auth/reset/password", { email: forgotEmail, password })
      .then(() => {
        toast.success("Password changed successfully.");
        navigate("/auth/login");
      });
  };

  return (
    <div className={classes.root}>
      <Logo className={classes.logo} />
      <div className={classes.form}>
        <div className={classes.intro}>
          <p>Set a password</p>
          <span>
            Your previous password has been reset. Please set a new password for
            your account.
          </span>
        </div>
        <div className={classes.main}>
          <div className={classes.credentials}>
            <div className={classes.elements}>
              <FormControl
                type="password"
                name="password"
                label="Create Password"
                placeholder=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormControl
                type="password"
                name="confirm"
                label="Re-enter Password"
                placeholder=""
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
              />
            </div>
            <Button onClick={handleSubmitClick}>Submit</Button>
          </div>
        </div>
      </div>
      <p className={classes.contact}>
        Need help? <span>Contact Support</span>
      </p>
    </div>
  );
}

export default UpdatePassword;
