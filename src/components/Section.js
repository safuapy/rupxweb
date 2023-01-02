import React, { useEffect } from 'react';

function Section() {
  useEffect(() => {
    const { ethereum } = window;
    const apiKey = 'KEC1QE6SV74RE79FK35JMUYZAZCT5JE71C';
    const tokenAddress = '0xeA3d4D95D4294E9f69b78df381EAd248cc5D4F53';
    const tokenSymbol = 'RUPX';
    const tokenDecimals = 18;
    const tokenImage = 'https://assets.coingecko.com/coins/images/2656/large/Rupaya-coin.png';
    const bscScanApiUrl = `https://api.bscscan.com/api?module=contract&action=getcontractbyaddress&address=${tokenAddress}&apikey=${apiKey}`;

    async function watchAsset() {
      try {
        // Check if the token has already been added
        if (localStorage.getItem('tokenAdded') === 'true') {
          console.log('Token already added');
          return;
        }

        // Fetch total supply of RUPX from BscScan
        const response = await fetch(bscScanApiUrl);
        const data = await response.json();
        const totalSupply = data.result.TotalSupply;
        document.getElementById('total-supply').innerHTML = totalSupply;
        document.querySelector('.card-text').innerHTML = totalSupply;


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
        <><div className="row h-100">
      <div className="col-md-10 col-xl-8 text-center d-flex align-items-center mx-auto">
        <div>
          <h2 className="text-uppercase fw-bold mb-3">Empowering Digital Currency</h2>
          <p className="mb-4">Experience the power of digital currency with Rupaya. Secure and innovative, RUPX is the choice for a brighter financial future. Join us on Discord today!</p>
          <a href="https://pancakeswap.finance/swap?outputCurrency=0xeA3d4D95D4294E9f69b78df381EAd248cc5D4F53" className="btn btn-primary fs-5 py-2 px-4" type="button" title="Buy now on PancakeSwap">Buy on PancakeSwap</a>
          <a href="https://discord.gg/8tbvMQM" className="btn btn-outline-primary fs-5 py-2 px-4" type="button">Join Discord</a>
        </div>
      </div>
    </div><div className="container py-4 py-xl-5">
        <div className="row mb-5" style={{ color: 'var(--bs-card-cap-bg)', background: 'var(--bs-indigo)' }}>
          <div className="col-md-8 col-xl-6 text-center mx-auto">
            <h2 style={{ color: 'var(--bs-white)' }}>Tokenomics</h2>
            <p className="w-lg-50" style={{ color: 'var(--bs-yellow)' }}>We launched a BEP20 token and migrated all existing holders to it a year ago due to network issues. This allowed our holders to continue using and trading their tokens without interruption.</p>
          </div>
        </div>
        <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
          <div className="col">
            <div className="card">
              <div className="card-body p-4">
                <h4 className="card-title" style={{ color: 'var(--bs-blue)' }}>Circulating Supply</h4>
                <p className="card-text">totalSupply</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body p-4">
                <h4 className="card-title" style={{ color: 'var(--bs-indigo)' }}>Current Price</h4>
                <p className="card-text">currentPrice</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body p-4">
                <h4 className="card-title" style={{ color: 'var(--bs-orange)' }}>Current Holders</h4>
                <p className="card-text">totalHolders</p>

              </div>
            </div>
          </div>
        </div>
      </div></>

  );
}

export default Section;
