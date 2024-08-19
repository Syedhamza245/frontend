import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear user token or session data
    localStorage.removeItem('token'); // Assuming token is stored in localStorage

    // Optionally, you can make an API call to the backend to invalidate the session on the server side

    // Redirect to login page or home page
    navigate('/signin');
  }, [navigate]);

  return (
    <div>
      <h2>Logging out...</h2>
    </div>
  );
};

export default Logout;
