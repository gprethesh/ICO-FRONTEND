import React, { useState, useEffect, useContext, createContext } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { ethers } from "ethers";

import { ToastContainer, toast } from "react-toastify";

// navbar
import Header from "../components/Header";

// pages
import Home from "../pages/Home";
import Buy from "../pages/Buy";
import Referals from "../pages/Referals";
import Staking from "../pages/Staking";
import Wallet from "../pages/Wallet";

// ... the same imports

export const WalletContext = createContext();

export function WalletProvider({ children }) {
  const [connected, setConnected] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userSign, setUserSign] = useState("");
  const [userProvider, setUserProvider] = useState("");
  const [attempted, setAttempted] = useState(false);

  const [account, setAccount] = useState(null);

  const disconnectWallet = () => {
    setConnected(false);
    setAccount(null);
  };

  const connectWallet = async () => {
    setLoading(true);
    let provider;
    let signer;

    if (window.ethereum) {
      try {
        provider = new ethers.providers.Web3Provider(window.ethereum);
        await window.ethereum.enable();
        signer = provider.getSigner();
        setUserSign(signer);
        setUserProvider(provider);

        const network = await provider.getNetwork();

        if (network.chainId === 56) {
          setConnected(true);
        } else {
          window.alert("Please switch to the BSC network in MetaMask.");
        }
      } catch (error) {
        console.error("Failed to connect wallet: ", error);
      }
    } else {
      window.alert("Please Install MetaMask!");
    }
    setLoading(false);
    setAttempted(true);
  };

  const connectWallet2 = async () => {
    setLoading(true);

    let provider;
    let signer;
    let timeoutId;

    if (window.ethereum) {
      try {
        provider = new ethers.providers.Web3Provider(window.ethereum);

        timeoutId = setTimeout(() => {
          window.alert("Please confirm in MetaMask");
        }, 10000); // 10 seconds delay

        await window.ethereum.enable();

        // If user confirms in MetaMask, we won't need the timeout alert
        clearTimeout(timeoutId);

        signer = provider.getSigner();
        setUserSign(signer);
        setUserProvider(provider);

        const network = await provider.getNetwork();

        if (network.chainId === 97) {
          setConnected(true);
        } else {
          window.alert("Please switch to the BSC network in MetaMask.");
        }
      } catch (error) {
        console.error("Failed to connect wallet: ", error);
      }
    } else {
      window.alert("Please Install MetaMask!");
    }

    setLoading(false);
    setAttempted(true);
  };

  return (
    <WalletContext.Provider
      value={{
        connected,
        disconnectWallet,
        loading,
        connectWallet,
        attempted,
        account,
        userSign,
        userProvider,
        connectWallet2,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}

// function PrivateRoute({ children }) {
//   const navigate = useNavigate();
//   const { connected, loading, connectWallet, attempted } =
//     useContext(WalletContext);

//   useEffect(() => {
//     const connectToWallet = async () => {
//       if (!connected && !loading && !attempted) {
//         await connectWallet();
//       }

//       if (attempted && !connected) {
//         navigate("/login");
//       }
//     };
//     connectToWallet();
//   }, [connected, loading, attempted, navigate]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return connected ? children : null;
// }

function WalletRoute({ children }) {
  const { connected, loading, connectWallet, attempted } =
    useContext(WalletContext);

  useEffect(() => {
    const connectToWallet = async () => {
      if (!connected && !loading && !attempted) {
        await connectWallet();
      }
    };
    connectToWallet();
  }, [connected, loading, attempted]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return children;
}

export default function Routing() {
  return (
    <WalletProvider>
      <ToastContainer />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/buy" element={<Buy />} />
          <Route
            path="/referals"
            element={
              <WalletRoute>
                <Referals />
              </WalletRoute>
            }
          />
          <Route path="/staking" element={<Staking />} />
          <Route
            path="/wallet"
            element={
              <WalletRoute>
                <Wallet />
              </WalletRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </WalletProvider>
  );
}
