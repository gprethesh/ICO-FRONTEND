import { useState } from "react";
import MetaMask_Fox from "../../assets/images/MetaMask_Fox.svg";
import { FaEthereum } from "react-icons/fa";

import coin from "../../assets/images/comming.webp";
export default function StackingComponent() {
  const monthsData = [
    { title: "1 Month", active: true },
    { title: "3 Month", active: false },
    { title: "6 Month", active: false },
  ];
  const [currentMonth, setCurrentMonth] = useState(monthsData);
  const handleMonthClick = (index) => {
    const updatedMonths = currentMonth.map((month, i) => {
      if (i === index) {
        return { ...month, active: true };
      } else {
        return { ...month, active: false };
      }
    });
    setCurrentMonth(updatedMonths);
  };
  return (
    <>
      <div className="container mx-auto accoint_content_bar">
        {/* <div
          className="acc_window all_ls aos-init aos-animate"
          data-aos="zoom-in"
        >
          <div>
            <div className="name_page">Staking</div>
          </div>
          <div>
            <div className="staking_account">
              <div className="options_time_staking">
                <div>
                  <p>1 Month</p>
                  <p>4.00% per month</p>
                </div>
                <div className="text-center">
                  <p>3 Month</p>
                  <p>15.00% per month</p>
                </div>
                <div className="text-end">
                  <p>6 Month</p>
                  <p>35.00% per month</p>
                </div>{" "}
              </div>
              <div className="select_time_staking">
                <p>to</p>
                <div className="staking_skew">
                  {currentMonth.map((month, index) => (
                    <div
                      className={month.active ? "select_mounth" : ""}
                      key={index}
                    >
                      <span
                        onClick={() => handleMonthClick(index)}
                        className={month.active ? "active" : ""}
                      >
                        {month.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="count_staking text-end">
                <p>
                  <span>Amount Stake</span>{" "}
                  <span>
                    Balance: <span>0,00 </span>Ts
                  </span>
                </p>
                <div className="staking_skew">
                  <img alt="coin" src={coin} />
                  <input placeholder="Enter amount" name="staking" />
                </div>
              </div>
              <a className="grad_button">earn now</a>
            </div>
          </div>
        </div> */}

        {/*  */}
        {/* <div
          className="acc_window all_ls aos-init aos-animate pb-12"
          data-aos="zoom-in"
        >
          <div>
            <div className="name_page">my stakings</div>
          </div>
          <div className="staking_list pad_b_0" id="stakings_">
            <div className="table_bouties staking_table">
              <div className="rd_bounti">
                <div className="flex justify-between w-full md:w-3/5 md:pr-8 mb-2 md:mb-0">
                  <div>Start time</div>
                  <div>Amount</div>
                  <div>Earnings</div>
                  <div>Total</div>
                </div>
                <div className="flex justify-between w-full md:w-2/5 ">
                  <div>End time</div>
                  <div>Program</div>
                  <div>Status</div>
                </div>
              </div>
              <p className="trans_no">No data</p>
            </div>
            <div className="pages_numbers"></div>
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

        {/*  */}
      </div>
    </>
  );
}
