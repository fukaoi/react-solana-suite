import React, { useEffect, useState } from 'react';
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';
import { Button } from '@mui/material';

function GoogleAuthComponentLogin() {
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => console.log(codeResponse), // 認証コードを取得
    flow: 'auth-code',
    scope: 'email profile openid', // scopeはスペース区切り
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
