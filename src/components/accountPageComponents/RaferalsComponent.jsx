import { useContext, useState, useEffect } from "react";
import { FaUserFriends, FaEnvelopeOpen, FaLink, FaCopy } from "react-icons/fa";
import Connect from "./Connect";
import { WalletContext } from "../../routing/Routing";
import { abi as contractAbi } from "./ICOCrowdsale.json";
import { ethers } from "ethers";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CONTRACT_ADDRESS = import.meta.env.VITE_APP_CONTRACT_ADDRESS;
const DOMAIN_URL = import.meta.env.VITE_APP_DOMAIN_URL;
const bscScanUrl = import.meta.env.VITE_APP_BSCSCANURL;
const API_URL = import.meta.env.VITE_APP_API_URL;
const YourApiKeyToken = import.meta.env.VITE_APP_YOURAPIKEYTOKEN;

export default function RaferalsComponent() {
  const [rewardRef, setRewardRef] = useState();
  const [dallarValue, setDollarValue] = useState();
  const [userAddress, setUserAddress] = useState();
  const [transactionHistory, setTransactionHistory] = useState([]);

  const [isCopied, setIsCopied] = useState(false);
  const referralLink = `${DOMAIN_URL}/?ref=${userAddress}`;

  // console.log(
  //   CONTRACT_ADDRESS,
  //   DOMAIN_URL,
  //   bscScanUrl,
  //   API_URL,
  //   YourApiKeyToken
  // );

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
  };

  const {
    connectWallet,
    disconnectWallet,
    connected,
    account,
    userSign,
    userProvider,
  } = useContext(WalletContext);

  const getRewardInfo = async () => {
    const contract = new ethers.Contract(
      CONTRACT_ADDRESS,
      contractAbi,
      userProvider
    );

    const signer = userProvider.getSigner();

    const address = await signer.getAddress();

    setUserAddress(address);

    const referralRewards = await contract.referralRewards(address);

    const data = ethers.utils.formatEther(referralRewards);

    setRewardRef(data);
    const rewardDollarValue = data * 0.004;

    setDollarValue(rewardDollarValue);
  };

  getRewardInfo();

  async function claimRewards() {
    if (userProvider) {
      const signer = userProvider.getSigner();
    } else {
    }
    // Initialize a new ethers.js contract instance
    const contract = new ethers.Contract(
      CONTRACT_ADDRESS,
      contractAbi,
      userSign
    );

    try {
      const receipt = await contract.claimRewards();

      successToast(receipt.hash);
    } catch (error) {
      if (error.reason) {
        errorToast(error.reason);
      } else {
        console.error(error);
      }
    }
  }

  const getTanscations = async () => {
    const accountAddress = await userSign.getAddress();

    const url = `${API_URL}/api?module=account&action=txlist&address=${accountAddress}&startblock=0&endblock=99999999&sort=desc&apikey=${YourApiKeyToken}`;

    try {
      const response = await axios.get(url);
      const transactions = response.data.result;

      const methodId = ethers.utils.id("claimRewards()").substring(0, 10);

      const filteredTransactions = transactions.filter((tx) =>
        tx.input.startsWith(methodId)
      );

      setTransactionHistory(filteredTransactions);
    } catch (error) {
      console.error(`Error getting transactions:`, error);
    }
  };

  useEffect(() => {
    if (connected) {
      getTanscations();
      getRewardInfo();
    }
  }, [connected]);

  const successToast = (hash) => {
    toast.success(
      ({ closeToast }) => (
        <div>
          Transaction successful!
          <br />
          <a
            href={`${bscScanUrl}/tx/${hash}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeToast}
            style={{ color: "blue" }}
          >
            Check on Explorer
          </a>
        </div>
      ),
      {
        position: "top-right",
        autoClose: 8000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      }
    );
  };

  const errorToast = (message) => {
    toast.error(
      ({ closeToast }) => (
        <div>
          Transaction failed!
          <br />
          {message}
        </div>
      ),
      {
        position: "top-right",
        autoClose: 8000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      }
    );
  };
  return (
    <>
      {connected ? (
        <>
          {" "}
          <div className="container mx-auto accoint_content_bar">
            <div
              className="acc_window one_ls aos-init aos-animate w-full md:w-1/2 xl:w-1/3"
              data-aos="zoom-in"
            >
              <div>
                <div className="name_page">TetherSwap Referral Program</div>
              </div>
              <div
                className="flex_colum reff_prog"
                style={{
                  background:
                    "linear-gradient(to right, #028D8D, #02B38D, #028D8D)",
                }}
              >
                Unleash the power of social networks and friendships! Share your
                unique referral link far and wide, and watch the rewards roll
                in! For every purchase made by your referred friends, you'll
                earn a whopping 10%! It's an opportunity not to be missed.
                (Note: The Airdrop is not applicable for our referral program).
                Start sharing, start earning!
              </div>
            </div>

            {/*  */}
            <div
              className="acc_window one_ls aos-init aos-animate"
              data-aos="zoom-in"
            >
              <div>
                <div className="name_page">information</div>
              </div>
              <div
                className="flex_colum"
                style={{
                  background:
                    "linear-gradient(to right, #028D8D, #02B38D, #028D8D)",
                }}
              >
                <div className="profile_info profit_inf">
                  <p>Referral Reward</p>
                  <p>
                    <FaEnvelopeOpen /> {rewardRef} Ts{" "}
                    <span>($ {dallarValue})</span>{" "}
                    <span>
                      <button
                        className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-xs font-semibold tracking-widest uppercase rounded"
                        onClick={claimRewards}
                      >
                        Claim
                      </button>
                    </span>
                  </p>
                </div>

                <div className="profile_info flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                  <p className="">Referral link</p>

                  <div className="copy_val flex items-center space-x-2">
                    <FaLink />
                    <span className="copied text-xs sm:text-sm break-all">
                      {referralLink}
                    </span>
                    <CopyToClipboard text={referralLink} onCopy={handleCopy}>
                      <span>
                        <FaCopy />
                      </span>
                    </CopyToClipboard>
                  </div>
                  {isCopied && (
                    <p className="copy_status text-green-500 text-xs sm:text-sm">
                      Copied!
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/*  */}
            <div
              className="acc_window all_ls aos-init aos-animate"
              data-aos="zoom-in"
            >
              <div>
                <div className="name_page">Claimed Rewards</div>
              </div>
              <div
                className="refferal_list pad_b_0"
                id="referrals_"
                style={{
                  background:
                    "linear-gradient(to right, #028D8D, #02B38D, #028D8D)",
                }}
              >
                <div className="table_bouties referrals_table ">
                  <div className="rd_bounti">
                    <div className="flex flex-row justify-between sm:w-3/5  sm:mr-5">
                      <div className="mr-5">Transaction tracking</div>
                    </div>
                    {/* HELLO */}
                  </div>
                  {transactionHistory.slice(0, 5).map((transaction, index) => (
                    <div
                      key={index}
                      className="flex_colum withdrawal_info mb-4"
                      style={{
                        background:
                          "linear-gradient(to right, #028D8D, #02B38D, #028D8D)",
                      }}
                    >
                      <div className="form-group form_buy">
                        <p className="mb-2 font-bold text-white">
                          Rewards Claimed
                        </p>
                        <a
                          href={`${bscScanUrl}/tx/${transaction.hash}`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-blue-800 break-all"
                        >
                          {transaction.hash}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pages_numbers"></div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <Connect />
        </>
      )}
    </>
  );
}
