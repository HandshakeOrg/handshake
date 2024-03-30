import PropTypes from 'prop-types'; // Use prop-types import
// import { toast } from 'react-toastify';

import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
function ProtectedRoute({ element }) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  return isAuthenticated ? (
    element
  ) : (
    <Navigate to='/login' state={{ from: location.pathname }} replace />
  );
}

ProtectedRoute.propTypes = {
  element: PropTypes.element.isRequired,
};

export default ProtectedRoute;
