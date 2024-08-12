import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes() {
  const isUserAuth = false;
  if (!isUserAuth) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
}

export default PrivateRoutes;
