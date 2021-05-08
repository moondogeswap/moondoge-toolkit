import React from "react";
import Text from "../Text/Text";
import Link from "../Link/Link";
import LogoIcon from "../Svg/Icons/LogoIcon";
import WonIcon from "../Svg/Icons/Won";
import BreadCrumbs from "./Breadcrumbs";

export default {
  title: "Components/Breadcrumbs",
  component: BreadCrumbs,
  argTypes: {},
};

export const Default: React.FC = () => {
  return (
    <Text p="32px">
      <BreadCrumbs mb="32px">
        <Link href="/" color="linkADefault" style={{ fontWeight: 400 }}>
          Tokens
        </Link>
        <Link color="linkACurrent">WETH</Link>
        {/* <Text color="textDisabled">Crumb 2</Text> */}
      </BreadCrumbs>
      {/* <BreadCrumbs>
        <Text>PancakeSwap</Text>
        <Text>The #1 AMM and yield farm on Binance Smart Chain.</Text>
      </BreadCrumbs> */}
    </Text>
  );
};

export const CustomSeparator: React.FC = () => {
  return (
    <Text p="32px">
      <Text mb="16px">
        <BreadCrumbs separator={<LogoIcon width="15" />}>
          <Link href="/" color="linkADefault" style={{ fontWeight: 400 }}>
            Tokens
          </Link>
          <Link color="linkACurrent">WETH</Link>
          {/* <Text color="textDisabled">Crumb 2</Text> */}
        </BreadCrumbs>
      </Text>
      <Text mb="16px">
        <BreadCrumbs separator={<WonIcon width="18px" />}>
          <Link href="/" color="linkADefault" style={{ fontWeight: 400 }}>
            Tokens
          </Link>
          <Link href="/" color="linkADefault" style={{ fontWeight: 400 }}>
            WETH
          </Link>
          <Link color="linkACurrent">WETH</Link>
          {/* <Text color="textDisabled">Crumb 2</Text> */}
        </BreadCrumbs>
      </Text>
    </Text>
  );
};
