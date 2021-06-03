import React, { AnchorHTMLAttributes } from "react";
import { NavLink } from "react-router-dom";
interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  openPageTarget?: boolean
}
const MenuLink: React.FC<Props> = ({ href, openPageTarget, ...otherProps }) => {
  const isHttpLink = href?.startsWith("http");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Tag: any = isHttpLink ? "a" : NavLink;
  const props = isHttpLink ? { href } : { to: href };
  const target = openPageTarget && "_blank";
  return <Tag {...props} {...otherProps} target={target} />;
};

export default MenuLink;
