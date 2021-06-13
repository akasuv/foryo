import { ForYoElement } from "./types";
import * as MaterialComponent from "@material-ui/core";
import React from "react";

const blockRenderer = (element) => {
  if (!element.type) {
    return null;
  }
  const children =
    element.props && element.props.children
      ? element.props.children.map((child) => blockRenderer(child))
      : undefined;

  return React.createElement(
    MaterialComponent[element.type],
    element.props,
    children
  );
};

export default blockRenderer;
