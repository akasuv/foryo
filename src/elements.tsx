import { ForYoElement } from "./types";
import { v4 as uuid } from "uuid";
import Button from "./components/Button";
import Editable from "./Editable";

const forYoElements: ForYoElement[] = [
  {
    name: "按钮",
    type: "button",
    icon: "toggle-off",
    id: uuid(),
    render() {
      return (
        <Editable type={this.type} name={this.name}>
          <Button />
        </Editable>
      );
    },
  },
];

export default forYoElements;
