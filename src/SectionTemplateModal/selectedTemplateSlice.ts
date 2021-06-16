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

      if (!anchorBlock) {
        return state.concat(action.payload.template);
      }

      const { position, index } = anchorBlock;
      let temp = [...state];
      if (position === "above") {
        if (index === 0) {
          return [template, ...temp];
        }
        temp.splice(index, 0, template);
      } else {
        temp.splice(index + 1, 0, template);
      }

      return temp;
    },
    updateBlock: (
      state,
      action: PayloadAction<{ blockIndex: number; template: BlockTemplate }>
    ) => {
      let stateCopy = [...state];
      stateCopy.splice(action.payload.blockIndex, 1, action.payload.template);
      return stateCopy;
    },
    deleteBlock: (state, action: PayloadAction<{ blockIndex: number }>) => {
      return state.filter((_, index) => index !== action.payload.blockIndex);
    },
    clearBlock: (state, action: PayloadAction) => {
      return [];
    },
  },
});

export const { addBlock, updateBlock, deleteBlock, clearBlock } = blockSlice.actions;
export default blockSlice.reducer;
