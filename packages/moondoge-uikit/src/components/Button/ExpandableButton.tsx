import React from "react";
import { ChevronDownIcon, ChevronUpIcon, ArrowDropDownIcon, ArrowDropUpIcon } from "../Svg";
import Button from "./Button";
import IconButton from "./IconButton";

interface Props {
  onClick?: () => void;
  expanded?: boolean;
}

export const ExpandableButton: React.FC<Props> = ({ onClick, expanded, children }) => {
  return (
    <IconButton aria-label="Hide or show expandable content" onClick={onClick} bk="#FFB000" height="44px" width="44px">
      {children}
      {expanded ? <ArrowDropUpIcon color="invertedContrast" /> : <ArrowDropDownIcon color="invertedContrast" />}
    </IconButton>
  );
};
ExpandableButton.defaultProps = {
  expanded: false,
};

export const ExpandableLabel: React.FC<Props> = ({ onClick, expanded, children }) => {
  return (
    <Button
      variant="text"
      aria-label="Hide or show expandable content"
      onClick={onClick}
      endIcon={expanded ? <ArrowDropUpIcon color="lightDark" /> : <ArrowDropDownIcon color="lightDark" />}
    >
      {children}
    </Button>
  );
};
ExpandableLabel.defaultProps = {
  expanded: false,
};
