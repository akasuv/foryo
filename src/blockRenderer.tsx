import * as MaterialComponent from "@material-ui/core";
import Editable from "./Editable";
import React from "react";

const blockRenderer = (element, editable: Boolean = false) => {
  if (!element.type) {
    return null;
  }
  const children =
    element.props && element.props.children
      ? element.props.children.map((child) => blockRenderer(child, editable))
      : undefined;

  let component;

  if (element.props && element.props.component) {
    component = element.props.component;
  }

  const RcElement =
    component === "p" || component === "h2"
      ? React.createElement("p", element.props, element.props.children)
      : React.createElement(
          MaterialComponent[element.type],
          element.props,
          children
        );

  return editable ? (
    <Editable element={element}>{RcElement}</Editable>
  ) : (
    RcElement
  );
};

export default blockRenderer;
