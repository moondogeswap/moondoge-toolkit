import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

export type CardBodyProps = SpaceProps;

const CardBody = styled.div<CardBodyProps>`
  box-shadow: 0px 2px 2px rgba(59, 41, 9, 0.08);
  ${space}
`;

CardBody.defaultProps = {
  p: "24px",
};

export default CardBody;
