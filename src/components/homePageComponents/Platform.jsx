import React, { useState, useEffect, useContext } from "react";
import usd from "../../assets/images/usdt.png";
import logo from "../../assets/images/logo2.jpg";
import octoRocket from "../../assets/images/OCTOPUS_2_ROCKET.png";
import exchange from "../../assets/images/exchange.png";
import chart from "../../assets/images/OCTOPUS_4.png";
import { CustomButton } from "../CustomButton";
import { TakenomicsData } from "../../constant/AppData";
import OCTOPUS_2_CAR from "../../assets/images/OCTOPUS_2_CAR.png";
import { FaExternalLinkAlt } from "react-icons/fa";
import { ethers } from "ethers";
import {
  FaMoneyBillWave,
  FaMedal,
  FaPercent,
  FaParachuteBox,
} from "react-icons/fa";
import { MdDeveloperMode } from "react-icons/md";
import { IoPeopleCircleOutline, IoLogoStackoverflow } from "react-icons/io5";
import { RiAdvertisementLine } from "react-icons/ri";
import { WalletContext } from "../../routing/Routing";

import { abx as cusdtAbi } from "../../components/accountPageComponents/cusdtAbi.json";

const CONTRACT_ADDRESS = import.meta.env.VITE_APP_CONTRACT_ADDRESS;
const CUSDT_CONTRACT_ADDRESS = import.meta.env.VITE_APP_CUSDT_CONTRACT_ADDRESS;
const URL_RPC = import.meta.env.VITE_APP_URL_RPC;

