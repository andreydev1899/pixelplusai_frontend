import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";

import FormControl from "@/components/common/FormControl";
import Logo from "@/components/common/Logo";
import Button from "@/components/forms/Button";

import classes from "./ForgotPassword.module.css";

function UpdatePassword() {
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
                label="Create Password"
                placeholder=""
              />
              <FormControl
                type="password"
                label="Re-enter Password"
                placeholder=""
              />
            </div>
            <Button>Submit</Button>
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
