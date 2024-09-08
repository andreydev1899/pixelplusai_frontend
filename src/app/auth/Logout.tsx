import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "@/store";
import { setUserAuth } from "@/store/slices";

function Logout() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setUserAuth(false));
    navigate("/");
  }, []);

  return <></>;
}

export default Logout;
