import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const PvtRoute = ({ children }) => {
  const { user, loadind } = useContext(AuthContext);
  const location = useLocation();
  if (loadind) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  if (user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login" replace></Navigate>;
};

export default PvtRoute;
