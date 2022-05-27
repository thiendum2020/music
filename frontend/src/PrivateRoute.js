import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const { isAuthenticated } = useSelector((state) => state.authReducer);

    return isAuthenticated ? children : <Navigate replace to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
