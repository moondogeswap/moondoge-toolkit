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
        href: "/",
      },
      {
        label: "Liquidity",
        href: "/",
      },
    ],
  },
  {
    label: "Farms",
    icon: "FarmIcon",
    href: "/farms",
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
  {
    label: "Info",
    icon: "InfoIcon",
    items: [
      {
        label: "Overview",
        href: "/",
      },
      {
        label: "Tokens",
        href: "/",
      },
      {
        label: "Pairs",
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
    href: "/",
    items: [
      {
        label: "English",
        href: "/"
      },
      {
        label: "Bahasa Indonesia",
        href: "/"
      },
      {
        label: "中文",
        href: "/"
      },
      {
        label: "Tiếng Việt",
        href: "/"
      },
      {
        label: "Italiano",
        href: "/"
      },
      {
        label: "русский",
        href: "/"
      },
      {
        label: "Türkiye",
        href: "/"
      },
      {
        label: "Português",
        href: "/"
      },
      {
        label: "Español",
        href: "/"
      },
      {
        label: "日本語",
        href: "/"
      },
      {
        label: "Français",
        href: "/"
      },
      {
        label: "Announcements",
        href: "/"
      },
      {
        label: "Whale Alert",
        href: "/"
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
