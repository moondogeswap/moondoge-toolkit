import React from "react";
import styled from "styled-components";
/* eslint-disable import/no-unresolved */
import { Meta } from "@storybook/react/types-6-0";
import Heading from "../Heading/Heading";
import CardRibbon from "./CardRibbon";
import UIKitCardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import Card from "./Card";
import CardDefault from "./CardDefault"
import Flex from "../Box/Flex";

const Row = styled.div`
  margin-bottom: 32px;
`;

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {},
} as Meta;

export const Default: React.FC = () => {
  const defaultData = ["default", "defaultYellow", "defaultWhite", "primary",
    'borderG',
    'success',
    'borderY',
    'purple',
    'light',
    'green',
    'grey',
    'lineSquare',
    'darkGrey',

  ]
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <Row>
        {defaultData.map((val, n) => <CardDefault mt="6px" key={n} type={val} />)}
      </Row>
      <Row>
        <Card isActive>
          <CardBody>Active</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Row>
      <Row>
        <Card isSuccess>
          <CardBody>Success</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Row>
      <Row>
        <Card isWarning>
          <CardBody>Warning</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Row>
      <Row>
        <Card isDisabled>
          <CardBody>Disabled</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Row>
    </div>
  );
};

export const CardHeader: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <Row>
        <Card>
          <UIKitCardHeader variant="defaultY">
            <Heading size="xl"></Heading>
          </UIKitCardHeader>
          <CardBody></CardBody>
        </Card>
      </Row>
      <Row>
        <Card>
          <UIKitCardHeader variant="darkY">
            <Heading size="xl"></Heading>
          </UIKitCardHeader>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Row>
      <Row>
        <Card>
          <UIKitCardHeader variant="darkSuccess">
            <Heading size="xl"></Heading>
          </UIKitCardHeader>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Row>
      <Row>
        <Card>
          <UIKitCardHeader variant="darkPurple">
            <Heading size="xl"></Heading>
          </UIKitCardHeader>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Row>
      <Row>
        <Card>
          <UIKitCardHeader variant="darkGreen">
            <Heading size="xl"></Heading>
          </UIKitCardHeader>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Row>
    </div>
  );
};
export const Ribbon: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <Row>
        <Card ribbon={<CardRibbon variantColor="white" text="Label" />}>
          <div style={{ height: "50px", background: "linear-gradient(180deg, #FEF6E3 0%, #FEC23D 100%)" }} />
          <CardBody style={{ height: "100px" }}></CardBody>
        </Card>
      </Row>
      <Row>
        <Card ribbon={<CardRibbon variantColor="gray" text="Ribbon with Long Text" />}>
          <CardBody style={{ height: "100px" }}></CardBody>
        </Card>
      </Row>
      <Row>
        <Card ribbon={<CardRibbon variantColor="orange" text="Success" />}>
          <CardBody style={{ height: "100px" }}></CardBody>
        </Card>
      </Row>
      <Row>
        <Card ribbon={<CardRibbon variantColor="purple" text="Failure" />}>
          <CardBody style={{ height: "100px" }}></CardBody>
        </Card>
      </Row>
      <Row>
        <Card ribbon={<CardRibbon variantColor="purple" text="Failure" ribbonPosition="left" />}>
          <CardBody style={{ height: "100px" }}></CardBody>
        </Card>
      </Row>
    </div>
  );
};
