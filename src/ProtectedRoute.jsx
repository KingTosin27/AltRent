import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

/**
 * Wrap any dashboard route with this. `allowedRoles` is the list of
 * profile roles permitted to view it, e.g. <ProtectedRoute allowedRoles={['admin']}>.
 *
 * - Not logged in            -> redirect to /login
 * - Logged in, wrong role    -> redirect to their own dashboard (not a 403 page,
 *                               since a confused redirect is friendlier than a dead end)
 * - Still checking session   -> render nothing yet (avoids a flash of wrong content)
 */
const ProtectedRoute = ({ allowedRoles, children }) => {
  const { user, role, loading } = useAuth();

  if (loading) return null;

  if (!user) return <Navigate to="/login" replace />;

  if (allowedRoles && !allowedRoles.includes(role)) {
    return <Navigate to={`/${role}`} replace />;
  }

  return children;
};

export default ProtectedRoute;
