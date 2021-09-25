import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button onClick={() => loginWithRedirect()}>
        Log In
      </button>
    )
  )
}

<<<<<<< HEAD
export default LoginButton
=======
export default LoginButton
>>>>>>> 3519d6b0043b956ae2abd512bcbcd4943fe57145
