import { LinkStatus } from "./types";
import TwitterIcon from "./icons/twitterDefault"
export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

export const links = [
  {
    label: "Home",
    icon: "HomeIcon",
    href: "/",
  },
  {
    label: "Trade",
    icon: "TradeIcon",
    items: [
      {
        label: "Exchange",
        // href: "https://exchange.pancakeswap.finance",
        href: "/",
      },
      {
        label: "Liquidity",
        // href: "https://exchange.pancakeswap.finance/#/pool",
        href: "/",
      },
    ],
  },
  {
    label: "Farms",
    icon: "FarmIcon",
    href: "/farms",
    // status: status.LIVE,
  },
  {
    label: "Pools",
    icon: "PoolIcon",
    href: "/syrup",
  },
  {
    label: "Lottery",
    icon: "TicketIcon",
    href: "/lottery",
  },
  // {
  //   label: "NFT",
  //   icon: "NftIcon",
  //   href: "/nft",
  // },
  // {
  //   label: "Team Battle",
  //   icon: "TeamBattleIcon",
  //   href: "/competition",
  //   status: status.SOON,
  // },
  // {
  //   label: "Profile & Teams",
  //   icon: "GroupsIcon",
  //   items: [
  //     {
  //       label: "Leaderboard",
  //       href: "/teams",
  //       status: status.NEW,
  //     },
  //     {
  //       label: "YourProfile",
  //       href: "/",
  //     },
  //   ],
  //   calloutClass: "rainbow",
  // },
  {
    label: "Info",
    icon: "InfoIcon",
    items: [
      {
        label: "Overview",
        // href: "https://pancakeswap.info",
        href: "/",
      },
      {
        label: "Tokens",
        // href: "https://pancakeswap.info/tokens",
        href: "/",
      },
      {
        label: "Pairs",
        // href: "https://pancakeswap.info/pairs",
        href: "/"
      },
      {
        label: "Accounts",
        href: "/",
      },
    ],
  },
  {
    label: "Community",
    icon: "IfoIcon",
    items: [
      {
        label: "Next",
        href: "/ifo",
      },
      {
        label: "History",
        href: "/ifo/history",
      },
    ],
  },

  // {
  //   label: "IFO",
  //   icon: "IfoIcon",
  //   items: [
  //     {
  //       label: "Next",
  //       href: "/ifo",
  //     },
  //     {
  //       label: "History",
  //       href: "/ifo/history",
  //     },
  //   ],
  // },
  {
    label: "More",
    icon: "MoreIcon",
    items: [
      {
        label: "Voting",
        href: "/",
        openPageTarget: true,
        icon: "IfoIcon",
      },
      {
        label: "Github",
        href: "/",
        icon: "PoolIcon",
      },
      {
        label: "Docs",
        href: "/",
        icon: TwitterIcon
      },
      {
        label: "Blog",
        href: "/"
      },
    ],
  },
];

export const socials = [
  {
    label: "Telegram",
    icon: "TelegramIcon",
    items: [
      {
        label: "English",
      },
      {
        label: "Bahasa Indonesia",
      },
      {
        label: "中文",
      },
      {
        label: "Tiếng Việt",
      },
      {
        label: "Italiano",
      },
      {
        label: "русский",
      },
      {
        label: "Türkiye",
      },
      {
        label: "Português",
      },
      {
        label: "Español",
      },
      {
        label: "日本語",
      },
      {
        label: "Français",
      },
      {
        label: "Announcements",
      },
      {
        label: "Whale Alert",
      },
    ],
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
  },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
