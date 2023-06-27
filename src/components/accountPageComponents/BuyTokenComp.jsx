import { useContext } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { FaExchangeAlt, FaCaretSquareDown } from "react-icons/fa";
import { WalletContext } from "../../routing/Routing";

import coin from "../../assets/images/comming.webp";
export default function BuyTokenComp() {
  const { connectWallet, disconnectWallet, connected, account } =
    useContext(WalletContext);
  return (
    <>
      <div className="container mx-auto accoint_content_bar">
        {/* <div
          className="acc_window one_ls aos-init aos-animate"
          data-aos="zoom-in"
        >
          <div>
            <div className="name_page">Bonuses</div>
          </div>
          <div className="flex_colum bonuses_deposit">
            <p data-proc="2">
              <FiPlusCircle fontSize={20} />
              2% from <b>15 000 Ts</b>
            </p>
            <p data-proc="3">
              <FiPlusCircle fontSize={20} />
              3% from <b>30 000 Ts</b>
            </p>
            <p data-proc="5">
              <FiPlusCircle fontSize={20} />
              5% from <b>50 000 Ts</b>
            </p>
            <p data-proc="8">
              <FiPlusCircle fontSize={20} />
              8% from <b>100 000 Ts</b>
            </p>
            <p data-proc="10">
              <FiPlusCircle fontSize={20} />
              10% from <b>300 000 Ts</b>
            </p>
            <p data-proc="15">
              <FiPlusCircle fontSize={20} />
              15% from <b>500 000 Ts</b>
            </p>
            <p data-proc="20">
              <FiPlusCircle fontSize={20} />
              20% from <b>1 000 000 Ts</b>
            </p>
          </div>
        </div>
        <div
          className="acc_window one_ls aos-init aos-animate"
          data-aos="zoom-in"
        >
          <div>
            <div className="name_page">Buy Ts</div>
          </div>
          <div className="flex_colum buy_info">
            <div className="amo_pay">
              <p>Price</p>
              <div>
                <p>1 Ts</p>
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
                  <b>BNB(Binance Coin)</b>
                  <FaCaretSquareDown />
                </p>
                <div className="list_currs list_custom">
                  <p data-curr="busd" data-simple-curr="busd">
                    BUSD(BEP20)
                  </p>
                  <p data-curr="btc" data-simple-curr="btc">
                    BTC(Bitcoin)
                  </p>
                  <p data-curr="eth" data-simple-curr="eth">
                    ETH(Ethereum)
                  </p>
                  <p data-curr="ltc" data-simple-curr="ltc">
                    LTC(Litecoin)
                  </p>
                  <p data-curr="usdttrc" data-simple-curr="usdt">
                    USDT(TRC20)
                  </p>
                  <p data-curr="usdtbep" data-simple-curr="usdt">
                    USDT(BEP20)
                  </p>
                  <p data-curr="usdterc" data-simple-curr="usdt">
                    USDT(ERC20)
                  </p>
                </div>
              </div>{" "}
            </div>
            <div className="form-group form_buy">
              <p>Amount Ts</p>
              <div className="form-field">
                <input
                  className="form-control"
                  type="number"
                  name="amount"
                  maxlength="20"
                  value="10000"
                />
                <img src={coin} alt="coin" />
              </div>
              <span>(Min deposit 10000 Ts)</span>
            </div>
            <div className="amo_pay">
              <p>Amount to pay</p>
              <div className="calc_pay">
                <p className="crypto_val">0.163298 BNB</p>
                <FaExchangeAlt />
                <p className="usd_vals">$ 40</p>
              </div>
            </div>
            <div className="amo_pay">
              <p>You will receive</p>
              <div className="receive_t">10000 Ts</div>
            </div>
            <a className="grad_button">confirm</a>
          </div>
        </div> */}

        <section className="bg-gray-800 text-gray-100">
          <div className="container flex flex-col mx-auto lg:flex-row">
            <div
              className="w-full lg:w-1/3"
              style={{
                backgroundImage: `url(${coin})`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
              }}
            ></div>

            <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-8 h-8 mb-8 dark:text-violet-400"
              >
                <path
                  fillRule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <h2 className="text-3xl font-semibold leadi">Stay Tuned</h2>
              <p className="mt-4 mb-8 text-sm">comming Soon</p>
              <button className="self-start px-10 py-3 text-lg font-medium rounded-3xl bg-violet-400 text-gray-900">
                Home
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