export default function Platform() {
  const {
    connectWallet,
    disconnectWallet,
    connected,
    account,
    userSign,
    userProvider,
  } = useContext(WalletContext);

  const [progress, setProgress] = useState(0);
  const [tragetBalance, setTragetBalance] = useState();

  const [usdt, setUsdt] = useState(40);
  const [ts, setTs] = useState(10000);

  const usdtToTs = (usdt) => usdt * 250;
  const tsToUsdt = (ts) => ts / 250;

  const handleUsdtChange = (event) => {
    const newUsdt = event.target.value;
    setUsdt(newUsdt);
    setTs(usdtToTs(newUsdt));
  };

  const handleTsChange = (event) => {
    const newTs = event.target.value;
    setTs(newTs);
    setUsdt(tsToUsdt(newTs));
  };

  useEffect(() => {
    const fetchContractData = async () => {
      const provider = new ethers.providers.JsonRpcProvider(URL_RPC);

      const contract = new ethers.Contract(
        CUSDT_CONTRACT_ADDRESS,
        cusdtAbi,
        provider
      );

      const balance = await contract.balanceOf(CONTRACT_ADDRESS);

      const balanceInEther = parseFloat(ethers.utils.formatUnits(balance, 18));

      setTragetBalance(balanceInEther);

      const target = 1200000;

      const progress = (balanceInEther / target) * 100;

      // Update progress state
      setProgress(progress.toFixed(2));
    };

    fetchContractData();
  }, []);

  return (
    <>
      <div className="relative z-10">
        <div className="platform-section flex items-center py-16">
          <div className="flex flex-col xl:flex-row justify-between items-center">
            <div className="w-full xl:w-5/12 z-10 mt-16 xl:mt-0">
              <div
                className="card buy__calc"
                style={{
                  background:
                    "linear-gradient(to right, #028D8D, #02B38D, #028D8D)",
                }}
              >
                <div className="text-center mb-10">
                  <h1 className="text-4xl font-bold">TOKEN PUBLIC SALE</h1>
                </div>

                <div className="flex flex-row gap-10 flex-wrap items-start justify-center">
                  <p className="font-bold text-xl text-white text-center">
                    Progress: <span>{progress}</span>%
                  </p>

                  <div className="w-full h-12 bg-road-image bg-cover relative">
                    <div
                      style={{
                        width: `${progress}%`,
                        height: "26px",
                        backgroundColor: "#4169E1",
                      }}
                    ></div>
                    <div
                      style={{
                        position: "absolute",
                        top: "-50px",
                        left: `${progress}%`,
                        transform: "translateX(-50%)",
                      }}
                    >
                      <img src={OCTOPUS_2_CAR} width="80" height="80" />
                    </div>
                  </div>

                  <div className="coin_st flex justify-between">
                    <p className="font-semibold text-lg flex-1 flex flex-col items-center">
                      USDT Raised
                      <span className="font-[900] text-[14px]">
                        ${tragetBalance} / $1200000
                      </span>{" "}
                    </p>
                  </div>
                  <div className="flex items-center justify-between w-full flex-nowrap">
                    <div
                      className="field_select_with flex items-center"
                      style={{ width: "50%" }}
                    >
                      <input
                        placeholder="0"
                        value={usdt}
                        type="number"
                        onChange={handleUsdtChange}
                        className="crypt_input w-full bg-transparent border-none text-base font-bold text-white text-center p-3"
                        style={{ width: "50%" }} // adjust the width as needed
                      />
                      <img
                        src={usd}
                        alt="USDT"
                        className="h-[24px] sm:h-[32px]"
                      />
                      <span className="curr_name">{""} USDT</span>
                    </div>
                    <img src={exchange} alt="Exchange" className="h-5" />
                    <div
                      className="field_select_with flex items-center"
                      style={{ width: "50%" }}
                    >
                      <input
                        placeholder="0"
                        value={ts}
                        type="number"
                        onChange={handleTsChange}
                        className="crypt_input w-full bg-transparent border-none text-base font-bold text-white text-center p-3"
                        style={{ width: "60%" }} // adjust the width as needed
                      />
                      <img
                        src={logo}
                        alt="coin"
                        className="h-[24px] sm:h-[32px]"
                      />
                      <span className="curr_name">{""}TS</span>
                    </div>
                  </div>

                  <div className="relative z-0">
                    <CustomButton
                      title="BUY (TetherSwap Token)"
                      className="custom-button hero-button mb-10 text-lg font-extrabold leading-[18px] w-[300px]"
                      path="/wallet"
                    />
                  </div>
                  <div className="footer_buy flex justify-between w-full">
                    <div className="link_scan">
                      <a
                        href="#contract"
                        className="text-[#004cffee] text-[15px]"
                      >
                        <p>
                          Token Contract <FaExternalLinkAlt />
                        </p>
                      </a>
                    </div>
                    <div className="link_scan font-normal text-[16px]">
                      <p className="text-right">Listing Price = $0.1 USD</p>
                      <p className="text-right">
                        Txbit/MEXC/Kucoin/Pancakeswap
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <br />
            <div className="text-white w-full xl:w-5/12">
              <h1 className="font-bold text-2xl md:text-[3rem] leading-[1.3]">
                Peer-to-peer Exchange (DEX) TetherSwap
              </h1>
              <div className="w-full md:w-7/12">
                <img src={octoRocket} alt="" className=" w-600" />
              </div>
              <p className="font-normal text-[1.125rem] leading-5 my-5">
                The TS Token is integral to the long-term viability of our
                Autonomous Trading Platform (ATP). TetherSwap.com boasts an
                intuitive user interface, making it a highly approachable ATP
                for novices. With its competitive lower fees and an array of
                advantageous features, TetherSwap stands tall against
                Centralized Exchanges (CEX). We welcome new investors to join
                our initiative and acquire the TS token.
              </p>
              <div className="flex justify-center sm:justify-start relative z-0"></div>
            </div>
          </div>
        </div>
        <div className="takenomics-section py-16">
          <h2 className="font-bold text-[2rem] text-center mb-10">
            TOKENOMICS
          </h2>
          <div
            className="token_info flex flex-row flex-wrap justify-evenly mb-[4rem] w-full aos-init aos-animate"
            data-aos="fade-up"
            id="contract"
          >
            {TakenomicsData.map((item, index) => (
              <div key={index}>
                <p>{item.title}</p>
                {item.title === "Contract" ? (
                  <a
                    target="_blank"
                    href={`https://bscscan.com/token/${item.subTitle}`}
                    className="text-[#004cffee] text-[15px]"
                  >
                    <span>
                      {item.subTitle} <FaExternalLinkAlt />
                    </span>
                  </a>
                ) : (
                  <span>{item.subTitle}</span>
                )}
              </div>
            ))}
          </div>

          {/*  */}

          <div className="flex flex-wrap  p-5 rounded-lg">
            <div className="w-full md:w-1/2 flex justify-center items-center">
              <img className="h-120 w-auto" src={chart} alt="" />
            </div>
            <div className="w-full md:w-1/2 grid grid-cols-2 gap-4 mt-5 md:mt-0">
              <div
                className="flex flex-col items-center text-center text-white bg-white rounded-lg py-2"
                style={{ backgroundColor: "#DBBF97" }}
              >
                <h4>
                  3.5%<span className="block text-lg">Marketing</span>
                </h4>
                <RiAdvertisementLine className="text-white" size={60} />
              </div>
              <div
                className="flex flex-col items-center text-center text-white bg-white rounded-lg py-2"
                style={{ backgroundColor: "#4060DD" }}
              >
                <h4>
                  30%<span className="block text-lg">Public Sale </span>
                </h4>
                <FaMoneyBillWave className="text-white" size={60} />
              </div>

              <div
                className="flex flex-col items-center text-center text-white bg-white rounded-lg py-2"
                style={{ backgroundColor: "#6A2CD9" }}
              >
                <h4>
                  5%<span className="block text-lg">Rewards</span>
                </h4>
                <FaMedal className="text-white" size={60} />
              </div>
              <div
                className="flex flex-col items-center text-center text-white bg-white rounded-lg py-2"
                style={{ backgroundColor: "#DC5E2E" }}
              >
                <h4>
                  18%<span className="block text-lg">Liquidity</span>
                </h4>
                <FaPercent className="text-white" size={60} />
              </div>
              <div
                className="flex flex-col items-center text-center text-white bg-white rounded-lg py-2"
                style={{ backgroundColor: "#14A8E8" }}
              >
                <h4>
                  20%<span className="block text-lg">Development Team</span>
                </h4>
                <MdDeveloperMode className="text-white" size={60} />
              </div>
              <div
                className="flex flex-col items-center text-center text-white bg-white rounded-lg py-2"
                style={{ backgroundColor: "#1DE566" }}
              >
                <h4>
                  4%<span className="block text-lg">Airdrop</span>
                </h4>
                <FaParachuteBox className="text-white" size={60} />
              </div>
              <div
                className="flex flex-col items-center text-center text-white bg-white rounded-lg py-2"
                style={{ backgroundColor: "#D4B53F" }}
              >
                <h4>
                  4.5%
                  <span className="block text-lg">Partners &amp; Advisers</span>
                </h4>
                <IoLogoStackoverflow className="text-white" size={60} />
              </div>
              <div
                className="flex flex-col items-center text-center text-white bg-white rounded-lg py-2"
                style={{ backgroundColor: "#E315A8" }}
              >
                <h4>
                  15%<span className="block text-lg">Staking</span>
                </h4>
                <IoPeopleCircleOutline className="text-white" size={60} />
              </div>
            </div>
          </div>

          {/*  */}
        </div>
      </div>
    </>
  );
}
