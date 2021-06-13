import React, { ReactElement } from "react";
import "./index.scss";

interface EditableProps {
  children: ReactElement;
  type: string;
  name: string;
}
const Editable: React.FC<EditableProps> = ({ children, type, name }) => {
  return (
    <div className="border-blue-400 relative p-2 edit-wrapper">
      <div className="text-xs absolute -top-4 -left-0 bg-blue-400 px-2 text-white invisible name-tag">
        {name}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Editable;
