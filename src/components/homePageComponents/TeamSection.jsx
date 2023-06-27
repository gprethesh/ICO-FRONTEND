import {
  BsWallet,
  BsArrowRepeat,
  BsPlusSquare,
  BsArrowUpRight,
} from "react-icons/bs";

export default function TeamSection() {
  const features = [
    {
      title: "DECENTRALIZED FINANCIAL INTERMEDIARY",
      description:
        "Mitigates centralized inefficiencies by enabling peer-to-peer transactions.",
      icon: <BsWallet size={48} />,
    },
    {
      title: "LIQUIDITY POOL PROVISION",
      description:
        "Supports DeFi ecosystem, optimizing capital efficiency via staking.",
      icon: <BsArrowRepeat size={48} />,
    },
    {
      title: "YIELD FARMING FACILITATOR",
      description:
        "Empowers investors through yield farming, optimizing passive income generation.",
      icon: <BsPlusSquare size={48} />,
    },
    {
      title: "ON-CHAIN ORDER ALGORITHM",
      description:
        "Reshapes classic exchange mechanics, bolstering liquidity and market steadiness.",
      icon: <BsArrowUpRight size={48} />,
    },
  ];
  return (
    <>
      <div className="team-section py-16">
        <h2 className="font-bold text-[2rem] leading-[1.4] text-center mb-10">
          FEATURES OF TETHERSWAP
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center m-4 p-5 rounded-lg shadow-md"
              style={{
                background:
                  "linear-gradient(to right, #a7f3d0, #6ee7b7, #10b981)",
              }}
            >
              <div className="text-2xl mb-4 text-white">{feature.icon}</div>
              <h3 className="mb-4 text-lg font-semibold text-black">
                {feature.title}
              </h3>
              <p className="text-black">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
