import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import AuthLayout from "@/layout/auth/Layout";
import MainLayout from "@/layout/main/Layout";

import Login from "@/app/auth/Login";
import Register from "@/app/auth/Register";
import ForgotPassword from "@/app/auth/ForgotPassword";
import Verification from "@/app/auth/Verification";
import UpdatePassword from "@/app/auth/UpdatePassword";
import Logout from "@/app/auth/Logout";

function AppRoutes() {
  const location = useLocation();

  return (
    <Routes key={location.pathname}>
      <Route path="auth" element={<AuthLayout />}>
        <Route index element={<Navigate to={"login"} />} />
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<Register />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="verification" element={<Verification />} />
        <Route path="update-password" element={<UpdatePassword />} />
      </Route>
      <Route path="" element={<MainLayout />}>
        <Route index element={<Navigate to="" />} />
        <Route path="" element={<></>} />
        <Route path="/clients" element={<></>} />
        <Route path="/assets" element={<></>} />
        <Route path="/history" element={<></>} />
        <Route path="/help-center" element={<></>} />
        <Route path="/notifications" element={<></>} />
        <Route path="/settings" element={<></>} />
        <Route path="/logout" element={<Logout />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
