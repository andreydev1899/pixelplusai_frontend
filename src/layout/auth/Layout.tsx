import { Outlet } from "react-router-dom";

import classes from "./Layout.module.css";

function AuthLayout() {
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.content}>
          <div className={classes.wrapper}>
            <Outlet />
          </div>
        </div>
        <div className={classes.back}>
          <div className={classes.text}>
            <h3>Need quick, efficient ad creation?</h3>
            <p>
              We've got you covered. Effortlessly create ads using AI with just
              a click. Ad creation has never been this easy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
