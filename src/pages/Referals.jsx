import React from "react";
import RaferalsComponent from "../components/accountPageComponents/RaferalsComponent";

import Footer from "../components/homepageComponents/Footer";
export default function Referals() {
  return (
    <>
      <div className="container mx-auto main_content">
        <section className="account_section py-16 ">
          <RaferalsComponent />
        </section>
      </div>
      <Footer />
    </>
  );
}
