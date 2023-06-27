import React from "react";
import BuyTokenComp from "../components/accountPageComponents/BuyTokenComp";
import LeftMenuBar from "../components/accountPageComponents/LeftMenuBar";
import Footer from "../components/homepageComponents/Footer";

export default function Buy() {
  return (
    <>
      <div className="container mx-auto main_content">
        <section className="account_section py-16 ">
          {/* <LeftMenuBar /> */}
          <BuyTokenComp />
        </section>
      </div>
      <Footer />
    </>
  );
}
