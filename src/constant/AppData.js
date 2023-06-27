export const NavbarData = [
  {
    id: 1,
    title: "home",
    path: "/",
  },

  {
    id: 2,
    title: "wallet",
    path: "/wallet",
  },

  {
    id: 3,
    title: "referral",
    path: "/referals",
  },
  {
    id: 4,
    title: "staking",
    path: "/staking",
  },
];

// Takenomics data

export const TakenomicsData = [
  {
    id: 1,
    title: "Token Name",
    subTitle: "TetherSwap",
  },
  {
    id: 2,
    title: "Token Symbol",
    subTitle: "Ts",
  },
  {
    id: 3,
    title: "Token Type",
    subTitle: "BEP-20",
  },
  {
    id: 4,
    title: "DECIMALS",
    subTitle: "18",
  },
  {
    id: 5,
    title: "Total Supply",
    subTitle: "1000000000",
  },
  {
    id: 6,
    title: "Ts Price",
    subTitle: "0.004 USD",
  },
  {
    id: 7,
    title: "Contract",
    subTitle: "0xDf34f62a90717bAc9067A1b9eb49f5e7419FdC7f",
  },
];

// account menu items data
import { BiWallet, BiBadgeCheck, BiGift } from "react-icons/bi";
import {
  FaCoins,
  FaUsers,
  FaAward,
  FaProjectDiagram,
  FaRandom,
  FaCogs,
} from "react-icons/fa";
export const menuItems = [
  {
    path: "/wallet",
    className: "account_menu",
    icon: BiWallet,
    label: "Wallet",
  },
  {
    path: "/buy",
    className: "account_menu",
    icon: FaCoins,
    label: "Buy Ts Token",
  },
  {
    path: "/staking",
    className: "account_menu",
    icon: BiBadgeCheck,
    label: "Staking",
  },
  {
    path: "/referals",
    className: "account_menu",
    icon: FaUsers,
    label: "Referrals",
  },
  {
    path: "#",
    className: "account_menu",
    icon: FaAward,
    label: "Daily Rewards",
  },
  {
    path: "#",
    className: "account_menu",
    icon: FaProjectDiagram,
    label: "Airdrop",
  },
  {
    path: "#",
    className: "account_menu",
    icon: BiGift,
    label: "Bounties",
  },
  {
    path: "#",
    className: "account_menu",
    icon: FaRandom,
    label: "Transactions",
  },
  {
    path: "#",
    className: "account_menu",
    icon: FaCogs,
    label: "Settings",
  },
];
