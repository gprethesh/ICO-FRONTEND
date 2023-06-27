import React from "react";
import HeroSection from "../components/homepageComponents/HeroSection";
import Platform from "../components/homePageComponents/Platform";
import TeamSection from "../components/homepageComponents/TeamSection";
import Footer from "../components/homepageComponents/Footer";
import RoadMap from "../components/homePageComponents/RoadMap";
import Sponsor from "../components/homePageComponents/Sponsor";
export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <HeroSection />
        <Platform />
        <TeamSection />
        <RoadMap />
        <Sponsor />
      </div>
      <Footer />
    </>
  );
}
