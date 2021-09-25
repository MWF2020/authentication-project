import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <button onClick={() => logout()}>
        Log Out
      </button>
    )
  )
}

<<<<<<< HEAD
export default LogoutButton
=======
export default LogoutButton
>>>>>>> 3519d6b0043b956ae2abd512bcbcd4943fe57145
