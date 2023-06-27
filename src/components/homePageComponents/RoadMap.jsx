import React from "react";
import pattern1 from "../../assets/images/svg2.svg";

export default function RoadMap() {
  return (
    <>
      <div className="text-white p-6">
        <div className="text-center mb-10"></div>

        <section className=" text-gray-100">
          <div className="container max-w-5xl px-4 py-12 mx-auto">
            <div className="grid gap-4 mx-4 sm:grid-cols-12">
              <div className="col-span-12 sm:col-span-3">
                <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-violet-400">
                  <h3 className="text-3xl font-semibold">RoadMap</h3>
                  <span className="text-sm font-bold tracki uppercase text-gray-400"></span>
                </div>
              </div>
              <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
                  <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400">
                    <h3 className="text-xl font-semibold tracki">
                      Concept and Planning
                    </h3>
                    <time className="text-xs tracki uppercase text-gray-400">
                      <p className="mt-2 ml-2 bg-yellow-500 text-white px-2 py-1 rounded inline-block">
                        Q1 2023
                      </p>
                    </time>
                    <p className="mt-3">
                      ▫️ Define the project's mission and vision.
                      <br />
                      ▫️ Research the market and competition.
                      <br />
                      ▫️ Outline key functionalities of Tetherswap.
                      <br />
                      ▫️ Assemble the development and marketing team.
                      <br />
                      ▫️ Develop a whitepaper detailing the project.
                    </p>
                  </div>
                  <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400">
                    <h3 className="text-xl font-semibold tracki">
                      Development and Testing
                    </h3>
                    <time className="text-xs tracki uppercase text-gray-400">
                      <p className="mt-2 ml-2 bg-yellow-500 text-white px-2 py-1 rounded inline-block">
                        Q2 APRIL 2023
                      </p>
                    </time>
                    <p className="mt-3">
                      ▫️ Develop the smart contracts for Tetherswap.
                      <br />
                      ▫️ Build the user interface for web and possibly mobile
                      platforms.
                      <br />
                      ▫️ Conduct rigorous testing, including unit tests,
                      integration tests, and stress tests.
                      <br />
                      ▫️ Perform third-party audits of smart contracts to ensure
                      security.
                      <br />
                    </p>
                  </div>
                  <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400">
                    <h3 className="text-xl font-semibold tracki">Launch</h3>
                    <time className="text-xs tracki uppercase text-gray-400">
                      <p className="mt-2 ml-2 bg-yellow-500 text-white px-2 py-1 rounded inline-block">
                        Q3 2023
                      </p>
                    </time>
                    <p className="mt-3">
                      ▫️ Launch the Tetherswap Website.
                      <br />
                      ▫️ Initiate social media marketing and influencer
                      partnerships.
                      <br />
                      ▫️ Start Airdrop.
                      <br />
                      ▫️ Token Publick Sale TetherSwap(TS)
                      <br />
                    </p>
                  </div>
                  <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400">
                    <h3 className="text-xl font-semibold tracki">
                      Improvements and Additional Features
                    </h3>
                    <time className="text-xs tracki uppercase text-gray-400">
                      <p className="mt-2 ml-2 bg-yellow-500 text-white px-2 py-1 rounded inline-block">
                        Q1 2024
                      </p>
                    </time>
                    <p className="mt-3">
                      ▫️ Launch Swap platform.
                      <br />
                      ▫️ Coinmarketcap Listing
                      <br />
                      ▫️ Listing Price $0.1 USD
                      <br />
                      ▫️ Add support for more cryptocurrencies and stablecoins.
                      <br />
                      ▫️ Develop API for third-party services and integrations.
                      <br />
                    </p>
                  </div>

                  <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400">
                    <h3 className="text-xl font-semibold tracki">Expansion</h3>
                    <time className="text-xs tracki uppercase text-gray-400">
                      <p className="mt-2 ml-2 bg-yellow-500 text-white px-2 py-1 rounded inline-block">
                        Q3 2024
                      </p>
                    </time>
                    <p className="mt-3">
                      ▫️ Optimize the platform for scalability to handle
                      increased traffic and transactions.
                      <br />
                      ▫️ Expand marketing efforts to new regions.
                      <br />
                      ▫️ Develop community initiatives, such as educational
                      content, to increase user engagement.
                      <br />
                      ▫️ Develop API for third-party services and integrations.
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
