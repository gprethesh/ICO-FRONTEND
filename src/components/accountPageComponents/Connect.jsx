import React, { useContext } from "react";

import { WalletContext } from "../../routing/Routing";

import MetaMask_Fox from "../../assets/images/MetaMask_Fox.svg";

const Connect = () => {
  const { connectWallet, connectWallet2 } = useContext(WalletContext);

  return (
    <>
      <div className="container mx-auto accoint_content_bar">
        <div
          className="flex flex-col max-w-md p-6 rounded-md sm:p-10"
          style={{
            background: "linear-gradient(to right, #028D8D, #02B38D, #028D8D)",
          }}
        >
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Sign in</h1>
            <p className="text-sm dark:text-gray-400">Connect your Metamask</p>
          </div>
          <div className="space-y-12">
            <div className="space-y-2">
              <div>
                <button
                  type="button"
                  className="flex items-center bg-blue-500 hover:bg-blue-700 text-white w-full px-8 py-3 font-semibold rounded-md"
                  onClick={connectWallet2} // Added onClick event handler
                >
                  <div className="flex-grow text-center">Connect</div>
                  <img
                    className="ml-auto"
                    alt="MetaMask_Fox"
                    src={MetaMask_Fox}
                    width="40px"
                  />
                </button>
              </div>
              <p className="px-6 text-sm text-center">
                You need to connect with Metamask to access this section
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Connect;
