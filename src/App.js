import { Metaplex } from '@solana-suite/nft';
import { Sortable } from '@solana-suite/core';
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

// const demoOwner = 'Hh7nDDB8nNY2QcQLHG5SdVKXd6Q3ZpiT5CBxnxCxjkDp';
// const demoSecret =
//   '4GXGESeUqw75z9iUyvUrFoCFMMRaDaS3XXKsuVcQJEcd2wGFgUcqVivtNAJmZ7o3KbmzsRaBLTVs48rXXaA7mSeE';
// const demoPayer = 'H7WEabRV8vvCJxK8forAUfeXunoYpWFbhewGj9eC4Pj8';
// const demoPayerSecret =
//   '4DRpsEkwfAMc7268urkNu2AFC4tweXTLJArwXG9LGvjqcFUoy9mqmBZHLhf2yHEbj3AgrjVppEBQ5hfBTnDzLVSA';
//
// const demoInput = {
//   name: 'name',
//   symbol: 'VE',
//   royalty: 5,
//   uri: 'https://ipfs.io/ipfs/bafkreiczvsz3siw62qium44l27nm24lg5foftpogjyav23fdbvrltrewrm',
// };
//
// (async () => {
//   const inst = await Metaplex.feePayerPartialSignMint(
//     demoOwner,
//     demoSecret,
//     demoInput,
//     demoPayer
//   );
//   console.log(inst);
//
//   const res = await inst.unwrap().submit(demoPayerSecret);
//   console.log(res.unwrap().toExplorerUrl());
// })();

const NftContents = ({ value }) => {
  let dateTime = '';
  if (value.dateTime) {
    dateTime = value.dateTime.toString();
  } else {
    dateTime = '';
  }
  return (
    <Grid item xs={3}>
      <div>
        {value.name}/{dateTime}
      </div>
      <div>
        <a href={value.mint.toExplorerUrl()} target="_blank">
          <img
            src={value.offchain.image}
            alt={value.mint}
            height={100}
            width={100}
          />
        </a>
      </div>
    </Grid>
  );
};

function App() {
  const [histories, setHistories] = useState([]);
  const owner = 'CGDRajhcFo9ysuUjBsbwCQHKJuCHiXeEUrMKSot1eyay';

  useEffect(() => {
    Metaplex.findByOwner(
      owner,
      (arrs) => {
        setHistories(arrs.unwrap());
      },
      // {
      //   sortable: Sortable.Desc,
      //   isHolder: true,
      // }
    );
  }, []);

  console.log(histories);
  return (
    <>
      <h1>Solana Suite Demo</h1>
      <Paper>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {histories.length > 1 &&
              histories.map((history) => {
                return <NftContents value={history} />;
              })}
          </Grid>
        </Box>
      </Paper>
    </>
  );
}

export default App;
