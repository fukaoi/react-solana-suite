import { Metaplex } from '@solana-suite/nft';
import { Sortable, SplToken } from '@solana-suite/core';
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Card } from '@mui/material';

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

const Contents = ({ value }) => {
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

const FetchNft = () => {
  const [nftHistories, setNftHistories] = useState([]);
  const [tokenHistories, setTokenHistories] = useState([]);
  const owner = 'CGDRajhcFo9ysuUjBsbwCQHKJuCHiXeEUrMKSot1eyay';

  useEffect(() => {
    Metaplex.findByOwner(
      owner,
      (arrs) => {
        setNftHistories(arrs.unwrap());
      }
      // {
      //   sortable: Sortable.Desc,
      //   isHolder: true,
      // }
    );
    SplToken.findByOwner(
      owner,
      (arrs) => {
        setTokenHistories(arrs.unwrap());
      }
      // {
      //   sortable: Sortable.Desc,
      //   isHolder: true,
      // }
    );
  }, []);

  console.log(nftHistories);
  console.log(tokenHistories);
  return (
    <>
      <h1>Solana Suite Demo</h1>
      <Paper>
        <Card>
          <h3>NFT</h3>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              {nftHistories.length > 1 &&
                nftHistories.map((history) => {
                  return <Contents value={history} />;
                })}
            </Grid>
          </Box>
        </Card>
        <Card>
          <h3>Token</h3>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              {tokenHistories.length > 1 &&
                tokenHistories.map((history) => {
                  return <Contents value={history} />;
                })}
            </Grid>
          </Box>
        </Card>
      </Paper>
    </>
  );
};

export default FetchNft;
