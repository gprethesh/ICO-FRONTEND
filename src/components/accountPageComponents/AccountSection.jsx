import { menuItems } from "../../constant/AppData";
import logo from "../../assets/images/1.png";
import { useState } from "react";
import WalletComponent from "./WalletComponent";
import BuyTokenComponent from "./BuyTokenComp";
import { BiWallet } from "react-icons/bi";
import StackingComponent from "./StakingComponent";
import RaferalsComponent from "./RaferalsComponent";
import LeftMenuBar from "./LeftMenuBar";
export default function AccountSection() {
  return (
    <>
      <div className="container mx-auto main_content">
        <section className="account_section py-16 min-h-screen">
          <LeftMenuBar />
          <WalletComponent />
        </section>
      </div>
    </>
  );
}
