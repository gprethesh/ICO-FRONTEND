import React from "react";
import coinsult from "../../assets/images/coinsult.webp";
import wallet from "../../assets/images/wallet.png";
import cmc from "../../assets/images/cmc-logo.png";
import bitfinex from "../../assets/images/bitfinex-logo.svg";
import dexview from "../../assets/images/dexview.png";
import Huobi from "../../assets/images/huobi.png";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Sponsor() {
  const sponsors = [
    {
      name: "coinsult",
      logo: coinsult,
    },
    {
      name: "wallet",
      logo: wallet,
    },
    {
      name: "cmc",
      logo: cmc,
    },
    {
      name: "dexview",
      logo: dexview,
    },
    {
      name: "bitfinex",
      logo: bitfinex,
    },

    {
      name: "Huobi",
      logo: Huobi,
    },
  ];

  return (
    <>
      <div className="py-16">
        <h2 className="font-bold text-[2rem] leading-[1.4] text-center mb-10"></h2>
        <Carousel
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          infiniteLoop
          autoPlay
          interval={2000}
          className="w-full mx-auto"
        >
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="flex flex-row items-center space-x-2 overflow-x-auto"
            >
              {sponsors.slice(index, index + 4).map((sponsor, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center space-y-2 w-1/4"
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="w-full object-contain"
                  />
                  <p className="text-lg font-semibold text-center"></p>
                </div>
              ))}
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}
