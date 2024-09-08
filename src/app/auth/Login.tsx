import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { toast } from "react-hot-toast";
import { FaRegEnvelope, FaMicrosoft, FaGoogle } from "react-icons/fa6";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { MdOutlineLock } from "react-icons/md";

import FormControl from "@/components/common/FormControl";
import Logo from "@/components/common/Logo";
import Button from "@/components/forms/Button";
import Checkbox from "@/components/forms/Checkbox";
import { useAppDispatch } from "@/store";
import { setUserAuth, setUserProfile } from "@/store/slices";
import apiClient from "@/libs/api";
import { setupToken } from "@/libs/token";

import classes from "./Login.module.css";

interface LoginUserDto {
  email: string;
  password: string;
}

const defaultValues: LoginUserDto = {
  email: "",
  password: "",
};

function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [isPassShown, setIsPassShown] = useState<boolean>(false);
  const [loginUser, setLoginUser] = useState<LoginUserDto>(defaultValues);

  const handleUserChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginUser({ ...loginUser, [e.target.name]: e.target.value });
  };

  const handleLoginClick = () => {
    apiClient.post("/auth/email/login", loginUser).then((response: any) => {
      const { refreshToken, token, user } = response;
      // const { status } = user;
      // if (status.name === "Active") {
      toast.success("Login success.");
      setupToken({ accessToken: token, refreshToken });
      dispatch(setUserAuth(true));
      dispatch(setUserProfile(user));
      navigate("/");
      // } else {
      //   toast.error("Please wait for the approve.");
      // }
    });
  };

  const handleGoogleLoginSuccess = (tokenResponse: any) => {
    const { access_token } = tokenResponse;
    apiClient
      .post("/auth/google/login", { accessToken: access_token })
      .then((response: any) => {
        const { refreshToken, token, user } = response;
        // const { status } = user;
        // if (status.name === "Active") {
        toast.success("Login success.");
        setupToken({ accessToken: token, refreshToken });
        dispatch(setUserAuth(true));
        dispatch(setUserProfile(user));
        navigate("/");
        // } else {
        //   toast.error("Please wait for the approve.");
        // }
      });
  };

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: handleGoogleLoginSuccess,
  });

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
                name="email"
                label="Email"
                placeholder="john.doe@gmail.com"
                value={loginUser.email}
                startAdornment={
                  <FaRegEnvelope size={14} className="text-primary-text" />
                }
                onChange={handleUserChange}
              />
              <FormControl
                type={isPassShown ? "text" : "password"}
                name="password"
                label="Password"
                defaultValue="123456"
                value={loginUser.password}
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
                onChange={handleUserChange}
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
            <Button onClick={handleLoginClick}>Login</Button>
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
            <Button variant="outlined" onClick={handleGoogleLogin}>
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
