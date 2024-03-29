import PropTypes from "prop-types"; // Use prop-types import
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useEffect } from "react";

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired, // Any React node
};

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated) {
        toast.error("Please login to access this page.");
        navigate("/");
      }
    },
    [isAuthenticated, navigate],
  );

  return isAuthenticated ? children : null;
}

export default ProtectedRoute;