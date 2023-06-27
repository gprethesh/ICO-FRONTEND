import octo from "../../assets/images/OCTOPUS_1.png";
import { CustomButton } from "../CustomButton";
export default function HeroSection() {
  return (
    <>
      <div className="hero-section flex items-center py-10">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="w-full md:w-7/12">
            <img src={octo} alt="" className="w-100" />
          </div>
          <div className="text-white w-full md:w-5/12">
            <h1 className="font-[900] text-[34px] md:text-[52px] leading-[1.3] mb-5 md:mb-[30px]">
              Peer-to-peer Architecture
            </h1>
            <p className="font-bold text-base md:text-xl mb-10">
              TetherSwap.com embodies a sophisticated, decentralized platform
              for the exchange of digital currencies, powered by its distinctive
              TetherSwap token (TS). The intricate yet robust ecosystem
              underpinning this initiative offers unprecedented stability to the
              project. For an in-depth understanding and greater insight into
              the intricacies of the TetherSwap endeavor, we invite you to
              peruse our meticulously detailed WhitePaper.
            </p>
            <div className="flex flex-col lg:flex-row gap-12 sm:justify-center sm:items-center md:items-start  items-center relative z-0">
              <CustomButton
                title="WhitePaper"
                className="custom-button hero-button  text-lg font-extrabold leading-[18px] w-[200px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
