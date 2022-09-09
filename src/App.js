import logo from './logo.svg';
import './App.css';
import {
  Metaplex,
  walletAdapterIdentity,
  bundlrStorage,
  WalletAdapterIdentityDriver,
} from '@metaplex-foundation/js';
import { useWallet } from '@solana/wallet-adapter-react';
import { useEffect } from 'react';
import { Keypair, Connection, clusterApiUrl } from '@solana/web3.js';


global.SignFunction = window.solana.signMessage;

const copySignMessage = async (message) => {
  console.log(global.SignFunction);
  const {signature} = await global.SignFunction(message); 
  return signature;
};

function App() {

  useEffect(() => {
    (async () => {
      await window.solana.connect();
      console.log('#before: ', window.solana);
      window.solana.signMessage = copySignMessage;
      console.log('#after: ', window.solana);
      const metaplex = new Metaplex(new Connection(clusterApiUrl('devnet')));
      metaplex.use(walletAdapterIdentity(window.solana));
      // metaplex.use(walletAdapterIdentity(wallet));
      metaplex.use(
        bundlrStorage({
          address: 'https://devnet.bundlr.network',
          providerUrl: 'https://api.devnet.solana.com',
          timeout: 60000,
        })
      );

      const res = await metaplex
        .nfts()
        .uploadMetadata({
          name: 'test',
          // description: 'My Description',
          image:
            'https://images.ctfassets.net/hrltx12pl8hq/4f6DfV5DbqaQUSw0uo0mWi/6fbcf889bdef65c5b92ffee86b13fc44/shutterstock_376532611.jpg?fit=fill&w=800&h=300',
        })
        .run();
      console.log(res.uri);
    })();
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
