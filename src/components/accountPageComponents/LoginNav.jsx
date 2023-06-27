import React, { useContext, useState, useEffect } from "react";
import { WalletContext } from "../../routing/Routing";

const LoginNav = () => {
  const [userAddress, setUserAddress] = useState();
  const [openToggle, setOpenToggle] = useState(false);
  const {
    connectWallet,
    disconnectWallet,
    connected,
    account,
    userSign,
    userProvider,
  } = useContext(WalletContext);

  const getStatus = async () => {
    const signer = userProvider.getSigner();

    const address = await signer.getAddress();

    setUserAddress(address);
  };

  useEffect(() => {
    if (connected) {
      getStatus();
    }
  }, [connected]);

  return (
    <>
      {" "}
      <div className="hidden lg:block">
        {connected ? (
          <div className="auth-button mx-4 text-base font-extrabold capitalize leading-[16px]">
            {userAddress} - Bsc network
          </div>
        ) : (
          <button
            className="grad_button  custom-btn-hover auth-button mx-4 text-base font-extrabold capitalize leading-[16px]"
            onClick={connectWallet}
          >
            Connect MetaMask
          </button>
        )}
      </div>
      <div className="block sm:block md:block lg:hidden xl:hidden">
        {connected ? (
          <div className="auth-button mx-2 text-sm sm:text-sm md:text-base lg:text-base xl:text-base font-extrabold capitalize leading-[14px] sm:leading-[16px] md:leading-[18px] lg:leading-[20px] xl:leading-[22px] overflow-hidden">
            {userAddress
              ? `${userAddress.slice(0, 6)}...${userAddress.slice(-4)}`
              : "Loading..."}{" "}
            - Bsc network
          </div>
        ) : (
          <button
            className="grad_button text-sm sm:text-sm md:text-base lg:text-base xl:text-base ml-4 mr-4"
            onClick={connectWallet}
          >
            Connect MetaMask
          </button>
        )}
      </div>
      <span></span>
    </>
  );
};

export default LoginNav;
