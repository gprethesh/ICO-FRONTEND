import { useState, useEffect } from "react";
import logo from "../assets/images/logo2.jpg";
import { NavbarData } from "../constant/AppData";
import { CustomButton } from "../components/CustomButton";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { ethers } from "ethers";
import LoginNav from "./accountPageComponents/LoginNav";

export default function Header() {
  const [openToggle, setOpenToggle] = useState(false);

  useEffect(() => {
    if (openToggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup the effect
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openToggle]);

  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const referralId = query.get("ref");

    if (referralId && ethers.utils.isAddress(referralId)) {
      localStorage.setItem("referralId", referralId);
    }
  }, [location]);
  return (
    <>
      <div
        className={
          openToggle ? "navbar navbar-open xl:bg-transparent" : "navbar "
        }
      >
        <div className="container mx-auto font-[Cairo] py-4 flex justify-between items-center relative">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 sm:h-[60px]" />
            <span className="font-[900] text-xl sm:text-2xl uppercase ml-3">
              TetherSwap
            </span>
          </div>
          <ul className="hidden xl:flex">
            {NavbarData.map((item, index) => (
              <li key={index} className="mx-4">
                <Link
                  className="font-semibold text-base capitalize cursor-pointer"
                  to={item.path}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <LoginNav />
          <div
            className={
              openToggle
                ? "toggle-nav block xl:hidden bg-transparent before:rotate-[45deg] before:top-0 after:rotate-[-45deg] after:top-0"
                : "toggle-nav block xl:hidden bg-white"
            }
            onClick={() => setOpenToggle(!openToggle)}
          ></div>
        </div>

        {/* Mobile menu */}
        <div
          className={
            openToggle
              ? "navbar-menu navbar-menu-open xl:hidden"
              : "navbar-menu"
          }
        >
          <ul className="navbar-menu__links">
            <li>
              <Link to="/" onClick={() => setOpenToggle(!openToggle)}>
                Home
              </Link>
            </li>

            <li>
              <Link to="/wallet" onClick={() => setOpenToggle(!openToggle)}>
                Wallet
              </Link>
            </li>

            <li>
              <Link to="/referals" onClick={() => setOpenToggle(!openToggle)}>
                Referral
              </Link>
            </li>
            <li>
              <Link to="/staking" onClick={() => setOpenToggle(!openToggle)}>
                Staking
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
