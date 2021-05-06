import { capitalize } from "lodash";
import React, { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import styled from "styled-components";
import Box from "../Box/Box";
import Flex from "../Box/Flex";
import { AddIcon, AutoRenewIcon, LogoIconDoge, LineIcon } from "../Svg";
import IconButton from "./IconButton";
import Button from "./Button";
import { ExpandableButton, ExpandableLabel } from "./ExpandableButton";
import { scales, variants } from "./types";
export default {
  title: "Components/Button",
  component: Button,
  argTypes: {},
};

const Row = styled(Flex)`
  margin-bottom: 32px;
  & > button + button,
  & > a + a {
    margin-left: 16px;
  }
`;

const ButtonUnStyled = styled.div`
  width: 150px;
  background: #FFFFFF;
  border: 1px solid #707070;
  opacity: 1;
  border-radius: 18px;
  padding:7px 15px;
`;

const getButtonIconStyle = (scale: string) => {
  if (scale === 'md') {
    return {
      width: '230px',
      height: '60px'
    }
  }
  if (scale === 'sm') {
    return {
      width: '115px',
      height: '40px'
    }
  }
  if (scale === 'xs') {
    return {
      height: '20px',
      width: '58px'
    }
  }
}
const getSecondaryStyle = (scale: string) => {
  if (scale === 'md') {
    return {
      width: '260px',
      height: '44px'
    }
  }
  if (scale === 'sm') {
    return {
      width: '195px',
      height: '33px'
    }
  }
  if (scale === 'xs') {
    return {
      width: '130px',
      height: '22px',

    }
  }
}

export const Default: React.FC = () => {
  return (
    <>
      <Box mb="32px">
        <ButtonUnStyled>Unstyled Button</ButtonUnStyled>
      </Box>
      <Box mb="8px">
        {Object.values(scales).map((scale) => {
          return (
            <Button key={scale} variant="connection" scale={scale} mr="8px">
              {`${capitalize("connection")}`}
            </Button>
          );
        })}
        {/* {Object.values(variants).map((variant) => {
          return (
            <Box key={variant} mb="32px">
              {Object.values(scales).map((scale) => {
                return (
                  <Button key={scale} variant={variant} scale={scale} mr="8px">
                    {`${capitalize(variant)} ${scale.toUpperCase()}`}
                  </Button>
                );
              })}
            </Box>
          );
        })} */}
      </Box>
      <Box mb="8px">
        {Object.values(scales).map((scale) => {
          return (
            <Button key={scale} variant="primary" scale={scale} mr="8px">
              {`${capitalize("primary")} ${scale.toUpperCase()}`}
            </Button>
          );
        })}
      </Box>
      <Box mb="8px">
        {Object.values(scales).map((scale) => {
          return (
            <Button key={scale} variant="defaultIcon" scale={scale} mr="8px" style={getButtonIconStyle(scale)} disabled>
              <span style={scale === 'xs' ? { left: 0 } : scale === 'sm' ? { left: 10 } : { left: 20 }}></span>
              {`${scale.toUpperCase()}`}
            </Button>
          );
        })}

      </Box>
      <Box mb="8px">
        {Object.values(scales).map((scale) => {
          return (
            <Button key={scale} variant="defaultIcon" scale={scale} mr="8px" style={getButtonIconStyle(scale)}>
              <span style={scale === 'xs' ? { left: 0 } : scale === 'sm' ? { left: 10 } : { left: 20 }}></span>
              {`${scale.toUpperCase()}`}
            </Button>
          );
        })}
      </Box>
      <Box mb="8px">
        {Object.values(scales).map((scale) => {
          return (
            <Button key={scale} variant="defaultIcon" scale={scale} mr="8px" style={getButtonIconStyle(scale)} disabled>
              {`${scale.toUpperCase()}`}
            </Button>
          );
        })}

      </Box>
      <Box mb="8px">
        {Object.values(scales).map((scale) => {
          return (
            <Button key={scale} variant="defaultIcon" scale={scale} mr="8px" style={getButtonIconStyle(scale)}>
              {`${scale.toUpperCase()}`}
            </Button>
          );
        })}
      </Box>
      <Box mb="8px">
        {Object.values(scales).map((scale) => {
          return (
            <Button key={scale} variant="secondary" scale={scale} mr="8px" style={getSecondaryStyle(scale)}>
              {`${scale.toUpperCase()}`}
            </Button>
          );
        })}
      </Box>
      <Box mb="8px">
        {Object.values(scales).map((scale) => {
          return (
            <Button key={scale} variant="square" scale={scale} mr="8px" style={getSecondaryStyle(scale)}>
              {`${scale.toUpperCase()}`}
            </Button>
          );
        })}
      </Box>
      <Box mt="8px">
        <Button mr="8px" disabled style={{ width: 230 }}>
          MD
        </Button>
        <Button variant="secondary" disabled style={{ width: 230, border: '4px solid #EEEEEE' }}>
          MD
        </Button>
      </Box>
      <Box>
        <Button mt="8px" isVariant endIcon={<LineIcon />} >
          Read more
        </Button>
      </Box>
      <Box mt="8px">
        <Button mr="8px" variant="max">
          MAX
        </Button>
        <Button mr="8px" variant="UnstakeDOGE">
          Unstake DOGE
        </Button>
      </Box>
    </>
  );
};

export const Anchors: React.FC = () => {
  return (
    <>
      <Box mb="32px">
        {Object.values(variants).map((variant) => {
          return (
            <Box key={variant} mb="32px">
              {Object.values(scales).map((scale) => {
                return (
                  <Button
                    as="a"
                    href="https://pancakeswap.finance"
                    key={scale}
                    variant={variant}
                    scale={scale}
                    external
                    mr="8px"
                  >
                    {`${capitalize(variant)} anchor ${scale.toUpperCase()}`}
                  </Button>
                );
              })}
            </Box>
          );
        })}
      </Box>
      <Box>
        <Button as="a" href="https://pancakeswap.finance" mr="8px" external disabled>
          Disabled
        </Button>
        <Button as="a" href="https://pancakeswap.finance" variant="secondary" external disabled>
          Disabled
        </Button>
      </Box>
    </>
  );
};

export const Variants: React.FC = () => {
  return (
    <Box width="640px">
      <BrowserRouter>
        <Row>
          <Button as={Link} to="/router-link" variant="secondary">
            As an React Router link
          </Button>
        </Row>
        <Row>
          <Button width="100%">Full size</Button>
        </Row>
        <Row>
          <Button isLoading endIcon={<AutoRenewIcon spin color="currentColor" />}>
            Approving
          </Button>
          <Button isLoading variant="success">
            Approving
          </Button>
        </Row>
        <Row>
          <Button startIcon={<LogoIconDoge />}>Start Icon</Button>
          <Button endIcon={<LogoIconDoge />}>End Icon</Button>
          <Button startIcon={<LogoIconDoge />} endIcon={<LogoIconDoge />}>
            Start & End Icon
          </Button>
        </Row>
        <Row>
          <IconButton>
            <LogoIconDoge />
          </IconButton>
          <IconButton>
            <AddIcon />
          </IconButton>
        </Row>
        <Row>
          <IconButton scale="sm" variant="danger">
            <LogoIconDoge />
          </IconButton>
          <IconButton scale="sm" variant="success">
            <AddIcon color="currentColor" />
          </IconButton>
        </Row>
      </BrowserRouter>
    </Box>
  );
};

export const Expandable: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Box width="640px">
      <BrowserRouter>
        <Row>
          <ExpandableButton expanded={expanded} onClick={() => setExpanded((prev) => !prev)} />
          <ExpandableLabel expanded={expanded} onClick={() => setExpanded((prev) => !prev)}>
            Details
          </ExpandableLabel>
        </Row>
      </BrowserRouter>
    </Box>
  );
};
