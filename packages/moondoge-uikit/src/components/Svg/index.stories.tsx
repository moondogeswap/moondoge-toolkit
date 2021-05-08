import React from "react";
import Box from "../Box/Box";
import Flex from "../Box/Flex";
import Text from "../Text/Text";
import Svg from "./Svg";

export default {
  title: "Components/Svg Icons",
  component: Svg,
  argTypes: {},
};

export const Default: React.FC = () => {
  return (
    <div>
      <Svg viewBox="0 0 20 18">
        <path id="Shape" d="M7.214,17.5a1.487,1.487,0,0,0-.127,2.016,1.3,1.3,0,0,0,1.906.134l5.4-5a1.485,1.485,0,0,0,.038-2.114L2.278.39A1.3,1.3,0,0,0,.369.448,1.487,1.487,0,0,0,.423,2.467L11.5,13.531Z" transform="translate(20) rotate(90)" fill="#ec915a" />
      </Svg>
      <Svg color="red" viewBox="0 0 20 18">
        <path id="Shape" d="M7.214,17.5a1.487,1.487,0,0,0-.127,2.016,1.3,1.3,0,0,0,1.906.134l5.4-5a1.485,1.485,0,0,0,.038-2.114L2.278.39A1.3,1.3,0,0,0,.369.448,1.487,1.487,0,0,0,.423,2.467L11.5,13.531Z" transform="translate(20) rotate(90)" fill="#ec915a" />
      </Svg>
      <Svg color="primary" width="40px" viewBox="0 0 40 30">
        <path id="Shape" d="M14.374,34.993a2.982,2.982,0,0,0-.253,4.032,2.583,2.583,0,0,0,3.8.269l10.764-10a2.977,2.977,0,0,0,.076-4.227L4.539.78A2.582,2.582,0,0,0,.735.9,2.983,2.983,0,0,0,.843,4.934L22.91,27.062Z" transform="translate(40) rotate(90)" fill="#ec915a" />
      </Svg>
    </div>
  );
};

const context = require.context("./Icons", true, /.tsx$/);
const components = context.keys().reduce((accum, path) => {
  const file = path.substring(2).replace(".tsx", "");
  return {
    ...accum,
    [file]: context(path),
  };
}, {});

export const Icons: React.FC = () => {
  return (
    <Flex justifyContent="start" alignItems="center" flexWrap="wrap">
      {Object.keys(components).map((file) => {
        const Icon = components[file].default;
        return (
          <Flex
            key={file}
            flexDirection="column"
            alignItems="center"
            width="128px"
            style={{ border: "1px solid #efefef" }}
            justifyContent="center"
            py="8px"
            m="4px"
          >
            <Flex alignItems="center" justifyContent="center" style={{ flex: 1 }} height="100%">
              <Icon width="32px" />
              <Icon width="14px" color="#000" ml="4px" />
            </Flex>
            <Box py="4px">
              <Text color="textSubtle" fontSize="14px">
                {file}
              </Text>
            </Box>
          </Flex>
        );
      })}
    </Flex>
  );
};
