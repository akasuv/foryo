import React, { ReactElement } from "react";
import "./index.scss";
import { BlockTemplate } from "../types";

interface EditableProps {
  children: ReactElement;
  element: BlockTemplate;
}
const Editable: React.FC<EditableProps> = ({ children, element }) => {
  const handleClick = () => {
    console.log("Editing element", element);
  };
  return (
    <div
      className="border-blue-400 relative p-2 edit-wrapper"
      onClick={handleClick}
    >
      <div className="text-xs absolute -top-4 -left-0 bg-blue-400 px-2 text-white invisible name-tag">
        {element.type}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Editable;
