import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Header from "./Header";

import classes from "./Layout.module.css";

function MainLayout() {
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
