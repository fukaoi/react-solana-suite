import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { Metaplex } from '@solana-suite/nft';
// import { Airdrop, KeypairStr } from '@solana-suite/core';

// console.log(new TextEncoder());

// const owner = KeypairStr.create();
// const feePayer = KeypairStr.create();

// (async () => {
//   // Airdrop.request(feePayer.toPublicKey()).then(async (_) => {
//   const inst1 = await Metaplex.mint(
//     {
//       filePath: './logo.svg',
//       name: 'sample',
//       symbol: 'SAMPLE',
//       royalty: 7,
//       storageType: 'nftStorage',
//     },
//     owner.toPublicKey(),
//     feePayer.toKeypair()
//   );

//   (await inst1.submit()).match(
//     async (value) => await Node.confirmedSig(value, 'finalized'),
//     (error) => console.error(error)
//   );
// })();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
