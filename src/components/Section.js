import React, { useEffect } from 'react';


function Section() {
  useEffect(() => {
    const { ethereum } = window
    const tokenAddress = '0xeA3d4D95D4294E9f69b78df381EAd248cc5D4F53';
    const tokenSymbol = 'RUPX';
    const tokenDecimals = 18;
    const tokenImage = 'https://assets.coingecko.com/coins/images/2656/large/Rupaya-coin.png';

    async function watchAsset() {
      try {
        // Check if the token has already been added
        if (localStorage.getItem('tokenAdded') === 'true') {
          console.log('Token already added');
          return;
        }

        // wasAdded is a boolean. Like any RPC method, an error may be thrown.
        const wasAdded = await ethereum.request({
          method: 'wallet_watchAsset',
          params: {
            type: 'ERC20', // Initially only supports ERC20, but eventually more!
            options: {
              address: tokenAddress, // The address that the token is at.
              symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
              decimals: tokenDecimals, // The number of decimals in the token
              image: tokenImage, // A string url of the token logo
            },
          },
        });

        if (wasAdded) {
          console.log('Thanks for your interest!');
          localStorage.setItem('tokenAdded', 'true');
        } else {
          console.log('Your loss!');
        }
      } catch (error) {
        console.log(error);
      }
    }

    watchAsset();
  }, []);

  return (
<section class="py-4 py-xl-5">
    <div class="container h-100">
        <div class="row h-100">
            <div class="col-md-10 col-xl-8 text-center d-flex d-sm-flex d-md-flex justify-content-center align-items-center mx-auto justify-content-md-start align-items-md-center justify-content-xl-center">
                <div>
                    <h2 class="text-uppercase fw-bold mb-3">Empowering Digital Currency</h2>
                    <p class="mb-4">Experience the power of digital currency with Rupaya. Secure and<br />innovative, RUPX is the choice for a brighter financial future. Join us<br />on Discord today!</p>
                    <a href="https://pancakeswap.finance/swap?outputCurrency=0xeA3d4D95D4294E9f69b78df381EAd248cc5D4F53" class="btn btn-primary fs-5 me-2 py-2 px-4" type="button" title="Buy on PancakeSwap">Buy on PancakeSwap</a>
                    <a href="https://discord.gg/8tbvMQM" class="btn btn-outline-primary fs-5 py-2 px-4" type="button">Join Discord</a>
                </div>
            </div>
        </div>
    </div>
</section>


  );
}

export default Section;
