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
    <div className="container h-100">
      <div className="text-white bg-primary border rounded border-0 p-4 py-5">
        <div className="row h-100">
          <div className="col-md-10 col-xl-8 text-center d-flex d-sm-flex d-md-flex justify-content-center align-items-center mx-auto justify-content-md-start align-items-md-center justify-content-xl-center">
            <div>
              <h1 className="text-uppercase fw-bold text-white mb-3">Experience the Power of Rupaya</h1>
              <p className="mb-4" style={{fontFamily: "'Anek Devanagari', sans-serif", textAlign: "center"}}>
                Welcome to Rupaya, the cryptocurrency that is revolutionizing the way we transact online. With fast and secure transactions, low fees, and a dedicated community of users, Rupaya is the perfect choice for anyone looking to make the most of their digital assets. Whether you're a seasoned cryptocurrency investor or new to the world of digital currency, Rupaya has something to offer you. So why wait? Join the Rupaya community today and discover the power of our innovative cryptocurrency.
              </p>
              <a href="https://discord.gg/8tbvMQM">
                <button className="btn btn-light fs-5 py-2 px-4" type="button">Join Discord</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
