import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AnchorBlock, BlockTemplate } from "../types";
import { v4 as uuid } from "uuid";

const initialState: BlockTemplate[] = [];

const blockSlice = createSlice({
  name: "block",
  initialState,
  reducers: {
    addBlock: (
      state,
      action: PayloadAction<{
        anchorBlock?: AnchorBlock | null;
        template: BlockTemplate;
      }>
    ) => {
      const { anchorBlock, template } = action.payload;

      console.log("AnchorBlock", anchorBlock)

      if (!anchorBlock) {
        return state.concat(action.payload.template);
      }

      const { position, index } = anchorBlock;
      let temp = [...state];
      if (position === "above") {
        if (index === 0) {
            console.log("Above first", position, index, temp, [template, ...temp])
          return [template, ...temp];
        }
        temp.splice(index, 0, template);
      } else {
        temp.splice(index + 1, 0, template);
      }

      return temp;
    },
  },
});

export const { addBlock } = blockSlice.actions;
export default blockSlice.reducer;
