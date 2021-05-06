import styled from "styled-components";
import Text from "../Text/Text";
import { tags, sizes, HeadingProps } from "./types";

const style = {
  [sizes.MD]: {
    fontSize: "24px",
    fontSizeLg: "24px",
  },
  [sizes.LG]: {
    fontSize: "32px",
    fontSizeLg: "32px",
  },
  [sizes.XL]: {
    fontSize: "40px",
    fontSizeLg: "40px",
  },
  [sizes.XXL]: {
    fontSize: "50px",
    fontSizeLg: "50px",
  },
};

const Heading = styled(Text).attrs({ bold: true }) <HeadingProps>`
  font-size: ${({ size }) => size ? style[size].fontSize : '18px'};
  font-weight: 600;
  line-height: 1.1;

  ${({ theme }) => theme.mediaQueries.lg} {
    font-size: ${({ size }) => style[size || sizes.MD].fontSizeLg};
  }
  &:hover{
    color:#EC915A
  }
`;

Heading.defaultProps = {
  as: tags.H2,
};

export default Heading;
