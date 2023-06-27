import React from "react";
import StackingComponent from "../components/accountPageComponents/StakingComponent";
import LeftMenuBar from "../components/accountPageComponents/LeftMenuBar";
import Footer from "../components/homepageComponents/Footer";
export default function Staking() {
  return (
    <>
      <div className="container mx-auto main_content">
        <section className="account_section py-16">
          {/* min-h-screen */}
          {/* <LeftMenuBar /> */}
          <StackingComponent />
        </section>
      </div>
      <Footer />
    </>
  );
}
