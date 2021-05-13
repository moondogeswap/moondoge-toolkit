import React from "react";
import styled, { keyframes } from "styled-components";
import PanIcon from "./PanIcon";
import PancakeIcon from "./PancakeIcon";
// import MoonDogeIcon from "./MoonDogeIcon"
import moonDoge from "./moonDoge.png"
import { SpinnerProps } from "./types";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const move = keyframes`
  0%{ opacity: 0.2;}
  25%{ opacity: 0.2;}
  50%{opacity: 0.8;}
  75%{opacity: 0.4;}
  100%{opacity: 0.2;}
`;
const span1 = keyframes`
0%{ opacity: 1;}
25%{ opacity: 0.2;}
50%{opacity: 0.4;}
75%{opacity: 0.6;}
100%{opacity: 0.8;}
`;
const span2 = keyframes`
0%{ opacity: 0.8;}
25%{ opacity: 1;}
50%{opacity: 0.2;}
75%{opacity: 0.4;}
100%{opacity: 0.6;}
`;
const span3 = keyframes`
0%{ opacity: 0.6;}
25%{ opacity: 0.8;}
50%{opacity: 1;}
75%{opacity: 0.2;}
100%{opacity: 0.4;}
`;
const span4 = keyframes`
0%{ opacity: 0.4;}
25%{ opacity: 0.6;}
50%{opacity: 0.8;}
75%{opacity: 1;}
100%{opacity: 0.2;}
`;
const span5 = keyframes`
0%{ opacity: 0.2;}
25%{ opacity: 0.4;}
50%{opacity: 0.6;}
75%{opacity: 0.8;}
100%{opacity: 1;}
`;
const float = keyframes`
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(10px);
	}
	100% {
		transform: translatey(0px);
	}
`;

const Container = styled.div<SpinnerProps>`
  position: relative;
  width:${({ size }) => size || 142}px;
  height:${({ size }) => size || 142}px;
  text-align:center;
`;
const Image = styled.img`
  animation: ${move} 2s linear infinite;
`
const DotBot = styled.div`
  display:flex;
  justify-content: center;
  margin-top:16px;
  span{
    width: 11px;
    height: 11px;
    border-radius: 50%;
    margin-right:4px;
    background: #EC915A;
  }
  span:nth-child(1){
    animation: ${span1} 2s linear infinite;
  }
  span:nth-child(2){
    animation: ${span2} 2s linear infinite;
  }
  span:nth-child(3){
    animation: ${span3} 2s linear infinite;
  }
  span:nth-child(4){
    animation: ${span4} 2s linear infinite;
  }
  span:nth-child(5){
    animation: ${span5} 2s linear infinite;
  }
  `;
const RotatingPancakeIcon = styled(PancakeIcon)`
  position: absolute;
  top: 0;
  left: 0;
  animation: ${rotate} 2s linear infinite;
  transform: translate3d(0, 0, 0);
`;

const FloatingPanIcon = styled(PanIcon)`
  animation: ${float} 6s ease-in-out infinite;
  transform: translate3d(0, 0, 0);
`;

const Spinner: React.FC<SpinnerProps> = ({ size = 142 }) => {
  return (
    <Container size={size}>
      <Image src={moonDoge} alt="" width={size} height={size} />
      <DotBot>
        <span />
        <span />
        <span />
        <span />
        <span />
      </DotBot>
      {/* <RotatingPancakeIcon width={`${size * 0.5}px`} /> */}
      {/* <FloatingPanIcon width={`${size}px`} /> */}
    </Container>
  );
};

export default Spinner;
