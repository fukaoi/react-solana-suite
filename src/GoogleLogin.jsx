import React from 'react';
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';
import { Button } from '@mui/material';

function GoogleAuthComponentLogin() {
  const login = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      console.log(codeResponse.access_token);
      const url =
        'https://people.googleapis.com/v1/people/me?personFields=names';
      const response = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          Authorization: `Bearer ${codeResponse.access_token}`,
        },
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      });
      console.log('#api response: ', await response.json());
    },
    // flow: 'auth-code',
    flow: 'implicit',
    scope: 'profile', // scopeはスペース区切り
  });

  return (
    <Button color="primary" onClick={login}>
      Google login
    </Button>
  );
}

export const GoogleLogin = () => {
  return (
    <GoogleOAuthProvider clientId="860591254016-k2sigb4juluhf1roq7bgjahkdsaln6vg.apps.googleusercontent.com">
      <GoogleAuthComponentLogin />
    </GoogleOAuthProvider>
  );
};
