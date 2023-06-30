import { useContext, useState, useEffect } from "react";
import coin from "../../assets/images/logo2.jpg";
import card from "../../assets/images/id-card.png";
import { FaExchangeAlt, FaCaretSquareDown } from "react-icons/fa";
import { WalletContext } from "../../routing/Routing";
import { abi as contractAbi } from "./ICOCrowdsale.json";
import { ts as tsAbi } from "./tsAbi.json";
import { abx as cusdtAbi } from "./cusdtAbi.json";
import { ethers } from "ethers";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Connect from "./Connect";
const tokenImage = "https://tetherswap.net/assets/logo2-3baa5c43.jpg";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CONTRACT_ADDRESS = import.meta.env.VITE_APP_CONTRACT_ADDRESS;
const CUSDT_CONTRACT_ADDRESS = import.meta.env.VITE_APP_CUSDT_CONTRACT_ADDRESS;
const TS_CONTRACT_ADDRESS = import.meta.env.VITE_APP_CUSDT_TS_CONTRACT_ADDRESS;

const bscScanUrl = import.meta.env.VITE_APP_BSCSCANURL;
const API_URL = import.meta.env.VITE_APP_API_URL;
const YourApiKeyToken = import.meta.env.VITE_APP_YOURAPIKEYTOKEN;

let signer;
let contract;
let cusdtContract;

