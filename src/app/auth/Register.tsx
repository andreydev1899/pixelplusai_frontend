import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { toast } from "react-hot-toast";
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
import { useAppDispatch } from "@/store";
import { setUserAuth, setUserProfile } from "@/store/slices";
import apiClient from "@/libs/api";
import { setupToken } from "@/libs/token";

import classes from "./Register.module.css";

interface CreateUserDto {
  email: string;
  password: string;
}

const defaultValues: CreateUserDto = {
  email: "",
  password: "",
};

function Register() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [isPassShown, setIsPassShown] = useState<boolean>(false);
  const [createUser, setCreateUser] = useState<CreateUserDto>(defaultValues);
  const [agreeCheck, setAgreeCheck] = useState<boolean>(false);

  const handleUserChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCreateUser({ ...createUser, [e.target.name]: e.target.value });
  };

  const handleRegisterClick = () => {
    apiClient.post("/auth/email/register", createUser).then(() => {
      toast.success("Signup success!");
      navigate("/auth/login");
    });
  };

  const handleGoogleLoginSuccess = (tokenResponse: any) => {
    const { access_token } = tokenResponse;
    apiClient
      .post("/auth/google/register", { accessToken: access_token })
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
                name="email"
                label="Email"
                placeholder="john.doe@gmail.com"
                startAdornment={
                  <FaRegEnvelope size={16} className="text-primary-text" />
                }
                value={createUser.email}
                onChange={handleUserChange}
              />
              <FormControl
                type="text"
                name="organization"
                label="Organization Name"
                placeholder="BuzzBuild"
                startAdornment={
                  <FaRegBuilding size={16} className="text-primary-text" />
                }
              />
              <FormControl
                type={isPassShown ? "text" : "password"}
                name="password"
                label="Password"
                value={createUser.password}
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
                onChange={handleUserChange}
              />
              <div className={classes.tos}>
                <Checkbox
                  label={
                    <>
                      I agree to all the <span>Terms</span> and{" "}
                      <span>Privacy Policies</span>
                    </>
                  }
                  checked={agreeCheck}
                  onCheck={setAgreeCheck}
                />
              </div>
            </div>
            <Button onClick={handleRegisterClick} disabled={!agreeCheck}>
              Create Account
            </Button>
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

export default Register;
