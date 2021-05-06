import React from "react";
import times from "lodash/times";
import Flex from "../Box/Flex";
import BackgroundImage from "./BackgroundImage";
import Img from "./Image";

export default {
  title: "Components/Image",
  argTypes: {},
};

export const Image: React.FC = () => {
  return (
    <>
      <div style={{ marginBottom: 8 }}>
        <Img src="https://via.placeholder.com/500x500" width={500} height={500} alt="test" />
      </div>
      <div style={{ marginBottom: 8 }}>
        <Img src="https://via.placeholder.com/1518x140" width={1518} height={140} alt="test" />
      </div>
      <div style={{ marginBottom: 8 }}>
        <Img src="https://via.placeholder.com/1518x352" width={1518} height={352} alt="test" />
      </div>
    </>
  );
};

export const ImageResponsive: React.FC = () => {
  return (
    <div>
      <Img src="https://via.placeholder.com/800x400" width={800} height={400} responsive />
      <div>Image</div>
    </div>
  );
};

export const Background: React.FC = () => {
  return (
    <div>
      <BackgroundImage src="https://via.placeholder.com/800x400" width={800} height={400} mr="16px" />
      <div>Background Image</div>
    </div>
  );
};

export const BackgroundResponsive: React.FC = () => {
  return (
    <div>
      <BackgroundImage src="https://via.placeholder.com/800x400" width={800} height={400} responsive mr="16px" />
      <div>Background Image</div>
    </div>
  );
};

export const LazyImages: React.FC = () => {
  return (
    <Flex flexWrap="wrap">
      {times(40, (index) => (
        <Img
          key={index}
          src={`https://via.placeholder.com/${150 + index}`}
          width={150}
          height={150}
          mb="16px"
          mr="16px"
        />
      ))}
    </Flex>
  );
};

export const LazyBackgrounds: React.FC = () => {
  return (
    <Flex flexWrap="wrap">
      {times(40, (index) => (
        <BackgroundImage
          key={index}
          src={`https://via.placeholder.com/${150 + index}`}
          width={150}
          height={150}
          mb="16px"
          mr="16px"
        />
      ))}
    </Flex>
  );
};
