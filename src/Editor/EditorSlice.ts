import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AnchorBlock } from "../types";

interface InitialEditorState {
  anchorBlock?: AnchorBlock | null;
}

const initialState: InitialEditorState = {};

const editorSlice = createSlice({
  name: "editorStateInRedux",
  initialState,
  reducers: {
    updateAnchorBlock: (state, action: PayloadAction<InitialEditorState['anchorBlock']>) => {
        console.log("Updating anchor block", action.payload)
      return { ...state, anchorBlock: action.payload };
    },
  },
});

export const { updateAnchorBlock } = editorSlice.actions;
export default editorSlice.reducer;
