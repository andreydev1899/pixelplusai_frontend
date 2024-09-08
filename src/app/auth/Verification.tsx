import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";

import FormControl from "@/components/common/FormControl";
import Logo from "@/components/common/Logo";
import Button from "@/components/forms/Button";

import classes from "./Verification.module.css";

function Verification() {
  const navigate = useNavigate();

  return (
    <div className={classes.root}>
      <Logo className={classes.logo} />
      <div className={classes.form}>
        <div className={classes.intro}>
          <p>Verify code</p>
          <span>An authentication code has been sent to your email.</span>
        </div>
        <div className={classes.main}>
          <div className={classes.credentials}>
            <div className={classes.elements}>
              <FormControl
                type="text"
                label="Enter Code"
                placeholder="DGF2541D"
              />
              <p>
                Didn’t receive a code? <span>Resend</span>
              </p>
            </div>
            <Button
              onClick={() => {
                navigate("/auth/update-password");
              }}
            >
              Verify
            </Button>
            <p
              className={classes.backToPage}
              onClick={() => {
                navigate("");
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

export default Verification;
