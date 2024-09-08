import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import Sidebar from "./Sidebar";
import Header from "./Header";

import { useAppSelector } from "@/store";

import classes from "./Layout.module.css";

function MainLayout() {
  const navigate = useNavigate();
  const isAuth = useAppSelector((state) => state.auth.isAuth);

  useEffect(() => {
    if (!isAuth) {
      navigate("/auth");
    }
  }, [isAuth]);

  return (
    <div className={classes.root}>
      <Sidebar />
      <div className={classes.content}>
        <Header />
        <div className={classes.main}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