export default function Wallet() {
  const {
    connectWallet,
    disconnectWallet,
    connected,
    account,
    userSign,
    userProvider,
  } = useContext(WalletContext);

  const [approved, setApproved] = useState(false);
  const [allowance, setAllowance] = useState(0);
  const [approvalAmount, setApprovalAmount] = useState("");
  const [showApprovalForm, setShowApprovalForm] = useState(false);
  const [buyAmount, setBuyAmount] = useState(10000);
  const [errorMessage, setErrorMessage] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalPrice2, setTotalPrice2] = useState(0);
  const [isApproving, setIsApproving] = useState(false);
  const [transactionProcessing, setTransactionProcessing] = useState(false);
  const [isBuying, setIsBuying] = useState(false);
  const [transactionBuyingProcessing, setTransactionBuyingProcessing] =
    useState(false);
  const [reloadAllowance, setReloadAllowance] = useState(false);
  const [userUsdtBalance, setUserUsdtBalance] = useState(0);
  const [userTSBalance, setUserTsBalance] = useState(0);
  const [transactionHistory, setTransactionHistory] = useState([]);

  // const location = useLocation();

  // useEffect(() => {
  //   const query = new URLSearchParams(location.search);
  //   const referralId = query.get("ref");

  //   if (referralId && ethers.utils.isAddress(referralId)) {
  //     localStorage.setItem("referralId", referralId);
  //   }
  // }, [location]);

  const initializeEthers = async () => {
    contract = new ethers.Contract(CONTRACT_ADDRESS, contractAbi, userSign);
    cusdtContract = new ethers.Contract(
      CUSDT_CONTRACT_ADDRESS,
      cusdtAbi,
      userSign
    );
    await checkAllowance();
  };

  const addToken = async () => {
    const tokenAddress = import.meta.env.VITE_APP_CUSDT_TS_CONTRACT_ADDRESS;
    const tokenSymbol = "TS";
    const tokenDecimals = 18;
    const tokenImage = "https://tetherswap.net/assets/logo2-3baa5c43.jpg";

    try {
      const wasAdded = await ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20",
          options: {
            address: tokenAddress,
            symbol: tokenSymbol,
            decimals: tokenDecimals,
            image: tokenImage,
          },
        },
      });

      if (wasAdded) {
        console.log("Thanks for your interest!");
      } else {
        console.log("Your loss!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkAllowance = async () => {
    const address = await userSign.getAddress();
    const allowance = await cusdtContract.allowance(address, CONTRACT_ADDRESS);
    const minimumAllowance = ethers.utils.parseEther("40");
    setApproved(ethers.BigNumber.from(allowance).gte(minimumAllowance));
    setAllowance(ethers.utils.formatEther(allowance)); // convert to ETH format
  };

  const buyTokens = async (totalPrice) => {
    setIsBuying(true);
    const amountInWei = ethers.utils.parseEther(String(totalPrice));
    const referralId =
      localStorage.getItem("referralId") ||
      "0x0000000000000000000000000000000000000000";
    try {
      const tx = await contract.buyTokens(amountInWei, referralId);
      setTransactionBuyingProcessing(true);
      setIsBuying(false);

      const receipt = await tx.wait();
      setReloadAllowance(true);
      successToast(receipt.transactionHash); // assuming you want a success toast here too
      setTransactionBuyingProcessing(false);
    } catch (error) {
      console.error("An error occurred:", error);
      setIsBuying(false);
      setTransactionBuyingProcessing(false);
      if (error.reason) {
        console.error("Contract Revert Reason:", error.reason);
        errorToast(error.reason);
      }
    }
  };

  const approveTokens = async () => {
    if (!totalPrice) {
      window.alert("Please enter an amount to approve.");
      return;
    }
    setIsApproving(true);
    const amountToApprove = ethers.utils.parseEther(totalPrice);
    try {
      const tx = await cusdtContract.approve(CONTRACT_ADDRESS, amountToApprove);
      setTransactionProcessing(true); // Now processing the transaction
      setIsApproving(false); // Not loading anymore, waiting for the transaction receipt now

      const receipt = await tx.wait();

      setReloadAllowance(true);
      successToastSpending();
      setTransactionProcessing(false); // End transaction processing
      setTotalPrice(0);
    } catch (error) {
      console.error("Approval failed: ", error);
      setIsApproving(false); // End loading
      setTransactionProcessing(false); // End transaction processing
    }
  };

  const getUsdTTokens = async () => {
    let contractUSDT = new ethers.Contract(
      CUSDT_CONTRACT_ADDRESS,
      cusdtAbi,
      userProvider
    );

    let contractTS = new ethers.Contract(
      TS_CONTRACT_ADDRESS,
      tsAbi,
      userProvider
    );

    const account = await userSign.getAddress();

    let balance = await contractUSDT.balanceOf(account);
    let userBalanceInUsdt = ethers.utils.formatUnits(balance, "ether");

    let balanceTs = await contractTS.balanceOf(account);
    let userBalanceInTs = ethers.utils.formatUnits(balanceTs, "ether");

    setUserUsdtBalance(userBalanceInUsdt);

    setUserTsBalance(userBalanceInTs);
  };

  useEffect(() => {
    if (connected) {
      initializeEthers();
    }
  }, [connected]);

  useEffect(() => {
    if (connected && reloadAllowance) {
      // Check both conditions
      checkAllowance();
      setReloadAllowance(false);
    }
  }, [connected, reloadAllowance]);

  useEffect(() => {
    if (connected) {
      getUsdTTokens();
    }
  }, [connected]);

  const handleInputChange = (event) => {
    const { value } = event.target;
    const numericValue = parseFloat(value.replace(/[^0-9.]/g, "")); // allow digits and decimal point
    setBuyAmount(numericValue);
    if (numericValue < 10000) {
      setErrorMessage("Min Purchase 10000 TS");
    } else {
      setErrorMessage("");
    }
  };

  useEffect(() => {
    if (connected) {
      const newPrice = (buyAmount / 10000) * 40;
      setTotalPrice(newPrice.toFixed(1));
      setTotalPrice2(newPrice.toFixed(1));
    }
  }, [buyAmount, connected]); // Add connected to the dependency array

  const getTanscations = async () => {
    const accountAddress = await userSign.getAddress();
    const url = `${API_URL}/api?module=account&action=txlist&address=${accountAddress}&startblock=0&endblock=99999999&sort=desc&apikey=${YourApiKeyToken}`;

    try {
      const response = await axios.get(url);
      const transactions = response.data.result;

      const methodId = ethers.utils
        .id("buyTokens(uint256,address)")
        .substring(0, 10);

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

  const successToastSpending = () => {
    toast.success(<div>Spending setApproved!</div>, {
      position: "top-right",
      autoClose: 8000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
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

  // console.log(`totalPrice2`, totalPrice2);
  // console.log(`totalPrice`, totalPrice);
  // console.log(`allowance`, allowance);

  // console.log("Allowance:", allowance, "Type:", typeof allowance);
  // console.log("TotalPrice2:", totalPrice2, "Type:", typeof totalPrice2);

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
                <div className="name_page">TetherSwap PUBLIC SALE</div>
              </div>
              <div
                className="flex_colum buy_info"
                style={{
                  background:
                    "linear-gradient(to right, #028D8D, #02B38D, #028D8D)",
                }}
              >
                <div className="amo_pay">
                  <p>Price</p>
                  <div>
                    <p>1 TS</p>
                    <FaExchangeAlt />
                    <p>$ 0.004</p>
                  </div>
                </div>
                <div className="form-group sel_ncy">
                  <p>Choose currency</p>
                  <div
                    className="select_currency select_custom"
                    data-curr="bnb"
                    data-simple-curr="bnb"
                  >
                    <p>
                      <b>USDT(BEP-20 USDT)</b>
                    </p>
                  </div>{" "}
                </div>
                <div className="form-group form_buy">
                  <p>Amount TS (TetherSwap)</p>
                  <div className="form-field">
                    <input
                      className="form-control"
                      type="number"
                      name="amount"
                      min="10000"
                      value={buyAmount}
                      onChange={handleInputChange} // listen to input changes
                    />
                    <img src={coin} alt="coin" />
                  </div>
                  {errorMessage && (
                    <span style={{ color: "red" }}>{errorMessage}</span>
                  )}
                </div>
                <div className="amo_pay">
                  <p>You will receive</p>
                  <div className="calc_pay">
                    <p className="crypto_val">{buyAmount} TS</p>
                    <FaExchangeAlt />
                    <p className="usd_vals">$ {totalPrice2}</p>
                  </div>
                </div>
                {parseFloat(allowance) < parseFloat(totalPrice2) ? (
                  <>
                    <button
                      className="grad_button"
                      onClick={approveTokens}
                      disabled={isApproving || transactionProcessing}
                    >
                      {isApproving
                        ? "Loading..."
                        : transactionProcessing
                        ? "Processing Transaction..."
                        : "Enable USDT"}
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="grad_button"
                      onClick={() => buyTokens(totalPrice2)}
                      disabled={
                        isBuying ||
                        transactionBuyingProcessing ||
                        userUsdtBalance < 40
                      }
                    >
                      {isBuying
                        ? "Loading..."
                        : transactionBuyingProcessing
                        ? "Processing Transaction..."
                        : "BUY (TS)"}
                    </button>
                  </>
                )}
              </div>
            </div>
            {/* ooooooo */}

            <div
              className="acc_window one_ls aos-init aos-animate"
              data-aos="zoom-in"
            >
              <div>
                <div className="name_page">Statistics</div>
              </div>
              <div
                className="flex_colum"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "20px",
                  background:
                    "linear-gradient(to right, #028D8D, #02B38D, #028D8D)",
                }}
              >
                <div className="statists sec_s">
                  <div className="static_bl total_coin">
                    <p>${userUsdtBalance}</p>
                    <p>USDT</p>
                  </div>
                </div>
                <div className="statists sec_s">
                  <div className="static_bl total_coin">
                    <p>${userTSBalance}</p>
                    <p>Ts (TetherSwap)</p>
                  </div>
                </div>
                <p className="total_coin" style={{ gridColumn: "span 2" }}>
                  allowance: <b>{allowance}</b> USDT <span></span>
                </p>{" "}
                <p className="total_coin" style={{ gridColumn: "span 2" }}>
                  <button
                    type="button"
                    className="flex items-center px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-xs font-semibold tracking-widest uppercase rounded"
                    onClick={addToken} // Added onClick event handler
                  >
                    <div className="flex-grow text-center">Import Token</div>
                    <img
                      className="ml-auto"
                      alt="ts"
                      src={tokenImage}
                      width="25px"
                    />
                  </button>
                </p>
              </div>
            </div>

            {/* ooooo */}
            <div
              className="acc_window all_ls aos-init aos-animate "
              data-aos="zoom-in"
            >
              <div>
                <div className="name_page mb-4 font-bold text-xl">
                  Transaction History
                </div>
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
                      Transaction Hash
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

            {/* ooooo */}
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
