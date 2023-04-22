import { Metaplex } from '@solana-suite/nft';

const demoOwner = 'Hh7nDDB8nNY2QcQLHG5SdVKXd6Q3ZpiT5CBxnxCxjkDp';
const demoSecret =
  '4GXGESeUqw75z9iUyvUrFoCFMMRaDaS3XXKsuVcQJEcd2wGFgUcqVivtNAJmZ7o3KbmzsRaBLTVs48rXXaA7mSeE';
const demoPayer = 'H7WEabRV8vvCJxK8forAUfeXunoYpWFbhewGj9eC4Pj8';
const demoPayerSecret =
  '4DRpsEkwfAMc7268urkNu2AFC4tweXTLJArwXG9LGvjqcFUoy9mqmBZHLhf2yHEbj3AgrjVppEBQ5hfBTnDzLVSA';

const demoInput = {
  name: 'name',
  symbol: 'VE',
  royalty: 5,
  uri: 'https://ipfs.io/ipfs/bafkreiczvsz3siw62qium44l27nm24lg5foftpogjyav23fdbvrltrewrm',
};

(async () => {
  const inst = await Metaplex.feePayerPartialSignMint(
    demoOwner,
    demoSecret,
    demoInput,
    demoPayer
  );
  console.log(inst);

  const res = await inst.unwrap().submit(demoPayerSecret);
  console.log(res.unwrap().toExplorerUrl());
})();

function App() {
  return <div className="App"></div>;
}

export default App;
