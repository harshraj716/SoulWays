import React, { useEffect, useRef } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-hot-toast';
import Spinner from './Spinner'; // Ensure the path is correct

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth(); 
  const toastShown = useRef(false);

  useEffect(() => {
    if (!toastShown.current && !user && !loading) {
      toast.error('You need to log in to access this page', {
        icon: '🔒',
      });
      toastShown.current = true;
    }
  }, [user, loading]); 

  if (loading) {
    return <Spinner />; 
  }
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
