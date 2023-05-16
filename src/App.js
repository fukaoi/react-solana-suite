import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { GoogleLogin } from './GoogleLogin';
import FetchNft from './FetchNft';

const App = () => {
  return (
    <>
      <Link to="/nft">Nft</Link>
      <br />
      <Link to="/login">Login</Link>
      <Routes>
        <Route path="/nft" element={<FetchNft />} />
        <Route path="/login" element={<GoogleLogin />} />
      </Routes>
    </>
  );
};

export default App;
