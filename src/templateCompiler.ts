import { BlockTemplate } from "./types";

function templateCompiler(template: BlockTemplate | string) {
  console.log("Compiling template", template);
  const components = {
    Card: `<view class='card' style='box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);'></view>`,
    CardActionArea: `<view class='card-action-area'></view>`,
    CardMedia: `<image mode="aspectFit"  style='width: 100%' />`,
    CardContent: `<view class='card-content'></view>`,
    Typography: `<view></view>`,
    CardActions: `<view class='card-actions'></view>`,
    Button: `<button style="display: inline-block"></button>`,
  };

  const styleProperties = {
    fontWeight: "font-weight",
  };

  if (typeof template === "string") {
    return template;
  }
  const { type, props } = template;
  const { children, style } = props;

  let element = components[type];
  if (!element) {
    return;
  }

  let destructuringElement = [...element];
  let insertStartIndex = destructuringElement.indexOf(">") + 1;

  if (style) {
    let styleString = "";
    for (const [key, value] of Object.entries(style)) {
      styleString += `${styleProperties[key]}: ${value};`;
    }
    destructuringElement.splice(
      insertStartIndex - 1,
      0,
      ` style='${styleString}' `
    );
    insertStartIndex = destructuringElement.indexOf(">") + 1;
  }

  if (type === "CardMedia") {
    destructuringElement.splice(
      destructuringElement.indexOf("/") - 1,
      0,
      ` src='${props.image}'`
    );
    return destructuringElement.join("");
  }

  if (children) {
    destructuringElement.splice(
      insertStartIndex,
      0,
      ...children.map((child) => templateCompiler(child))
    );

    return destructuringElement.join("");
  }

  return element;
}

export default templateCompiler;
